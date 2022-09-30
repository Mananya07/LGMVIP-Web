var row = 1;
var submit = document.getElementById("submit");
submit.addEventListener("click", Details);


function Details(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var skills = document.getElementById("skills").value;

    if(!fname || !lname || !email ||!skills){
        alert("Please fill all the boxes");
        return;
    }

    var show = document.getElementById("show");

    var newRow = show.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = email;
    cell4.innerHTML = skills;

    row++;
}