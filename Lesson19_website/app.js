var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const nodemailer = require('nodemailer');

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.get('/', function(req, res) {
    res.render('index', {title: 'API'});
});

app.get('/about', function(req, res) {
    res.render('about', {title: 'API'});
});

app.get('/portfolio', function(req, res) {
    res.render('portfolio', {title: 'API'});
});

app.get('/contact', function(req, res) {
    res.render('contact', {title: 'API'});
});

app.post('/contact', function(req, res) {
	var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
                user: 'companyEmail@gmail.com',
                pass: 'companyEmailPassword'
        }
    });
    
    var mailOptions = {
        from: 'companyEmail@gmail.com',
        to: req.body.email,
        subject: 'Message from companyName',
        text: 'Thank you very much for your message! We will reply within 24 hours.'
    }
    
    transporter.sendMail(mailOptions, function(error, info) {
        if(error){
            console.log(error);
            res.render('contact', {
                status: 'error'
            });
        } else {
            console.log('Email Sent' + info.response);
            res.render('contact', {
                status: 'ok'
            });
        }
    });
       
});

app.listen(3000, function() {
    console.log('Server started at http://localhost:3000');
})