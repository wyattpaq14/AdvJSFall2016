/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Car(model, color, doors, maxSpeed) {
    this.model = model;
    this.color = color;
    this.doors = doors;
    this.driving = false;
    this.speed = 0;
    this.maxSpeed = maxSpeed;

    /* this is the constructor, you can also execute functions here too */
    this.drive().go();
}

Car.prototype.info = function () {
    return 'The car speed is ' + this.speed + ' of ' + this.maxSpeed;
};

Car.prototype.go = function () {

    var timer = setInterval(this.run.bind(this), 500);

    return this;


};




