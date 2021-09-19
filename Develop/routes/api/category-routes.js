const router = require('express').Router();
const { Category} = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll()
  .then(dbCategoryData=>res.json(dbCategoryData))
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  })
});
//-----------------GET CATEGORY BY id------------------------------
router.get('/:id', (req, res) => {
  Category.findOne({
    where:{
      id:req.params.id
    }
  })
  .then(dbCategoryData =>res.json(dbCategoryData))
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  })
});

//------------------create a new category---------------------------
router.post('/', (req, res) => {
  //expects category name only for now 
  Category.create({
    category_name: req.body.category_name
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

//-----------update a category by its `id` value----------------------
router.put('/:id', (req, res) => {
  Category.update(req.body,{
    where:{
      id:req.params.id
    }
  })
  .then(dbCategoryData=>{
    if(!dbCategoryData[0]){
      res.status(404).json({message:'Not user found with this id'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json(err)
  })
});


//-----------Delete Category----------------------------------------------
router.delete('/:id', (req, res) => {
  Category.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(dbCategoryData=>{
    if(!dbCategoryData){
      res.status(404).json({message:'No user found with this id'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
