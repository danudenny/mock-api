const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/mock-api/user-branch', async (req, res) => {
    try {
        res.json({
            'status': 'success',
            'data': {
                'firstName': 'Internal',
                'lastName': 'Internal',
                'branchIds': [
                    'a3ba1451-8eb0-4740-9e12-43debdc48726',
                    '9f3fbbbb-efc9-4c2c-b624-595569af284b'
                ],
            }
        })
    } catch (error) {
        return res.status(500).send("Server Error")
    }
})

app.listen(9000, () => {
    console.log('App listen in 9000');
})