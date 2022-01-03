const User=require('../model/userSchema')

exports.getUsers=async (req,res) =>{
      
    try {
        console.log("Entered contrllee")
        const users = await User.find();
        console.log(users)
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}



exports.addUser=async (req,res) =>{
    const user=req.body
    const newUser=new User(user);

    try {
        await newUser.save();
        res.status(201).json(newUser);

    } catch (error) {
        res.status.json(409).json({message:error.message})
    }
}

exports.getUserById=async (req,res) =>{
    const id=req.params.id
    
    try {
        const user=await User.findById(id)
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

exports.editUser=async (req,res) =>{
    let user = await User.findById(req.params.id);
    //updated useer 
    user = req.body;

    const editUser = new User(user);
    try{
        await User.updateOne({_id: req.params.id}, editUser);
        res.status(201).json(editUser);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }

}

exports.deleteUser=async (req,res) =>{

    try{
        await User.deleteOne({_id: req.params.id})
        res.status(201).json("User deleted successfully")
    } catch(error){
        res.status(409).json({message:error.message});
    }
}