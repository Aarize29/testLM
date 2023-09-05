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


router.get('/userdetail',verifyToken,async(req,res)=>{
          const currentuser=req.user;
         // console.log(currentuser)
          try{
            const user = await User.findOne({
              _id:currentuser._id,
            });
            console.log(user)

            res.json({user})
          }
          catch(err){
            console.log(err);
          }
})


//update user
router.put('/updateprofile', verifyToken, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $set: req.body },
      { new: true }
    ).select('-password');

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Middleware function to verify JWT token
function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized. Bearer token missing or invalid.' });
  }

  const extractedToken = token.split(' ')[1];

  try {
    // Verify and decode the token
    const decodedToken = jwt.verify(extractedToken, 'secret123'); // Replace with your actual secret key

    // Attach the user object to the request for further use in routes
    req.user = decodedToken;

    // Continue to the next middleware or route
    next();
  } catch (error) {
    // Handle token verification errors (e.g., token expired, invalid token)
    return res.status(401).json({ error: 'Unauthorized. Token is not valid.' });
  }
}
  

module.exports = router;
