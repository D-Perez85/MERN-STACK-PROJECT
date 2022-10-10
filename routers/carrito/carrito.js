const {Router} = require('express'); 
const router = Router(); 

/** Rutas iniciales */

router.get('/', (req, res)=>{
    res.status(200).json(`GET ALL Success`); 
})
router.get('/:id', (req, res)=>{
    res.status(200).json(`GET BY ID Success`); 
})
router.post('/', (req, res)=>{
    res.status(201).json(`POST Success`); 
})
router.put('/:id', (req, res)=>{
    res.status(200).json(`PUT Success`); 
})
router.delete('/:id', (req, res)=>{
    res.status(200).json(`DELETE Success`); 
})

module.exports = router;