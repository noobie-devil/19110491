const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set("view engine", "ejs");

app.use(bodyParser.json())

const PORT = process.env.PORT || 5000

app.use('/message', require('./routes/messages'));
app.use('/', require('./routes/students'));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));