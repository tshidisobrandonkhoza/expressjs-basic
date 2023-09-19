const express = require('express');
const app = express();
const port = 2000;

//using middleware

//basic routing
app.get('/', (req, res) => {
    res.send('We have seen the GET');
});

app.put('/', (req, res) => {
    res.send('We have seen the PUT');
});

app.post('/', (req, res) => {
    res.send('We have seen the POST');
})

app.delete('/', (req, res) => {
    res.send('We have seen the delete');
})
app.listen(port);

