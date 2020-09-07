import {db} from '../Util/admin'
import {Event} from '../index.d'

export const getAllEvents = (request : any, response : any) => {
    db
        .collection('events')
        .where('username', '==', request.user.username)
        .orderBy('createdAt', 'desc')
        .get()
        .then(data => {
            return response.json({data})
        })
        .catch(err => {
            console.error(err)
            return response.status(500).json({error : err.code})
        })

}

export const getEvent = (request : any, response : any) => {
    db
        .doc(`/events/${request.params.eventId}`)
        .get()
        .then(doc => {
            if(!doc.exists){
                return response.status(404).json({
                    error: 'Events id does\'nt exist'
                })
            }
            if(doc.data()?.username !== request.user.username){
                return response.status(403).json("UnAutharized")
            }
            return response.json(doc)
        })
        .catch(err => {
            console.error(err)
            return response.status(500).json({error : err.code})
        })
}

export const createEvent = (request : any, response : any) => {
    const newEvent : Event = {
        title: request.body.title,
        username: request.body.username,
        body: request.body.body,
        invitations: request.body.list,
        time : request.body.time,
        createdAt: new Date()
    }

    db
        .collection('events')
        .add(newEvent)
        .then(doc => {
            return response.json(doc)
        })
        .catch(err => {
            console.error(err)
            response.status(500).json({error : 'Something went wrong'})
        })
}

export const editEvent = (request : any, response : any) => {
    if(request.body.eventId || request.body.createdAt){
        response.status(403).json({message: 'Not allowed to edit'})
    }
    const document = db.collection('events').doc(`${request.params.eventId}`)
    document.update(request.body)
    .then((doc) => {
        response.json({message : "Updated Succesfully", doc})
    })
    .catch(err => {
        if(err.code === 5){
            response.status(500).json({
                message: "Not Found"
            })
        }
        console.error(err)
        response.status(500).json({
            error: err.code
        })
    })
}

export const deleteEvent = async (request : any, response : any) => {
    const document = db.doc(`/event/${request.params.eventId}`);
    document
    .get()
    .then((doc) => {
        if (!doc.exists) {
            return response.status(404).json({
                error: 'Event not found'
            })}
            if(doc?.data()?.username !== request.user.username){
                return response.status(403).json({error:"UnAuthorized"})
            }
            return document.delete();
    })
    .then(() => {
        response.json({ message: 'Delete successfull' });
    })
    .catch((err) => {
        console.error(err);
        return response.status(500).json({
            error: err.code
        });
    });
}
