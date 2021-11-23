var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology : true,
    useNewUrlParser: true,
}

mongoose.connect('mongodb+srv://devenzo:stargate2033@cluster0.tdyb7.mongodb.net/weatherapp?retryWrites=true&w=majority',
    options,
    function(err){
        console.log(err);
    }
)

// module.exports = mongoose