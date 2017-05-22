import * as express from 'express';
import database from '../db';
import * as mongodb from 'mongodb'

let router = express.Router();

router.post('/', (req, res) => {
    let photo = req.body;
    photo._id = new mongodb.ObjectID(req.body.id);
    database.db.collection('photos').save(photo).then((newPhoto) => {
        res.end();
    });
});

router.get('/', (req, res) => {
    database.db.collection('photos').find().toArray().then((photos) => {
        res.json(photos);
    });
});

router.get('/:id', (req, res) => {
    let photoId = new mongodb.ObjectID(req.params['id']);
    database.db.collection('photos').findOne({_id: photoId}).then((photo) => {
        res.json(photo);
    });
});

router.delete('/:id', (req, res) => {
    let photoId = new mongodb.ObjectID(req.params['id']);
    database.db.collection('photos').remove({_id: photoId}).then(() => {
        res.end();
    });
})

export default router;
