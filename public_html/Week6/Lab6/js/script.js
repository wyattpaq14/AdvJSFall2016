/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Block(position, top, left, transform, opacity, bgColor) {
    this.position = position;
    this.width = '50px';
    this.height = '50px';
    this.top = top + 'px';
    this.left = left + 'px';
    this.transform = transform;
    this.opacity = opacity;
    this.backgroundColor = bgColor;

}



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


    document.querySelector('div').appendChild(div);

};

Block.prototype.move = function () {

};

Block.prototype.remove = function () {

};

function getRandColor() {
    var randColor = Math.floor(Math.random() * 10000);
    return '#' + randColor;

}

function getRandNum(min, max) {
    var randNum = Math.random() * (max - min) + min;
    return randNum;


}


function create() {
    var block = new Block('absolute', getRandNum(50, 500), getRandNum(50, 500), getRandNum(0, 360), getRandNum(0, 1), getRandColor());
    console.log(block);
    block.createBlock();


}




