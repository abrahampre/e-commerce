const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint


////---------find all tags---------------
router.get('/', (req, res) => {
  Tag.findAll()
  .then(dBTagData =>res.json(dBTagData))
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  })
});

////---------FIND TAG BY ID--------------
router.get('/:id', (req, res) => {
  Tag.findOne({
    where:{
      id:req.params.id
    }
  })
  .then(dBTagData=>res.json(dBTagData))
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  })
});
////---------CREATE A TAG---------------
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(dBTagData=>res.json(dBTagData))
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});
////---------UPDATE TAG---------------
router.put('/:id', (req, res) => {
  Tag.update(req.body,{
    where:{
      id:req.params.id
    }
  })
  .then(dBTagData=>{
    if(!dBTagData[0]){
      res.status(404).json({message:'Not TAG found with this id'});
      return;
    }
    res.json(dBTagData);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json(err)
  })
});

////---------DELETE TAG--------------
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(dBTagData=>{
    if(!dBTagData){
      res.status(404).json({message:'No TAG found with this id'});
      return;
    }
    res.json(dBTagData);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
