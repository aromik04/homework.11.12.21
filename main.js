"use strict"
//task 1

//task 2
const props = {
  user: {
    login: 'Admin',
    password: '1234'
  },
  info: {
    protocol: 'https',
    host: '123.45.6.7',
    port: '1234',
  }
}
let {user, info} = props;
let {login, password} = user;
let {protocol, host, port} = info;

//task 3
const coordinates = [12, 134, 567, 456, 13, 14]; 
const [first, , , fourth, , sixth] = coordinates;
//не знаю, сделал я правильно или нет 

//task 4

const cars = [
    { id: 1, model: "Mercedes-Benz", speed: 255 },
    { id: 2, model: "BMW", speed: 260 },
    { id: 3, model: "Skoda", speed: 180 },
    { id: 4, model: "Nissan", speed: 200 },
    { id: 5, model: "Mazda", speed: 240 },
  ];
//const exceeding
//не нашел метод массива
