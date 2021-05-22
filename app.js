const express = require ('express');
const app = express();
// import mongoose
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
dotenv.config()

//db connection
mongoose.connect(
  process.env.DATABASE,{
  useNewUrlParser: true,
  useCreateIndex: true,
   useUnifiedTopology: true
  }
)
.then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

app.get('/', (req, res) => {
    res.send('HYaao');
});


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});


