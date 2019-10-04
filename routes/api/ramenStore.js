const express = require('express');
const router = express.Router();

//Blog Model
const RamenModel = require('../../models/ramenInfo');

/* 
@route GET api/ramenStore
@desc  Get all stores by filter
@access Public
*/

router.get('/', (req, res) => {
  console.log('2');
  searchCondition = {};  
  const keyword = req.query.keyword;
  const mrtFilter = req.query.mrtFilter;
  const tagFilter = req.query.tagFilter;

  if(keyword) searchCondition.name={ $regex: new RegExp(".*"+keyword+".*", "g") };
  else searchCondition.name={ $regex: /.*/ };

  if(mrtFilter === undefined || mrtFilter.length === 0) searchCondition.mrt={ $nin: mrtFilter };
  else searchCondition.mrt={ $in: mrtFilter };

  if(tagFilter === undefined || tagFilter.length === 0) searchCondition.tag, { $nin: tagFilter };
  else searchCondition.tag={ $in: tagFilter };

  RamenModel.find(searchCondition)
    .then( items => res.json(items) );
});

/* 
@route GET api/ramenStore/:id
@desc  Get certain store info
@access Public
*/

router.get('/:id', (req, res) => {
  console.log('1');

  RamenModel.findById(req.params.id)
    .then( items => res.json(items) );
})


/* 
@route POST api/ramenStore
@desc  create a store
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