import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
      
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      // select: false

    },
    contactNumber:{
      type: String,
      required:true,
      unique: true
    },
    // passwordConfirm: {
    //     type: String,
    //     required: [true, 'Please confirm your password'],
    //     validate: {
         
    //       validator: function(check) {
    //         return check === this.password;
    //       },
    //       message: "Passwords do not match"
    //     } },
    
    pic: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(8);
  this.password = await bcrypt.hash(this.password, salt);
  // this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model("User", userSchema);

export default User;