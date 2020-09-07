import * as functions from 'firebase-functions';
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


app.get('/events', auth, events.getAllEvents)
app.get('/event/:eventId', auth, events.getEvent)
app.post('/event', auth, events.createEvent)
app.put('/events/:eventId', auth, events.editEvent)
app.delete('/events/:eventId', auth, events.deleteEvent)
export const api = functions.https.onRequest(app)
