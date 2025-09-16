const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendBirthdayEmail = (user) => {
    const mailOptions = {
        from: `"[The Originals]" <${process.env.EMAIL_USER}>`,
        to: user.email,
        subject: 'Happy Birthday! 🎉',
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>Happy Birthday, ${user.username}!</h2>
                <p>We are sending you the warmest wishes on your special day.</p>
                <p>May your day be filled with joy and laughter. Have a fantastic celebration!</p>
                <p>Best wishes,<br>The Team at [The Originals]</p>
                
            </div>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error(`Failed to send email to ${user.email}:`, error);
        }
        console.log(`Birthday email sent successfully to ${user.email}: ${info.response}`);
    });
};

module.exports = { sendBirthdayEmail };