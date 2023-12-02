import express from 'express';
import { createTransport } from 'nodemailer';
import pkg from 'body-parser';
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

const { json } = pkg;

const app = express();

app.use(cors())
app.use(json());



app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  // Set up nodemailer transporter
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: 'teemsnipers@gmail.com',
      pass: process.env.EXPRESS_PASS;
    },
  });

  // Define email options
  const mailOptions = {
    from: 'teemsnipers@gmail.com',
    to: to,
    subject:subject,
    text: text,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
