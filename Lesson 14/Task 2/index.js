/*2. На основе событий создать свой логер(logger). Который будет регистрировать пользователя 
со временем посещения и выводит эти данные в консоль. Также можно добавить информацию типа 
(такой то пользователь вошёл и вышел), набросать событий типа logIn, logout, someAction…. 
Код произвольный(абстрактный), главное использовать события класса EventEmitter.*/

var Event = require('events').EventEmitter;
var event = new Event();

var userId1 = {
    name: 'Rimus',
    lastName: 'Uncle',
    age: 59,
    country: 'USA'
};

var userId2 = {
    name: 'anotherName',
    lastName: 'anotherUncle',
    age: 25
};

var userId3 = {

};


event.on('logIn', function(user) {
    var name = user.name || 'guest';
    var date = new Date();
    console.log(`User ${name} logged at ${date.toLocaleTimeString()} ${date.toDateString()}`);
});

event.once('someAction', function(user) {
    var name = user.name || 'guest';
    var date = new Date();
    console.log(`User ${name} done someAction at ${date.toLocaleTimeString()} ${date.toDateString()}`);
});

event.on('logOut', function(user) {
    var name = user.name || 'guest';
    var date = new Date();
    console.log(`User ${name} logged out at ${date.toLocaleTimeString()} ${date.toDateString()}`);
});


event.emit('logIn', userId1);
event.emit('logOut', userId2);
event.emit('someAction', userId3);