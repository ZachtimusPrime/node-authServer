# Simple Node Auth Server #
Simple oauth2.0 server written in node using passport.js to authenticate with Google.

## What You'll Need to Add ##
The server looks for your Google+ API client ID and secret in **/config/keys.js**, which should never be version controlled. You will need to create the file after cloning the project. The *.gitignore* file will prevent it from being uploaded. The **/config/keys.js** file should be populated as follows: 

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
