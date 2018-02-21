# Simple Node Auth Server #
Simple oauth2.0 server written in node using passport.js to authenticate with Google.

## What You'll Need to Setup ##

**Google:**<br>
You'll need to create a new Google API credential at https://console.developers.google.com and enable it for use with the Google+ API. Once you have enabled the Google+ access, set the access restrictions as shown.
<p><kbd><img src="/images/googleSetup.jpg" /></kbd></p>

**MongoDB:**<br>
You'll need an instance of MongoDB. The easiest way to accomplish this is through the free tier for either https://mlab.com or the new  https://www.mongodb.com/cloud/atlas. After creating a mongo database, create a user for the database. Make note of the username and password that you assign the user, and embed them as neccessary into the URI to connect to the database. This customized URI is needed for the auth server configuration below.

**Auth Server:**<br>
The server looks for your Google API credential client ID and secret, as well as the URI to connect to your mongoDB, in **/config/keys.js**, which should never be version controlled. You will need to create the file after cloning the project. The *.gitignore* file will prevent it from being uploaded. The **/config/keys.js** file should be populated as follows: 

```js
module.exports = {
    googleClientID: "your-id-here",
    googleClientSecret: "your-secret-here"
    mongoURI: "your-mongo-uri-here"
};
```

## Usage ##
```bash
# starts the server
node index.js

# starts the server with nodemon
npm run dev
```
The server is hosted at http://localhost:5000 and auth happens on route http://localhost:5000/auth/google
