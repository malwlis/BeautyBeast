/**
 * Created by Malwinka on 2017-04-19.
 */





$(document).ready (function() {
    // var rowCount = document.getElementById('table').rows.length;
    var rowCount = $('table').find('tr').length - 2;
    alert(rowCount);
});

//not working
// $(window).load = function () {
//     var rowCount = $('table').find('tr').length;
//     alert(rowCount);
// };

// document.onreadystatechange = function(){
//     if(document.readyState === 'complete'){
//         var rowCount = $('tableName').find('tr').length;
//         alert(rowCount);
//     }
// }
// $('table').each(function() {
//     alert("ok");
//     var currentPage = 0;
//     var numPerPage = 10;
//     var $table = $(this);
//     $table.bind('repaginate', function() {
//         $table.find('tbody tr').hide().slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).show();
//     });
//     $table.trigger('repaginate');
//     var numRows = $table.find('tbody tr').length;
//     var numPages = Math.ceil(numRows / numPerPage);
//     var $pager = $('<div class="pager"></div>');
//     for (var page = 0; page < numPages; page++) {
//         $('<span class="page-number"></span>').text(page + 1).bind('click', {
//             newPage: page
//         }, function(event) {
//             currentPage = event.data['newPage'];
//             $table.trigger('repaginate');
//             $(this).addClass('active').siblings().removeClass('active');
//         }).appendTo($pager).addClass('clickable');
//     }
//     $pager.insertBefore($table).find('span.page-number:first').addClass('active');
// });

