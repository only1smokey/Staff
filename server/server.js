const express = require('express');
const cors = require('cors');

const session = require('express-session');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request body

// Example route
app.get('/', (req, res) => {
    res.send('Hello, SMP staff!');
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_11540644_1', 'db_11540644_1', '9rYbUf90', {
  host: '176.57.191.232',
  port: 3306,
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection to MySQL has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the MySQL database:', err);
  });

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));
  
  // Now, after a user logs in, you can save user data in req.session
  // For instance, after successful login:
  // req.session.userId = user.id;
