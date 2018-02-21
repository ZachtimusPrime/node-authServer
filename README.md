# Simple Node Auth Server #
Simple oauth2.0 server written in node using passport.js to authenticate with Google.

## What You'll Need to Setup ##
**Google:**<br>
You'll need to create a new Google API credential at https://console.developers.google.com and enable it for use with the Google+ API. Once you have enabled the Google+ access, set the access restrictions as shown.
<p><kbd><img src="/images/googleSetup.jpg" /></kbd></p>

**Auth Server:**<br>
The server looks for your Google API credential client ID and secret in **/config/keys.js**, which should never be version controlled. You will need to create the file after cloning the project. The *.gitignore* file will prevent it from being uploaded. The **/config/keys.js** file should be populated as follows: 

```js
module.exports = {
    googleClientID: "your-id-here",
    googleClientSecret: "your-secret-here"
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
