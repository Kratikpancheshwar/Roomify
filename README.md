# Roomify

## Live Preview: [Roomify - https://roomify-eight.vercel.app/](https://roomify-eight.vercel.app/)

## Overview

Roomify is a modern room management and collaboration platform that enables users to create, manage, and interact in virtual rooms. The platform provides real-time communication features and intuitive room management capabilities.

## Features

- **Room Management**: Create, join, and manage virtual rooms
- **Real-time Communication**: Live chat and interaction between room participants
- **User Authentication**: Secure JWT-based authentication system
- **Interactive UI**: Modern and responsive user interface
- **Real-time Updates**: WebSocket integration for live updates

## Tech Stack

### Frontend

- React
- Tailwind CSS
- WebSocket Client
- Agora RTC SDK

### Backend

- Node.js
- Express.js
- MongoDB
- Socket.io
- JWT Authentication

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Setup

1. Clone the repository:

```bash
git clone https://github.com/ShubhamBhowmik11/Chater
cd Chater
```

2. Install dependencies for both client and server:

```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Create a `.env` file in the server directory with the following variables:

```
PORT = 8000
DATABASE_URL = your_database_uri (MongoDB URI)
APP_ID = your_app_id (Agora App ID)
APP_CERTIFICATE = your_app_certificate (Agora App Certificate)
JWT_SECRET = your_jwt_secret (JWT Secret)
MAIL_HOST = your_mail_host (Mail Host)
MAIL_PASS = your_mail_password (Mail Password)
MAIL_USER = your_mail_id_@gmail.com (Mail User)
CLIENT_URL = your_client_url (Client URL)
```

4. Create a `.env` file in the client directory with the following variables:

```
VITE_APP_BASE_URL=your_base_url
VITE_APP_AGORA_APP_ID=your_app_id (Agora App ID)
VITE_APP_SOCKET_IO_URL=your_socket_io_url
```

5. Start the backend server:

```bash
cd server
npm run dev
```

6. Start the frontend client:

```bash
cd client
npm run dev
```

The application should now be running on `http://localhost:5173` with the backend server on `http://localhost:5000`.

## Usage

1. Register a new account or login with existing credentials
2. Create a new room or join an existing one
3. Interact with other users in real-time
4. Manage room settings and permissions
5. Enjoy seamless communication and collaboration

## Folder Structure

```
/roomify
├── client/          # Frontend React application
│   ├── public/      # Static files
│   ├── src/         # Source files
│   └── package.json # Frontend dependencies
├── server/          # Backend Node.js application
│   ├── config/      # Configuration files
│   ├── controllers/ # Request handlers
│   ├── models/      # Database models
│   ├── routes/      # API routes
│   └── package.json # Backend dependencies
├── .gitignore       # Git ignore file
└── README.md        # Project documentation
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Submit a Pull Request

## Contact

If you have any questions or suggestions, please feel free to reach out:

- GitHub Issues: [Create an issue](https://github.com/Kratikpancheshwar/Roomify)
- Email: kratikpancheshwar580@gmail.com
- LinkedIn: [Kratik Pancheshwar](https://www.linkedin.com/in/kratik-pancheshwar-814862280/)
