const express = require('express')
const path = require('path')
const { google } = require('googleapis')
const nodemailer = require('nodemailer')
const cors = require('cors')
const port = process.env.PORT || 3000
const app = express()
const OAuth2 = google.auth.OAuth2;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.use(cors())
app.use(express.json())
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, '/client/build')))

const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'https://developers.google.com/oauthplayground' // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
})

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    }
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.post('/confirmation', (req, res, next) => {
    console.log(req)
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message

    const accessToken = oauth2Client.getAccessToken()

    const mail = {
        from: email,
        to: 'Nastashab.management@gmail.com',
        subject: `${subject}`,
        text: `${message}\n\nName: ${name}\nEmail: ${email}`,
        auth: {
            user: 'antrez.nodemailer@gmail.com',
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken
        }
    }
  
    transporter.sendMail(mail, (err, data) => {
        err ? res.json({status: 'fail'}) : res.json({status: 'success'})
    })
})

app.listen(port, () => console.log(`server running on port ${port}`))