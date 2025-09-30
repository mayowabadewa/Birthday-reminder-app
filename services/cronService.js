const cron = require('node-cron');
const User = require('../models/user');
const { sendBirthdayEmail } = require('./emailService');

const checkBirthdays = async () => {
    console.log('Cron Job: Checking for birthdays...');
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // getMonth() is 0-indexed
    const currentDay = today.getDate();

    try {
        const users = await User.find({});
        const birthdayCelebrants = users.filter(user => {
            const userBirthMonth = user.dateOfBirth.getMonth() + 1;
            const userBirthDay = user.dateOfBirth.getDate();
            return userBirthMonth === currentMonth && userBirthDay === currentDay;
        });

        if (birthdayCelebrants.length > 0) {
            console.log(`Found ${birthdayCelebrants.length} birthday(s) today.`);
            birthdayCelebrants.forEach(user => sendBirthdayEmail(user));
        } else {
            console.log('No birthdays today.');
        }
    } catch (error) {
        console.error('Error during birthday check:', error);
    }
};

// Function to start the scheduled job
const startBirthdayCheck = () => {
    // Schedule to run at 7:00 AM every day, in the Africa/Lagos timezone
    cron.schedule('40 08 * * *', checkBirthdays, {
        scheduled: true,
        timezone: "Africa/Lagos",
    });
    console.log('Birthday check cron job scheduled for 7:00 AM WAT. 🎉');
};

module.exports = { startBirthdayCheck };