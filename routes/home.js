const  express = require('express')
const router = express.Router()

/* Get home page, */
router.get('/',()=>{
    resizeBy.render('index',{title: 'Home page'})
})

module.exports = router