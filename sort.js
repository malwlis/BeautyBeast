/**
 * Created by Malwinka on 2017-04-17.
 */
function sortTable(n) {
    var table, rows, isSwitching, x, y, shouldSwitch, dir, switchCount = 0;
    table = document.getElementById("table");
    isSwitching = true;
    //first click cause ascending sort
    dir = "asc";

    while (isSwitching) {
        isSwitching = false;
        rows = table.getElementsByTagName("TR");
        //sort all rows, expect from header row
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            if (dir === "asc") {
                //sort asc by id or experience
                if (n === 0 || n === 5) {
                    if (Number(x.innerHTML) > Number(y.innerHTML)){
                        shouldSwitch = true;
                        break;
                    }
                }
                //sort asc by date
                else if (n === 3) {
                    dateX = StringToDate(x.innerHTML.toString());
                    dateY = StringToDate(y.innerHTML.toString());
                    if (dateX.getTime() > dateY.getTime()) {
                        shouldSwitch = true;
                        break;
                    }
                }
                //sort asc by other column
                else {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            } else if (dir === "desc") {
                //sort desc by id or experience
                if (n === 0 || n === 5) {
                    if (Number(x.innerHTML) < Number(y.innerHTML)){
                        shouldSwitch = true;
                        break;
                    }
                }
                //sort desc by date
                else if (n === 3) {
                    dateX = StringToDate(x.innerHTML.toString());
                    dateY = StringToDate(y.innerHTML.toString());
                    if (dateX.getTime() < dateY.getTime()) {
                        shouldSwitch = true;
                        break;
                    }
                }

                //sort desc by other column
                else {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }
        if (shouldSwitch) {
            //make switch
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            isSwitching = true;
            switchCount ++;
        } else {
            if (switchCount === 0 && dir === "asc") {
                //change direction
                dir = "desc";
                isSwitching = true;
            }
        }
    }
}

function StringToDate(dateTimeString){
    dateString = dateTimeString.split(" ", 1);
    dateTab = dateString.toString().split(".");
    date = new Date(dateTab[2], dateTab[1], dateTab[0]);
    return date;
}