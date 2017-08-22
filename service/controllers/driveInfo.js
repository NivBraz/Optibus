var request = require("request");
var url = "http://optibus-interview.herokuapp.com/"

exports.getData = function(req,res){
   request({
    url: url,
    json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.send(body) // Print the json response
        }
        else
            console.log(error);
    })
}