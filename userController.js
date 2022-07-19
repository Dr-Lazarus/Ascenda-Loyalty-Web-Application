//POST FOR LOGIN
//GET FOR PROFILE
//POST FOR REGISTER
import asyncHandler from "express-async-handler";
import User from "../userModel.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
    });
  } else {
    throw new Error("Invalid Email or Password");
  }
});


const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
  
      pic: user.pic,

    });
  } else {

    throw new Error("User not found, please contact administrator");
  }
});

function checkAuthenticated(req,res,next){
  if (req.isAuthenticated()) {
      return next()
  }
  res.redirect('/login')
}
function checkNotAuthenticated(req,res,next){
  if (req.isAuthenticated()){
      return res.redirect('/')
  }
  next()
}

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
  
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.pic = req.body.pic || user.pic;
      if (req.body.password) {
        user.password = req.body.password;
      }
  
      const updatedUser = await user.save();
  
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        pic: updatedUser.pic,

      });
    } else {
      throw new Error("User Not Found");
    }
  });
  
  export { authUser, updateUserProfile, registerUser, checkAuthenticated, checkNotAuthenticated };