const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join('build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Server listening on port ${port}`));


