// /**
//  * Created by Malwina on 2017-04-16.
//  */


$.getJSON("sluzba.json", function(data) {
    header = Object.keys(data[0]);

    html = "<thead class=\"thead-inverse\">" +
            "<tr>";
    $.each(header, function (key, param) {
        html += "<th>" + param + "</th>" ;
    });
    html += "</tr> " +
            "</thead>";

    // html= "<tr>" +
    //         "<td>id</td>" +
    //         "<td>First name</td>" +
    //         "<td> Last name</td>" +
    //         "<td> Date of birth</td>" +
    //         "<td> Function </td>" +
    //         "<td> Experience</td>" +
    //     "</tr>";


    html += "<tbody>";
    $.each(data, function (key, obj) {
        // html += obj.firstName + "<br>";
        html += "<tr>" +
            "<td>" + obj.id + "</td>" +
            "<td>" + obj.firstName + "</td>" +
            "<td>" + obj.lastName + "</td>" +
            "<td>" + obj.dateOfBirth + "</td>" +
            "<td>" + obj.function + "</td>" +
            "<td>" + obj.experience + "</td>" +
        "</tr>";
    });
    html += "<tbody>";
    document.getElementById("table").innerHTML = html;
});

$( function() {
    $('#date').datepicker({
        dateFormat: "dd.mm.yy",
        defaultDate: null,
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        onSelect: function(dateSelected) {
            filterDate(dateSelected);
            // alert(dateSelected.toString());
        }
    });
});






// var myObj, i, j, x = "";
// myObj = {
//     "name":"John",
//     "age":30,
//     "cars": [
//         { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
//         { "name":"BMW", "models":[ "320", "X3", "X5" ] },
//         { "name":"Fiat", "models":[ "500", "Panda" ] }
//     ]
// }
//
// for (i in myObj.cars) {
//     x += "<h1>" + myObj.cars[i].name + "</h1>";
//     for (j in myObj.cars[i].models) {
//         x += myObj.cars[i].models[j] + "<br>";
//     }
// }
//
// document.getElementById("demo").innerHTML = x;

// function filterID() {
//     var input, filter, table, tr, td, i;
//     input = document.getElementById("idParam");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("table");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[0];
//         if (td) {
//             if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }
