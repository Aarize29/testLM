const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const bodyParser = require('body-parser');
const PORT=3000
const app=express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());

//Connect to MongoDB

mongoose.connect('mongodb+srv://Aarize:2dQmahVgHQGSmakp@cluster0.tqta33c.mongodb.net/?retryWrites=true&w=majority'
).then(()=>{
    console.log('MongoDB Connected')
}
).catch(err=>console.log(err))



//routing
const userRoutes = require('./routes/userRoutes');

app.get('/',(req,res)=>{
    res.send("Salam Alikum")
})


app.use('/auth',userRoutes)



app.listen(PORT,()=>{
    console.log(`Server is Listening on PORT: ${PORT}`)
})