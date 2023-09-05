const mongoose=require('mongoose');
const {Schema}=mongoose;

const User=new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password:{type: String, required: true},
    usecaseType:{type:String, required:true},
    profession:{type:String,required:true},
    company:{type:String,default:"no company specified"},
    website:{type:String,default:"no website specified"},
    date: {type: Date, default: Date.now}
});

module.exports=mongoose.model('User',User);

