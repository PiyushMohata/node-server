const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.send('Go to /health');
});

app.get('/health', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running');
});
