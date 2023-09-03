const express = require('express');
const router = express.Router();
const User=require('../models/User.model')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/register', (req, res) => {
  // Handle GET /users
  res.send("hello from user")
});

//Register
router.post('/register', async(req, res) => {
  // Handle POST /users
  const {email,password}=req.body
  //console.log(req.body)


  try{
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user= await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        usecaseType:req.body.usecaseType,
        profession:req.body.profession
    })
    res.json({status: 'ok'})
}
catch(err){
    res.json({status: 'error'})
}
});


//Login

router.post('/login', async (req, res) => {
    //console.log(req.body);
  
    try {
      const user = await User.findOne({
        email: req.body.email,
      });
  
      if (!user) {
        //console.log('User not found');
        return res.json({ status: 'not ok' });
      }
      
      const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
  
      if (isPasswordValid) {
        //console.log('User found');
        //console.log(user)
        const token = jwt.sign(
          {
            _id: user._id,
            name: user.name,
            email: user.email,
          },
          'secret123'
        );
  
        return res.json({ status: 'ok', user: token, usecaseType:user.usecaseType });
      } else {
        console.log('Password is invalid');
        return res.json({ status: 'not ok' });
      }
    } catch (error) {
      console.error('An error occurred:', error);
      return res.status(500).json({ status: 'error', error: error.message });
    }
  });
  

module.exports = router;
