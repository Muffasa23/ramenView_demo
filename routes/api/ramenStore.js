const express = require('express');
const router = express.Router();

//Blog Model
const RamenModel = require('../../models/ramenInfo');

/* 
@route GET api/blogPost
@desc  Get all posts
@access Public
*/

router.get('/', (req, res) => {
  RamenModel.find()
    .then( items => res.json(items) );
});

/* 
@route POST api/blogPost
@desc  create a post
@access Public
*/
router.post('/', (req, res) => {
  const newStore = new RamenModel({
    name: req.body.name,
    address: req.body.address,
    mrt: req.body.mrt,
    tag: req.body.tag,
    website: req.body.website,
    soupRating: req.body.soupRating,
    noodleRating: req.body.noodleRating,
    meatRating: req.body.meatRating,
    imageURL: req.body.imageURL
    //opening_hours: req.body.opening_hours
  });

  newStore.save().then(item => res.json(item));
});

/* 
@route Delete api/blogPost/:id
@desc  delete a post
@access Public
*/

router.delete('/:id', (req, res) => {
  RamenModel.findById(req.params.id)
    .then(item => item.remove().then( () => res.json({ success: true }) ) )
    .catch(err => res.status(404).json({ success: false }) );
});

module.exports = router;