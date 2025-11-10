const { default: mongoose } = require('mongoose')
const mogoose = require('mongoose')

const ownerScheam = mongoose.Schema({
    fullName:String,
    email:String,
    password:String,
    products:{
        type:Array,
        default:[]
    },
    picture:String,
    gstIn:String,
})

module.exports = mongoose.model('owner',ownerScheam)