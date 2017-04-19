/**
 * Created by Malwinka on 2017-04-19.
 */

// function loadscripts ( async ) {
//     if( async === undefined ) {
//         async = false;
//     }
//
//     var scripts = [];
//     var _scripts = ['main.js', 'sort.js', 'filter.js', 'pagination.js'];
//     for(var s in _scripts) {
//         scripts[s] = document.createElement('script');
//         scripts[s].type = 'text/javascript';
//         scripts[s].src = _scripts[s];
//         scripts[s].async = async;
//     }
//     var loadNextScript = function() {
//         var script = scripts.shift();
//         var loaded = false;
//         document.getElementsByTagName('head').appendChild( script );
//         script.onload = script.onreadystatechange = function() {
//             var rs = this.readyState;
//             if (rs && rs !== 'complete' && rs !== 'loaded') return;
//             if (loaded) return;
//             loaded = true;
//             if (scripts.length) {
//                 loadNextScript();
//             } else {
//                 // done
//             }
//         };
//     };
//     loadNextScript();
// }

document.addEventListener('DOMContentLoaded', function(event) {
    // initial DOM loaded
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