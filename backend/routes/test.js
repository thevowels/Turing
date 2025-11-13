var express = require('express');
var router = express.Router();


router.all('/', function(req, res, next) {
    console.log('handling all request types like a middleware');
    // calling next here is important as if we don't call it the handling would end here.
    // and one more thing is that if we do res.send or res.json to send back the data,
    // there would be problem like you already sent a data.
    req
    next();
});

router.get('/', function(req, res, next) {
    res.status(200)
        .send(req.time)
        .end();
    // sendStatus http status
    // send json ... send dat.
    // end signaling that we've done all the response.

    // initially, I was using  sendStatus but that caused error as I'm not just
    // sending the status code but also send the content of status code as res body.
})


// string patterns, similar to regex
router.get('/ab?cd', (req, res) => {
    res.send('ab?cd');
})

// route parameters to capture the values with res.params.
router.get('/abc/:userId/:contentId/:commentId', function(req,res){
    res.send(req.params);
})



router.get('/xyz', function(req,res, next){
    console.log('callback 1');
    next();
},(req,res, next)=>{
    console.log('callback 2');
    next();
}, (req,res,next)=>{
    console.log('callback 3');
    next();
});

router.get('/xyz', function(req,res){
    console.log('callback 4. Final one');
    res.send('xyz').end();
})
// just like chaining the function calls,
// one mandatory part is to use the next in callback.

router.route('/ttt')
    .get((req,res)=>{
        console.log('get request');
        res.send('get');
    })
    .put((req,res)=>{
        console.log(req.body);
        console.log('put request');
        res.send(req.body);
    })
    .post((req,res)=>{
        console.log(req.body);
        console.log('post request');
        res.send(req.body);
    })
    .all((req,res)=>{
        console.log('all request');
        res.send('no handler for that method');
    })
// chaining the handlers for different methods on same routes.


module.exports = router;