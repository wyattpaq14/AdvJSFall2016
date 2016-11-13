/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//event listner

document.querySelector('button').addEventListener('click', create);


//main class
function Block(position, top, left, transform, opacity, bgColor) {
    this.position = position;
    this.width = '50px';
    this.height = '50px';
    this.top = top + top + 'px';
    this.left = left + left + 'px';
    this.transform = transform;
    this.opacity = opacity;
    this.backgroundColor = bgColor;

}


//property create
Block.prototype.createBlock = function () {

    var div = document.createElement('div');
    div.style.position = this.position;
    div.style.width = this.width;
    div.style.height = this.height;
    div.style.backgroundColor = this.backgroundColor;
    div.style.top = this.top;
    div.style.left = this.left;
    div.style.transform = this.transform;
    div.style.opactiy = this.opacity;
    
    document.querySelector('body').appendChild(div);

};
//property move
Block.prototype.move = function () {

    var doc = document.querySelector('body > div:nth-child(4)');
    doc.style.top = getRandNum(50, 500) + 'px';
    doc.style.left = getRandNum(50, 500) + 'px';

};
//property remove
Block.prototype.remove = function () {

};

//generates a random color
function getRandColor() {
    var randColor = Math.floor(Math.random() * 10000);
    return '#' + randColor;

}
//generates a random number
function getRandNum(min, max) {
    var randNum = Math.random() * (max - min) + min;
    return randNum;

}

//calls move div 
window.setInterval(function () {
    Block.prototype.move.call(this);
}, 1000);

function create() {
    var block = new Block('absolute', getRandNum(50, 500), getRandNum(50, 500), getRandNum(0, 360), getRandNum(0, 1), getRandColor());
    block.createBlock();


}




