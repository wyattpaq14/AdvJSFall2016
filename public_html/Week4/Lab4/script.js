/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var objDiv = document.querySelector('#agreeScroll');
//scroll event listener
objDiv.addEventListener('scroll', checkPosition);
//Form event listener
var form = document.querySelector('#mainform');
form.addEventListener('submit', checkForm);
function checkPosition() {
    console.clear();
    console.log(objDiv.scrollTop);
    console.log(objDiv.scrollHeight);
    console.log(objDiv.offsetHeight);

    //for some reason needed Math.round because it wouldn't reach the right number

    if (Math.round(objDiv.scrollTop) === (objDiv.scrollHeight - objDiv.offsetHeight)) {
        console.log('bottom');
        var radioBtnAgree = document.querySelector('#agree');
        var radioBtnDisagree = document.querySelector('#notagree');
        radioBtnAgree.disabled = false;
        radioBtnDisagree.disabled = false;
    }
}

function checkForm(e) {
    /*
     * We will learn about this in the comming weeks
     * but this will stop the form from submmiting,
     * it's default function
     */
    e.preventDefault();
    var name = document.querySelector('#fullname');
    var email = document.querySelector('#email');
    var phone = document.querySelector('#phone');
    var desc = document.querySelector('#description');

    //add error class to span
    var spanErrors = document.querySelector('span');
    spanErrors.classList.add('error');
    
    
    
    
    if (email.value === '') {
        var errorBox = document.querySelector('#email_err');
        errorBox.innerHTML = "Email is invalid!"

    }

    if (name.value === '') {
        var errorBox = document.querySelector('#fullname_err');
        errorBox.innerHTML = "Name is invalid!"
    }

    if (phone.value === '') {
        var errorBox = document.querySelector('#phone_err');
        errorBox.innerHTML = "Phone is invalid!"
    }

    if (desc.value === '') {
        var errorBox = document.querySelector('#description_err');
        errorBox.innerHTML = "Description is invalid!"
    }

}