const express = require('express');
const cors = require('cors');

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
