const express = require('express' );
const bodyParser = require('body-parser');
const sendgird = require('@sendgrid/mail');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = 3000 || process.env.PORT;

app.use(cors());

app.use(bodyParser.urlemcoded({ extended: false}));
app.use(bodyParser.json())

app.post('/sendmail', async (req: any, res: any) => {
    sendgird.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: req.body.email,
        from: "eventallyin@gmail.com",
        subject: req.body.subject,
        text: req.body.message,
        html: req.body.message
    };
})

app.listen(port, () => {
    console.log(`server running on ${port}`)
})
