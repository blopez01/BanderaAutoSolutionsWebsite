//import needed modules
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

//CORS_URL corresponds to the URL where the form is located
const cors = require('cors')({ origin: process.env.CORS_URL });

//create and config transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

//export the cloud function named sendEmail
exports.sendEmail = functions.https.onRequest((req, res) => {
  //for testing purposes
  console.log(
    'from sendEmail function. The request object is:',
    JSON.stringify(req.body)
  );

  //enable CORS using the cors express middleware.
  cors(req, res, () => {
    //get contact form data from the req and then assigned it to variables
    const email = req.body.data.email;
    const name = req.body.data.name;
    const message = req.body.data.message;

    //config the email message
    const mailOptions = {
      from: "BAS Webapp",
      to: process.env.EMAIL_RECIPIENT,
      subject: `New message from ${name}`,
      html: `<h1>New message from Bandera Auto Solutions Website</h1>
             <h2>Name: ${name}</h2>
             <h2>Email: ${email}</h2>
             <h3>${message}</h3>`
    };

    //call the built in sendMail function from nodemailer and return different responses upon success and failure
    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send({
          data: {
            status: 500,
            message: error.toString(),
          },
        });
      }

      return res.status(200).send({
        data: {
          status: 200,
          message: 'sent',
        },
      });
    });
  });
});