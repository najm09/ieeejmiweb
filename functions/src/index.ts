import * as functions from 'firebase-functions';
<<<<<<< Updated upstream

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
=======
import * as express from 'express'
import auth from '../Util/auth'
import * as userAuth from '../API/user'
import * as events from '../API/events'


const app = express()

app.post('/login', userAuth.loginUser)
app.post('/signUp', userAuth.signUpUser)
app.post('/updateProfile', auth, userAuth.updateUserDetails)
app.post('/makeAdmin', auth, userAuth.makeAdmin)
app.get('/user', auth, userAuth.getUserDetails)

export const api = functions.https.onRequest(app)
>>>>>>> Stashed changes
