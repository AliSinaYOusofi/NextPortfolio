const app = require("express");
const cors = require("cors");
const router = app.Router();
const express = app();
const port = 3001;
const nodemailer = require("nodemailer");

// allow cors
express.use(cors({
    origin: true,
    credentials: true
}));

// damn this line
express.use(app.json());


express.use("/", router);

// this is working fine
express.post("/api/email", async (req, res) => {
    // this is working perfectly fine
    const {email, subject, description} = req.body;
    // sending email

    // checker
    let flag = true;

    let transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "cb4bcfb37d9f18",
          pass: "ce8aada5bf241e"
        }
      });

    // message format
    let message = {
        from: email,
        to: 'tinayousofiali@gmail.com',
        subject,
        text: description,
    }

    try {
        transport.sendMail(message, function(error, info) {
            if (error) {
                console.log(error);
                flag = false;
            } else {
                console.log("sent");
            }
            
        });
    }catch(error) {
        console.log(error);
    }
    
    flag ? res.send({message: "done"}) : res.send({message: "failed"});
});

express.listen(port, () => console.log("running"));