var express = require('express');
var router = express.Router();

var todos = require('../dummy/data');

router.get('/', function (req,res){
    res.json(todos);
})

router.post('/', function(req,res){
    const todo = req.body;
    console.log(req.body);

    // use custom status 201 as we've successfully created new record.
    res.status(201).json(todo);
})

router.put('/', function(req,res){
    const todo = req.body;
    console.log('updating todo', req.body);
    // may be we might do business logic hrere.
    res.status(200).json(todo);
    //I'm not sure whats the status code for successful put request.
})

router.delete('/:id', function (req,res){
    const id = req.params.id;
    console.log('deleting todo of id: ',id);
    res.status(200).json({
        id: id,
        message: 'Successfully deleted',
    });
})

module.exports = router;