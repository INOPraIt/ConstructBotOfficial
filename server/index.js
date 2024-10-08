require('dotenv').config()
const express = require('express');
const cors =  require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');
const errorMiddleware = require('./middelware/error-middleware');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: true, credentials: true}));
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/newAppNewIndex', { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });

    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();
