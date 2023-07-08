
const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
    {
        branch: {
            type: String,
            required: [true, "please fill your branch."],
            unique: true
        },
        refuelMax: {
            type: Object
            
        },
        refuel: {
            type: Object
          
        },
        refuelDodo: {
            type: Object
            
        },
        chickwizz: {
            type: Object
            
        },
        chickwizzMeal: {
            type: Object
            
        }
}, {timestamps:true}
);


const chickenRepublic = mongoose.model("chickenRepublic", restaurantSchema)


module.exports = chickenRepublic