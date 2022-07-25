const express = require('express');
const app = express()
app.get('/api/main', function(request,response)
{
    response.send('<h1>Assignment 2</h1>');
    response.end()
})
app.listen(9090,function(){
    console.log('server is running');
})