/**
 * Created by Malwinka on 2017-04-17.
 */
function filterID() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("idParam");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function filterFirstName() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("firstNameParam");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function filterLastName() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("lastNameParam");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function filterDate(dateSelected) {

    var table, tr, td, i;
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    //create full date from date selected in datepicker
    dateSelectedTab = dateSelected.toString().split(".");
    dateSelected = new Date(dateSelectedTab[2], dateSelectedTab[1], dateSelectedTab[0]);


    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];

        //create date from string from column dateOfBirth
        var dateString =  td.innerHTML.toString().split(" ",1);
        var dateTab = dateString.toString().split(".");
        var date = new Date(dateTab[2], dateTab[1], dateTab[0]);
        alert(date.toString() + " " + dateSelected.toString());

        if (date.getTime() === dateSelected.getTime()) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }

    }
}

function filterFunction() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("functionParam");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function filterExperience() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("experienceParam");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}