const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {type: Date, default:Date.now},
    exercises: 
        [
            {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
            }
        ],
        totalDuration: {type: Number, default: 0}
    },
);


const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;