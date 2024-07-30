const mongoose = require('mongoose');

// schema shows the structure of doc with properties

// mongoose.model( collection name (holds all docs) , schema type eg. income )

const IncomeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
             required: true,
             trim: true, //removes whitespace
             maxLength: 50
        },
        amount: {
            type: Number,
            required: true,
            maxLength: 15
        },
        type: {
            type: String,
            default: "income" //sets the default value
        },
        date: {
            type: Date,
            required: true,
            trim: true
        },
        category: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            maxLength: 20,
            trim: true
        }

    }, {timestamps: true} //makes so 2 properties are created (object made) and (object last updated)
)
module.exports = mongoose.model("Income", IncomeSchema)