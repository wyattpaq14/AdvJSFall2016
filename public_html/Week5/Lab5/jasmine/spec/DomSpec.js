/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function sandbox(tag, classNames, html){
  var el;

  beforeEach(function(){
    el = document.createElement(tag);
    el.classList.add(classNames);
    el.innerHTML = html;
    document.body.appendChild(el);
  });


  afterEach(function(){
    document.body.removeChild(el);
    el = null;
 });
 
}


describe("input number only", function(){
  
  sandbox('div', 'test', 'this is a test');

  it('should return true if the input box value is only numeric', function(){
      var elemContent = getElementContent('div.test');
      expect( elemContent ).toEqual('this is a test');
      expect( elemContent ).not.toEqual('this is a not test');
  });
  
  

  
});

describe("input number and string", function(){
  
  sandbox('div', 'test', '<p>this is a test</p>');

  it('should return false if the input box value is not all numeric', function(){
      var elemContent = getElementContent('div.test p');
      expect( elemContent ).toEqual('this is a test');
      expect( elemContent ).not.toEqual('this is a not test');
  });
  
 
  
});

describe("text-decoration set", function(){
  
  sandbox('div', 'test', '<p>this is a test</p>');

  it('should match overline', function(){
      var elemContent = getElementContent('div.test p');
      expect( elemContent ).toEqual('this is a test');
      expect( elemContent ).not.toEqual('this is a not test');
  });
  it('should not match none', function(){
      var elemContent = getElementContent('div.test p');
      expect( elemContent ).toEqual('this is a test');
      expect( elemContent ).not.toEqual('this is a not test');
  });
  it('should not match underline', function(){
      var elemContent = getElementContent('div.test p');
      expect( elemContent ).toEqual('this is a test');
      expect( elemContent ).not.toEqual('this is a not test');
  });
  it('should not match line-through', function(){
      var elemContent = getElementContent('div.test p');
      expect( elemContent ).toEqual('this is a test');
      expect( elemContent ).not.toEqual('this is a not test');
  });
  
 
  
});


describe("text-decoration not set", function(){
  
  sandbox('div', 'test', '<p>this is a test</p>');

  it('should match overline', function(){
      var elemContent = getElementContent('div.test p');
      expect( elemContent ).toEqual('this is a test');
      expect( elemContent ).not.toEqual('this is a not test');
  });
  it('should not match none', function(){
      var elemContent = getElementContent('div.test p');
      expect( elemContent ).toEqual('this is a test');
      expect( elemContent ).not.toEqual('this is a not test');
  });
  it('should not match underline', function(){
      var elemContent = getElementContent('div.test p');
      expect( elemContent ).toEqual('this is a test');
      expect( elemContent ).not.toEqual('this is a not test');
  });
  it('should not match line-through', function(){
      var elemContent = getElementContent('div.test p');
      expect( elemContent ).toEqual('this is a test');
      expect( elemContent ).not.toEqual('this is a not test');
  });
  
 
  
});

