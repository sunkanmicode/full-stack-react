const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors())

//routes
app.use('/auth', require('./routes/jwtAuth'));

app.listen(PORT,  ()=>{
    console.log(`serving is running on port ${4000}`);
});