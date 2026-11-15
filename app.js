
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// Home endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to My DevOps Project!'
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'Server is running successfully'
    });
});

// Project information endpoint
app.get('/api/info', (req, res) => {
    res.json({
        project: 'DevOps Project',
        technology: 'Node.js and Express',
        purpose: 'Demonstration of a DevOps CI/CD pipeline'
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
