/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//event listner

document.querySelector('button').addEventListener('click', create);
document.querySelector('div').addEventListener('click', remove);



//main class
function Block() {
    this.position = 'absolute';
    this.width = '50px';
    this.height = '50px';
    this.top = getRandNum(50, 500) + 'px';
    this.left = getRandNum(50, 500) + 'px';
    this.transform = getRandNum(0, 360);
    this.opacity = getRandNum(0, 1);
    this.backgroundColor = getRandColor();
    

}


//property create
Block.prototype.createBlock = function () {

    var div = document.createElement('div');
    div.className = 'block';
    div.style.position = this.position;
    div.style.width = this.width;
    div.style.height = this.height;
    div.style.backgroundColor = this.backgroundColor;
    div.style.top = this.top;
    div.style.left = this.left;
    div.style.transform = 'rotate(' + this.transform + 'deg)';
    div.style.opacity = this.opacity;

    document.querySelector('body').appendChild(div);

};
//property move
Block.prototype.moveBlock = function () {

    var doc = document.querySelectorAll('body > div');

    for (var i = 0; i < doc.length; i++) {
        doc[i].style.top = getRandNum(50, 500) + 'px';
        doc[i].style.left = getRandNum(50, 500) + 'px';
    }

};
//property remove
Block.prototype.removeBlock = function () {
    
};

//generates a random color
function getRandColor() {
    var colors = ['red', 'blue', 'green'];
    
    var index = Math.floor(Math.random() * (colors.length));

    return colors[index];
}
//generates a random number
function getRandNum(min, max) {
    var randNum = Math.random() * (max - min) + min;
    return randNum;

}

//calls move div on an interval
window.setInterval(function () {
    Block.prototype.moveBlock.call(this);
}, 2000);



function create() {
    var block = new Block();
    block.createBlock();
}

function remove() {
    console.log();
}




