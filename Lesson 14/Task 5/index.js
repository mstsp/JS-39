/**4. По этой ссылке находятся валюты Приват Банка в виде json. Задание: попробовать с помощью Node, 
отобразить эти данные у себя в консоли или же вывести в ответ на запрос сервера. Подсказка: 
нужно посмотреть сторонние модули.
https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3

Как отобразить эти данные используя только обычный html и javascript, без сервера?*/

var requestURL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var resArray = request.response;
  
  console.log(resArray);
  console.log(`USD buy: ${resArray[0].buy}
 USD sale: ${resArray[0].sale} `)
  
 };

 // https://jsbin.com/cudaqubiwu/edit?js,console   В js.bin работает.