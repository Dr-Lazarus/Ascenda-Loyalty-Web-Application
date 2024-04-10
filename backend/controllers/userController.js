// Imports 
import asyncHandler from "express-async-handler";
import User from "./../models/userModel.js";
import generateToken from "./../JWTMiddleware/generateToken.js";



// Authenticaing User 
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    throw new Error("Invalid Email or Password");
  }
});






// Registering User 
const registerUser = asyncHandler(async (req, res) => {
	const { firstName, lastName, contactNumber, email, password, pic } =
		req.body;

	const existingUser = await User.findOne({ email });

	if (existingUser) {
		throw new Error("User already exists");
	}

	const user = await User.create({
		firstName,
		lastName,
		contactNumber,
		email,
		password,
		pic,
	});

	if (user) {
		res.json({
			_id: user._id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			token: generateToken(user._id),
			pic: user.pic,
		});
		console.log("Running");

  if (user) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName : user.lastName,
      email: user.email,
      token: generateToken(user._id),
      pic: user.pic,

    });
    console.log("Running")
    
    console.log(`My user exists $(user)`)
  } else {

    throw new Error("User not found, please contact administrator");
  }
}});





//Check Authenticated
function checkAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
}
function checkNotAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return res.redirect("/");
	}
	next();
}




// Update User Profile 
const updateUserProfile = asyncHandler(async (req, res) => {
	console.log("Running123");
	const user = await User.findById(req.user._id);
	console.log("Running");

	console.log(`My user exists $(user)`);

	if (user) {
		user.firstName = req.body.firstName || user.firstName;
		user.lastName = req.body.lastName || user.lastName;
		user.email = req.body.email || user.email;
		user.pic = req.body.pic || user.pic;
		user.contactNumber = req.body.contactNumber || user.contactNumber;
		if (req.body.password) {
			user.password = req.body.password;
		}

		const updatedUser = await user.save();

		res.json({
			_id: updatedUser._id,
			firstName: updatedUser.firstName,
			lastName: updatedUser.lastName,
			email: updatedUser.email,
			pic: updatedUser.pic,
			token: generateToken(updatedUser._id),
		});
	} else {
		throw new Error("User Not Found");
	}
});




//Get One User 
const getOneUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	if (!user) res.status(404).send("User not found");
	console.log(user);
	res.status(200).json({
		_id: user._id,
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		contactNumber: user.contactNumber,
		token: generateToken(user._id),
		pic: user.pic,
	});
});





//Get all Users 
const getAllUsers = asyncHandler(async (req, res, next) => {
	const users = await User.find();

	// SEND RESPONSE
	res.status(200).json({
		status: "success",
		results: users.length,
		data: {
			users,
		},
	});
});

// Delete one User 
const deleteUser = asyncHandler(async (req, res, next) => {
    const doc = await User.findByIdAndDelete(req.user.id);

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

	res.cookie('jwt', 'loggedout', {
		expires: new Date(Date.now() + 10 * 1000),
		httpOnly: true
	  });

    res.status(204).json({
      status: 'success',
      data: null
    });
  });




export {
	getOneUser,
	getAllUsers,
	authUser,
	updateUserProfile,
	registerUser,
	checkAuthenticated,
	checkNotAuthenticated,
	deleteUser
};

