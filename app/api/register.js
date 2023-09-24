// pages/api/register.js
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

// In-memory database (replace with a real database).
const users = [];

export default async function handler(req, res) {
  const { email, password } = req.body;

  // Check if the user already exists.
  const userExists = users.some((user) => user.email === email);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists.' });
  }

  // Generate a verification token.
  const token = jwt.sign({ email }, 'your-secret-key', { expiresIn: '1h' });

  // Save the user and token (in-memory, replace with a database).
  users.push({ email, password, token, verified: false });

  // Send a verification email.
  const transporter = nodemailer.createTransport({
    service: 'your-email-service',
    auth: {
      user: 'your-email-username',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: 'your-email-username',
    to: email,
    subject: 'Email Verification',
    text: `Click the following link to verify your email: http://localhost:3000/verify/${token}`,
  };

  await transporter.sendMail(mailOptions);

  res.status(200).json({ message: 'Registration successful.' });
}
