const User = require('../models/user');

const addUser = async (req,res,next) =>{
  
    try{
      const name = req.body.name;
      const email = req.body.email;
      const phoneNumber = req.body.phoneNumber;
  
      const data = await User.create({name : name,email :email,phoneNumber : phoneNumber});
      res.status(201).json({newUserDetails: data});
    }catch(err){
        res.status(500).json({
        error: err
      })
  
    }
}

const getUser = async (req,res,next) => {
    try{
      const users = await User.findAll();
      res.status(200).json({allUsers: users});
    }
    catch(err){
      console.log('GET user is failing', JSON.stringify(err))
      res.status(500).json({
      error: err
    })
  
  }
    
}

const deleteUser = async (req,res,next) => {
    try{
      if(!req.params.id){
        console.log("ID is missing")
        return res.status(400).json({err : 'ID is missing'});
  
      }
      const uId = req.params.id;
      await User.destroy({where: {id: uId}});
      res.status(200);
  
    }
    catch{(error) =>{
      console.log(error);
      res.status(500).json(error);
    }}
    
}


const editUser =  async (req, res, next) => {
    try {
      const userId = req.params.id;
      const updatedName = req.body.name;
      const updatedEmail = req.body.email;
      const updatedPhoneNumber = req.body.phoneNumber;
      const user = await User.findByPk(userId);
      user.name = updatedName;
      user.email = updatedEmail;
      user.phoneNumber = updatedPhoneNumber;
      await user.save();
      res.status(200).json({ updatedUser: user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'An error occurred' });
    }
}


module.exports = {
    addUser,
    getUser,
    deleteUser,
    editUser
}