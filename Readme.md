# Deepfake Detection Project Backend

This repository contains the backend services for the Deepfake Detection project. The backend handles user authentication, media analysis requests, and communication with the detection model. It serves as the core processing unit of the system.

## Features
- **User Authentication**: Secure signup and signin functionality using hashed passwords and JWT tokens.
- **Media Analysis API**: Accepts media files and sends them for analysis to determine authenticity.
- **Rate Limiting**: Tracks API hit counts per user.
- **Validation**: Input validation using Zod for robust and error-free API interactions.

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose for object modeling)
- **Authentication**: JWT for secure token-based authentication
- **Validation**: Zod for schema validation
- **Security**: bcrypt for password hashing

## Prerequisites
Ensure you have the following installed:
- Node.js (v14 or above)
- npm or yarn package manager
- MongoDB database (local or cloud-based)

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/himu23369/Deepfake-Backend.git
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   JWT_SECRET=your_jwt_secret
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Run the application**:
   ```bash
   npm run dev
   ```
   The server will start running on the specified port (default: 3000).

## Contributions
We welcome contributions from the community to enhance the backend functionality. Here are ways you can contribute:

1. **Report Issues**: Identify and report bugs or suggest new features by creating issues in the repository.
2. **Submit Pull Requests**: Implement fixes or new features and submit them as pull requests.
3. **Improve Documentation**: Help us improve the clarity and completeness of the documentation.
4. **Optimize Code**: Refactor code for better performance or scalability.

For contributions or inquiries, feel free to contact at [himu90505@gmail.com](mailto:himu90505@gmail.com).

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions or feedback, please contact at [himu90505@gmail.com](mailto:himu90505@gmail.com).

