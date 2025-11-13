# DAY 24 EXPRESS & REST API

###  Topics

1. REST API
2. HTTP METHODS
3. HTTP Response Types
4. HTTP STATUS Codes
5. Postman usages

#### WHY REST API
    Representationl state transfer.
    Decouple the data form the html.

#### Express
    Routes
    1. create router by using express.Router.
    2. add handlers for the routes and methods.
    3. mount that router on main/app.
    on specific router, the index always start at /.
    when the exported router is mounted on the app/main, the index point is defined there.

# EXPRESS GUIDE => ROUTING
    1. all to handle all the methods can be use as wildcard?
    2. end() to describe the end of sending data as response.
    3. string patterns and regex patterns
    4. Usage of route parameters.
    5. handler chaining. the important part is not to send response and calling the next.
    6. short way of defining handlers for different http method on same routes.

# DAY 25

## Middlewares

Middlewares can
1. read the request.
2. can modify the request which effect for next handlers
3. Can change the control flow like authentication or redirects.


### Different levels of middlewares. 

All have the same principles.
Those are functions which accept req, res, and next.
read the request. 
act accordingly.
either return directly or call next() to pass to next handlers.

