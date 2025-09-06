const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

// Serve html css js files
app.use(express.static(path.join(__dirname, 'public')));

// API save data to a file
app.post('/save', (req, res) => {
    const data = req.body;

    if (!data) {
        return res.send('No data received!');
    }

    const newData = JSON.stringify(data,null,5);
    fs.appendFile('formData.txt', newData, (err) => {
        if (err) {
            console.error('Error saving data:', err);
            return res.send('Error saving data!');
        }
        res.send('Data saved successfully!');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
