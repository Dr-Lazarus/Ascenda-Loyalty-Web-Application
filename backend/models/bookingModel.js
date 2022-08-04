import mongoose from "mongoose";



  


const bookingSchema = new mongoose.Schema(
    {
        destinationID:{
            type: String,
            required: [true,"A destination ID is required"],
            select: false

        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: [true, 'Booking must belong to a User!']
          },
        hotelID:{
            type: String,
            required: [true,"A hotel ID is required"],
            select: false   

        },
        Number_of_nights:{
            type: Number,
            required: [true, "Number of Nights is required"]
        },
        startDate: {
            type: Date,
            required: [true, "Start Date is required"]

        },
        endDate: {
            type: Date,
            required: [true, "End Date is required"]

        },
        Number_of_adults:{
            type:Number,
            required: [true,"Number of adults is required"]
        },
        message_to_hotel:{
            type: String
        },
        room_type:
        {
            type: String,
            required: [true,"room type is required"]
        },
        Number_of_rooms: {
            type: String,
            required: [true,"Number of rooms is required"]

        },
        price:{
            type: Number,
            required: [true,"price is required"]
        },
        salutation:{
            type: String,
            required: [true,"Salutaion is required"]
        }, 
        firstName:{
            type: String,
            required: [true,"firstName is required"]
        },
        lastName:{
            type: String,
            required: [true,"lastName is required"]
        },  

    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
      }
    );



bookingSchema.virtual('status').get(function() {

    const date = new Date()
    if(this.startDate > date && this.endDate > date){
        return "Active"
    }
    else if (this.startDate <= date && this.endDate>=date){
        return "In Progress"
    }
    else 
    {
        return "Inactive"
    }

})

  bookingSchema.pre(/^find/, function(next) {
    this.populate('user');
    next();
  });
  

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
