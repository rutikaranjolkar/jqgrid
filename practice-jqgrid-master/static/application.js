// The HTML id of the table that will become the grid
var gridElementId = "grid";
// The HTML id of the DIV that will serve as the pager
var pagerElementId = "pager";

// Everything runs AFTER the document is fully ready. Hence, the $(document).ready(...) call.
$(document).ready(function() {
    var gridElementQuery = "#" + gridElementId;
    var pagerElementQuery = "#" + pagerElementId;
    // The grid is defined here...
    jQuery(gridElementQuery).jqGrid({
	// This is the source of data. Change the global gridData variable as required.
	// This variable is defined in the file gridData.js and it must be included in the HTML
	// page before this JavaScript file is included (in the <script> tag).
        data: gridData,
        datatype: "local",
	// Set the proper column names here
        colNames: ['InvNo', 'Client'],
	// Define as many columns below as there are column names. 
	// Otherwise, everything will stop working!!!
        colModel: [{
            name: 'id',
            index: 'id',
            width: 60,
            align: 'center',
            sorttype: 'date',
            frozen: true
        }, {
            name: 'name',
            index: 'name',
            width: 100,
            frozen: true
        }],
        rowNum: 10,
        width: 700,
        rowList: [10, 20, 30],
        pager: pagerElementQuery,
        sortname: 'invdate',
        viewrecords: true,
        sortorder: "desc",
        jsonReader: {
            repeatitems: false
        },
        shrinkToFit: false,
        caption: "Frozen Header",
        height: 'auto'
    });
    jQuery(gridElementQuery).jqGrid('setFrozenColumns');
});
