
//Variable to prevent duplicate tables to be generated
var isGenerated;




function createTable() {
    if (!isGenerated) {


        //Accumulate a number to calculate the average afterwards
        var numAccumulator = 0;
        var size = document.querySelector('input[name="tblSize"]').value;
        var avgBox = document.querySelector('label[id="avg"]');
        var tbl = document.querySelector('table');
        var mathAvg = 0;


        //Check for excessive size
        if (size > 300) {
            alert("You fool! Table too big!");
            tbl = 10;
            document.querySelector('input[name="tblSize"]').value = tbl;
            createTable();
        }

        for (var i = 0; i < size; i++) {
            var tr = tbl.insertRow();
            for (var j = 0; j < size; j++) {
                var randomNum = randomNumber(0, 100);
                numAccumulator += randomNum;
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(randomNum));
                td.style.border = '1px solid black';
                td.style.padding = "10px 10px";
                td.style.textAlign = "center";


            }
        }
        mathAvg = numAccumulator / (size * size);
        //finalOutput.appendChild(document.createTextNode("<p>Average number: " + mathAvg + "</p>"));
        avgBox.innerHTML = "<p>Average number: " + Math.round(mathAvg) + "</p>";
        isGenerated = true;
    }
}


function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}