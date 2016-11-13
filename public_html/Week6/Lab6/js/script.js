/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Block(position, top, left, transform, opacity, bgColor) {
    this.position = position;
    this.width = '50px';
    this.height = '50px';
    this.top = top;
    this.left = left;
    this.transform = transform;
    this.opacity = opacity;
    this.backgroundColor = bgColor;

}



Block.prototype.createBlock = function () {


    var div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "red";
    div.style.color = "white";
    div.innerHTML = "Hello";

    document.querySelector('div').appendChild(div);

//    var box = document.createElement('div');
//    box.style.backgroundColor = "red";
//    box.style.position = "absolute";
//    box.style.width = "50px";
//    box.style.height = "50px";

};

Block.prototype.move = function () {

};

Block.prototype.remove = function () {

};

function getRandColor() {
    var randColor = Math.floor(Math.random() * 10000);
    return randColor;
}

function getRandNum(min, max) {
    var randNum = Math.random() * (max - min) + min;
    return randNum;

}


function create() {
    var block = new Block('absolute', getRandNum(50, 500), getRandNum(0, 360), getRandNum(0, 1), getRandColor());

    block.createBlock;


}




