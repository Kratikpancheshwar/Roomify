# Roomify - Use Case Diagram

## System Overview
Roomify is a video meeting and collaboration platform that enables users to create, join, and manage virtual meetings with real-time communication features.

## Actors

### Primary Actors
- **Guest User** - Unregistered users who can view the homepage and access public features
- **Registered User** - Authenticated users who can create and join meetings
- **Meeting Admin** - User who creates a meeting and has administrative privileges
- **Meeting Participant** - User who joins an existing meeting

### Secondary Actors
- **Email System** - External system for sending OTP verification emails
- **Agora RTC Service** - Third-party video/audio streaming service
- **Database System** - MongoDB for data persistence

## Use Cases

### Authentication & User Management
1. **Register Account**
   - Actor: Guest User
   - Description: User creates a new account with email verification
   - Includes: Send OTP, Verify OTP
   - Preconditions: User provides valid email, name, and password
   - Postconditions: User account is created and user is redirected to login

2. **Login to System**
   - Actor: Guest User
   - Description: User authenticates using email and password
   - Preconditions: User has a registered account
   - Postconditions: User is authenticated and redirected to meeting page

3. **Logout from System**
   - Actor: Registered User
   - Description: User signs out and clears session data
   - Postconditions: User session is terminated

4. **Send OTP**
   - Actor: Email System
   - Description: System generates and sends OTP to user's email
   - Triggered by: Register Account use case

5. **Verify OTP**
   - Actor: Guest User
   - Description: User enters OTP received via email to verify account
   - Preconditions: OTP has been sent to user's email
   - Postconditions: User account is verified

### Meeting Management
6. **Create New Meeting**
   - Actor: Registered User → Meeting Admin
   - Description: User creates a new meeting room with unique link
   - Preconditions: User is authenticated
   - Postconditions: Meeting room is created, admin receives meeting link and token
   - Extensions: Generate Agora Token

7. **Join Meeting**
   - Actor: Registered User → Meeting Participant
   - Description: User joins an existing meeting using meeting link
   - Preconditions: User is authenticated, meeting link is valid
   - Postconditions: User is added to meeting participants list
   - Extensions: Fetch Meeting Details

8. **Fetch Meeting Details**
   - Actor: System
   - Description: Retrieve meeting information including participants and admin
   - Triggered by: Join Meeting, Live Video Session

9. **Generate Agora Token**
   - Actor: Agora RTC Service
   - Description: System generates token for video/audio streaming
   - Triggered by: Create New Meeting

### Live Video Communication
10. **Start Live Video Session**
    - Actor: Meeting Participant
    - Description: User initiates video/audio streaming in meeting
    - Preconditions: User has joined a meeting
    - Includes: Manage Audio/Video Controls
    - Postconditions: User's video/audio stream is available to other participants

11. **Manage Audio/Video Controls**
    - Actor: Meeting Participant
    - Description: User controls microphone and camera on/off
    - Preconditions: User is in live video session
    - Extensions: Toggle Microphone, Toggle Camera

12. **Toggle Microphone**
    - Actor: Meeting Participant
    - Description: User mutes/unmutes their microphone
    - Postconditions: Audio state is updated for all participants

13. **Toggle Camera**
    - Actor: Meeting Participant
    - Description: User turns camera on/off
    - Postconditions: Video state is updated for all participants

14. **View Remote Participants**
    - Actor: Meeting Participant
    - Description: User views video streams of other meeting participants
    - Preconditions: Other users are in the meeting with cameras on

15. **Copy Meeting Link**
    - Actor: Meeting Participant
    - Description: User copies meeting link to share with others
    - Postconditions: Meeting link is copied to clipboard

16. **Leave Meeting**
    - Actor: Meeting Participant
    - Description: User exits the meeting and stops all streams
    - Postconditions: User is removed from meeting, streams are stopped

### Real-time Chat
17. **Send Chat Message**
    - Actor: Meeting Participant
    - Description: User sends text message to all meeting participants
    - Preconditions: User is in a meeting
    - Uses: WebSocket Connection
    - Postconditions: Message is stored and broadcast to all participants

18. **Receive Chat Messages**
    - Actor: Meeting Participant
    - Description: User receives real-time chat messages from other participants
    - Uses: WebSocket Connection
    - Postconditions: Messages are displayed in chat interface

19. **Fetch Chat History**
    - Actor: Meeting Participant
    - Description: System retrieves previous chat messages when user joins
    - Triggered by: Join Meeting
    - Postconditions: Chat history is displayed to user

### System Features
20. **Browse Homepage**
    - Actor: Guest User, Registered User
    - Description: User views application features, pricing, and information
    - Postconditions: User can navigate to authentication or meeting pages

21. **View Pricing Plans**
    - Actor: Guest User, Registered User
    - Description: User views different subscription plans and features
    - Postconditions: User can choose to register or upgrade account

22. **Handle Errors**
    - Actor: System
    - Description: System displays appropriate error messages for various failures
    - Triggered by: Any failed operation
    - Extensions: Connection errors, Authentication failures, Meeting not found

## Use Case Relationships

### Extends Relationships
- Handle Errors extends all use cases (error handling)
- Generate Agora Token extends Create New Meeting
- Fetch Meeting Details extends Join Meeting
- Toggle Microphone extends Manage Audio/Video Controls
- Toggle Camera extends Manage Audio/Video Controls

### Includes Relationships
- Register Account includes Send OTP and Verify OTP
- Start Live Video Session includes Manage Audio/Video Controls
- Send Chat Message includes WebSocket Connection
- Receive Chat Messages includes WebSocket Connection

### Inheritance Relationships
- Meeting Admin inherits from Registered User
- Meeting Participant inherits from Registered User

## System Boundaries
The system includes:
- Web application frontend (React)
- Backend API server (Node.js/Express)
- Real-time communication (Socket.io)
- Database operations (MongoDB)

External systems:
- Agora RTC Service for video/audio streaming
- Email service for OTP delivery
- Client browsers for user interface

## Quality Attributes
- **Performance**: Real-time video/audio streaming with minimal latency
- **Scalability**: Support for multiple concurrent meetings and participants
- **Security**: JWT-based authentication and secure meeting links
- **Usability**: Responsive design for desktop and mobile devices
- **Reliability**: Error handling and connection management

---

This use case diagram represents the complete functionality of the Roomify video meeting platform, covering user authentication, meeting management, live video communication, and real-time chat features.
