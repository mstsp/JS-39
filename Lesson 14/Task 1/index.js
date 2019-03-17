 /*1. Написать сервер, 
 чтоб по запросу localhost:3000 сервер выдавал нам в response Hello World, 
 чтоб по запросу localhost:3000/about сервер выдавал нам данные о запросе в консоль, 
 а по запросу localhost:3000/contact сервер возвращал страницу index.html.*/

var http = require('http');
var fs = require('fs');
var port = 3000;

http.createServer(function(req, res) {
    switch (req.url) {
        case '/':
            res.write('Hello World!');
            res.end();
            break;

        case '/about':
            console.log(req.method);
            console.log(req.headers);
            console.log(req.url);
            res.write('Page about');
            res.end();
            break;

        case '/contact':
            var data = fs.readFileSync('contact.html');
            res.write(data);
            res.end();
            break;

        default:
            res.write('Sorry this page is not exist');
            res.end();
            break;
    }
}).listen(port, function() {
    console.log('Server at http://localhost:3000');
});