const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors({
//     'allowedHeaders': ['Content-Type'], // headers that React is sending to the API
//     'exposedHeaders': ['Content-Type'], // headers that you are sending back to React
//     'origin': '*',
//     'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     'preflightContinue': false
// }));
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    return res.status(200).json({
        data: [{
            id: 1,
            name: 'Post1'
        },{
            id: 2,
            name: 'Post2'
        }]
    });
})

app.post('/', (req, res) =>{
    return res.status(200).json({
        data: req.body
    })
});

app.listen(9000, () => console.log('Started'));