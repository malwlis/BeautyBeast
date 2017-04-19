// /**
//  * Created by Malwina on 2017-04-16.
//  */


$.getJSON("sluzba.json", function(data) {
    header = Object.keys(data[0]);

    html = "<thead class = \"table\">" +
            "<tr>" +
                "<th onclick=\"sortTable(0)\">id</th>" +
                "<th onclick=\"sortTable(1)\">First name</th>" +
                "<th onclick=\"sortTable(2)\"> Last name</th>" +
                "<th onclick=\"sortTable(3)\"> Date of birth</th>" +
                "<th onclick=\"sortTable(4)\"> Function </th>" +
                "<th onclick=\"sortTable(5)\"> Experience</th>" +
            "</tr>" +
            "</thead>";


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
        yearRange: "-100:+0",
        onSelect: function(dateSelected) {
            filterDate(dateSelected);
        },
        closeText: 'Clear',
        onClose: function () {
            var event = arguments.callee.caller.caller.arguments[0];
            if ($(event.delegateTarget).hasClass('ui-datepicker-close')) {
                $(this).val('');
                filterDate(null);
            }
        }
    });
});
