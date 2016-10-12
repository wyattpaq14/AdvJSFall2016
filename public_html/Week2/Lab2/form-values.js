function test() {
    var myvar = [["shoe", "dog", "cat"], ["box", "glue", "window"]];


    var row;
    for (var i = 0; i < myvar.length; i++) {
        row = myvar[i];

        for (var j = 0; j < row.length; j++) {
            /*
             * inside the inner loop you can add your logic
             * here
             */
            if (row[j] === 'k') {

                console.log('item is equal to k');
                continue;
            }
            console.log(row[j]);

        }


    }


}







var label = document.querySelector('label');
var textField = document.querySelector('input[name="words"]');
var addTextBtn = document.querySelector('input[name="add"]');
var divToAdd = document.querySelector('div');
addTextBtn.addEventListener('click', addText);
function addText() {

    if (textField.value.length) {

        label.classList.remove('error');
        var result = '<p>' + textField.value + '</p>';
        divToAdd.innerHTML += result;
    } else {
        label.classList.add('error');
    }

}
function createMultiArray(rows) {
    /* create an array object */
    var myArray = [];
    /* create another array object with the values */
    var items = ['d', 't', 'y', 7, 8];
    /* push a copy of those items */
    myArray.push(items.slice());
    /* create a reverse copy of those items */
    var itemsReverse = items.slice().reverse();
    /* push a copy of those reverse items */
    myArray.push(itemsReverse.slice());
    console.log(myArray);
    console.log(items);
}

function randomNumber(min, max) {
    min = 1;
    max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


