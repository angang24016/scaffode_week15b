const express = require('express')
const router = express.Router()

//GET About page
router.get('/',()=>{
    res.render('pages/contact', {title: 'contact page'})
})

module.express = router