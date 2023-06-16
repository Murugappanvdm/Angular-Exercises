var express = require("express");
var route = express.Router();
var fs = require("fs");

route.post("/enquiries", function (request, response) {
    let file;
    if (request.files) {
        file = request.files.supportfile;
        file.mv("c:/temp/" + file.name);
    }
    let enquiry = {
        name: request.body.name,
        subject: request.body.subject,
        description: request.body.description,
        email: request.body.email,
        filename: file != undefined ? file.name : "no attached doc"
    }

    fs.readFile("Data/data.json", "utf8", function (err, data) {
        if (err) {
            console.log(err);
            response.sendStatus(500);
        }
        else {
            let enquiries = JSON.parse(data);

            enquiries.push(enquiry);
            fs.writeFile("Data/data.json", JSON.stringify(enquiries), function (err) {
                if (err)
                    response.sendStatus(500);
                else
                    response.send("DATA STORED IN FILE");
            });
        }

    })


});

route.get("/enquiries", function (request, response) {
    fs.readFile("Data/data.json", "utf8", function (err, data) {
        if (err) {
            console.log(err);
            response.sendStatus(500);
        }
        else {
            console.log(data);
            //response.render("people",{people:JSON.parse(data),programmer:"George"})
            response.json(JSON.parse(data))
        }
    });
});

module.exports = route;