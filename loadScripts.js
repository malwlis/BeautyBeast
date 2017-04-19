/**
 * Created by Malwinka on 2017-04-19.
 */


document.addEventListener('DOMContentLoaded', function(event) {

    var mainJS = document.createElement('script');
    mainJS.src = 'main.js';

    var sortJS = document.createElement('script');
    sortJS.src = 'sort.js';

    var filterJS = document.createElement('script');
    filterJS.src = 'filter.js';

    var paginationJS = document.createElement('script');
    paginationJS.src = 'pagination.js';

    document.body.appendChild(mainJS);

    mainJS.onload = mainJS.onreadystatechange = function() {
        document.body.appendChild(sortJS);

        sortJS.onload = sortJS.onreadystatechange = function() {
            document.body.appendChild(filterJS);

            filterJS.onload = filterJS.onreadystatechange = function() {
                document.body.appendChild(paginationJS);
            };
        };
    };
});
