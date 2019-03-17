/**4. По этой ссылке находятся валюты Приват Банка в виде json. Задание: попробовать с помощью Node, 
отобразить эти данные у себя в консоли или же вывести в ответ на запрос сервера. Подсказка: 
нужно посмотреть сторонние модули.
https://api.privatbank.ua/p24api/pubinfo…*/

var request = require('request');

request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
    var data = JSON.parse(body);
    console.log(data);
  } else {
    console.warn(error);
  }
});
