const express = require('express')
const app = express()
const msisdn = require('express-msisdn');

// add msisdn middleware
app.use(msisdn(['OPERATOR_CUSTOM_HEADER_1','OPERATOR_CUSTOM_HEADER_2']));
// app.use(msisdn(['OPERATOR_CUSTOM_HEADER_1','OPERATOR_CUSTOM_HEADER_2']));
const port = process.env.PORT || 3000;

app.get('/', (req, res) =>{ 
    // console.log(req);
    res.json(req._parsedUrl);
})

app.listen(port, () => console.log(`Msisdn example app listening on port ${port}!`));