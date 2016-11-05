/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function sandbox(text, style) {
    var el = document.querySelector('input');
    beforeEach(function () {
        el.style.color = 'red';

        //set valid value of the input text box
        el.value = text;

        el.style.textDecoration = style;

    });


//  beforeEach(function(){
//    el = document.createElement(tag);
//    el.classList.add(classNames);
//    el.innerHTML = html;
//    document.body.appendChild(el);
//  });
//
//
//  afterEach(function(){
//    document.body.removeChild(el);
//    el = null;
// });

}


describe("input number only", function () {

    sandbox(98745);

    it('should return true if the input box value is only numeric', function () {
        var elemContent = isValidInputField();
        expect(elemContent).toEqual(true);
    });




});

describe("input number and string", function () {

    sandbox('12asdf');

    it('should return false if the input box value is not all numeric', function () {
        var elemContent = isValidInputField();
        expect(elemContent).toEqual(false);
    });



});

describe("text-decoration set", function () {

    sandbox(0, 'overline');

    it('should match overline', function () {
        var elemContent = getDecorationStyle();
        expect(elemContent).toEqual(true);
    });
    it('should not match none', function () {
        var elemContent = getDecorationStyle()
        expect(elemContent).toEqual(true);
    });
    it('should not match underline', function () {
        var elemContent = getDecorationStyle()
        expect(elemContent).toEqual(true);
    });
    it('should not match line-through', function () {
        var elemContent = getDecorationStyle()
        expect(elemContent).toEqual(true);
    });



});


describe("text-decoration not set", function () {

    sandbox(0, 'overline');

    it('should match overline', function () {
        var elemContent = getDecorationStyle();
        expect(elemContent).toEqual(true);
    });
    it('should not match none', function () {
        var elemContent = getDecorationStyle()
        expect(elemContent).toEqual(true);
    });
    it('should not match underline', function () {
        var elemContent = getDecorationStyle()
        expect(elemContent).toEqual(true);
    });
    it('should not match line-through', function () {
        var elemContent = getDecorationStyle()
        expect(elemContent).toEqual(true);
    });



});

