const mongoose = require('mongoose')

const schema = mongoose.Schema;


const NinjaSchema  = new schema({
    name : {
        type : String,
        required:[true,"Name field is required"]
    },
    rank : {
        type: String,
    },
    available: {
        type:Boolean,
        default:false
    }
});

const Ninja = mongoose.model("ninja",NinjaSchema);

module.exports = Ninja