const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const axios = require('axios');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  credentials: true,
  origin: true,
}));

app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
