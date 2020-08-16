import * as functions from 'firebase-functions';
import * as express from 'express'
import auth from '../Util/auth'
import * as userAuth from '../API/user'
import * as events from '../API/events'


const app = express()

export const api = functions.https.onRequest(app)
