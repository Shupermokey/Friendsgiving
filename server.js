import express from 'express';
import { createTransport } from 'nodemailer';
import pkg from 'body-parser';
const { json } = pkg;

const app = express();

app.use(json());

app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  // Set up nodemailer transporter
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: 'teemsnipers@gmail.com',
      pass: '',
    },
  });

  // Define email options
  const mailOptions = {
    from: 'teemsnipers@gmail.com',
    to: 'teemsnipers@gmail.com',
    subject:"Test",
    text: "Hello",
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
