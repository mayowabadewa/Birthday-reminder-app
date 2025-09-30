# Birthday Reminder App

A Node.js application that automatically sends birthday email reminders to users on their special day.

## Features

- Add users with their name, email, and date of birth
- Automatic daily birthday checks at 7:00 AM WAT
- Sends personalized birthday emails via Gmail
- Input validation with Joi
- MongoDB database storage

## Prerequisites

- Node.js (v18 or higher)
- MongoDB database
- Gmail account for sending emails

## Installation

1. Clone the repository:
```bash
git clone https://github.com/mayowabadewa/Birthday-reminder-app.git
cd Birthday-reminder-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password
PORT=3000
```

## Usage

Start the development server:
```bash
npm run dev
```

Or run in production:
```bash
npm start
```

Visit `http://localhost:3000` to add users and their birthdays.

## How It Works

1. Users are added through a simple web form
2. A cron job runs daily at 7:00 AM (Africa/Lagos timezone)
3. The app checks for users with birthdays matching the current date
4. Birthday emails are automatically sent to matching users

## Tech Stack

- **Backend**: Express.js
- **Database**: MongoDB with Mongoose
- **View Engine**: EJS
- **Email**: Nodemailer
- **Scheduling**: node-cron
- **Validation**: Joi

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Author

Mayowa
