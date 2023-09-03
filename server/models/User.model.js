const mongoose=require('mongoose');
const {Schema}=mongoose;

const User=new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password:{type: String, required: true},
    usecaseType:{type:String, required:true},
    profession:{type:String,required:true},
    date: {type: Date, default: Date.now}
});

module.exports=mongoose.model('User',User);

