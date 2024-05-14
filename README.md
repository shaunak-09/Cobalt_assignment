# Google and Slack API Integration

Clone the repository:
   ```bash
   git clone https://github.com/shaunak-09/Cobalt_assignment.git
   ```

## BACKEND

This is the backend directory for the project.

### Setup Instructions

1. Navigate to the backend directory:
   ```bash
   cd Cobalt_assignment/server
   ```
2. Install dependencies:
   ```bash
   npm i
   ```
3. Set up environment variables

   1. Create a `.env` file in the root of the backend directory.
   2. Add you MongoDB uri in MONGO_URI
   3. Create a OAUTH2 Client ID in google console and add the CLIENT_ID and CLIENT_SECRET
   4. Create a Slack app at <https://api.slack.com/apps> and add SLACK_CLIENT_ID and the SLACK_CLIENT_SECRET and the Bot User OAuth Token in SLACK_TOKEN  
   5. Add the following environment variables to the `.env` file:

   ```makefile
   MONGO_URI=
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   PORT=8000
   SLACK_TOKEN=
   SLACK_CLIENT_ID=
   SLACK_CLIENT_SECRET=
   ```

   
4. Start the development server:
    ```bash
    npm run server
    ```

### Usage Guidelines
1. The backend server will run on port 8000 by default. You can change the port in the .env file if needed.
2. Ensure that the frontend application is configured to send requests to the correct backend URL.


## FRONTEND
  This is the frontend directory of the Project

  ### Setup Instructions

1. Navigate to the frontend directory:
   ```bash
   cd Cobalt_assignment/client
   ```
2. Install dependencies:
   ```bash
   npm i
   ```
3. Start the development client:
    ```bash
    npm start
    ```

### Usage Guidelines
1. The frontend client will run on port 3000 by default.



    
