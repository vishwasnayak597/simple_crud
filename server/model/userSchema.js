const mongoose=require('mongoose');
const autoIncrement=require('mongoose-auto-increment');

const userSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phone:Number

})
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'User');
// we need to turn it into a model
const postUser = mongoose.model('User', userSchema);

//const User=mongoose.model("User",userSchema)

module.exports=postUser;