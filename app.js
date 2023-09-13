"use strict"
const d =2;
const tree = "tres";
let r=0;
alert( r = d * tree);

const array1 =["Uno","dos","tres","cuatro",'cinco'];

const tagUl=document.querySelector('ul');
//crear un item o li para la lista
let item = document.createElement('li');
//agrego text al item <li> creado
item.textContent=`${array1[2]}`;

//agregar un hijo(item) a la lista
tagUl.appendChild(item);

