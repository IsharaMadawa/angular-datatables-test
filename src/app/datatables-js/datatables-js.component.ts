import { Component, ViewChild, OnInit } from "@angular/core";
declare var $;

@Component({
  selector: "app-datatables-js",
  templateUrl: "./datatables-js.component.html",
  styleUrls: ["./datatables-js.component.scss"]
})
export class DatatablesJsComponent implements OnInit {
  @ViewChild("dataTable", { static: true }) table;
  dataTable: any;
  dtOptions: any;
  constructor() {}

  ngOnInit() {
    this.dtOptions = {
      pagingType: "full_numbers",
      dom: "Bfrtip",
      // buttons: ["copy", "csv", "excel", "pdf", "print"],
      buttons: [
        {
          extend: 'pdfHtml5',
            orientation: 'portrait',
            pageSize: 'TABLOID',
            customize: function (doc) {
                var tblBody = doc.content[1].table.body;
                // ***
                //This section creates a grid border layout
                // ***
                doc.content[1].layout = {
                hLineWidth: function(i, node) {
                    return (i === 0 || i === node.table.body.length) ? 2 : 1;},
                vLineWidth: function(i, node) {
                    return (i === 0 || i === node.table.widths.length) ? 2 : 1;},
                hLineColor: function(i, node) {
                    return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';},
                vLineColor: function(i, node) {
                    return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';}
                };
                // ***
                //This section loops thru each row in table looking for where either
                //the second or third cell is empty.
                //If both cells empty changes rows background color to '#FFF9C4'
                //if only the third cell is empty changes background color to '#FFFDE7'
                // ***
                $('#tableID').find('tr').each(function (ix, row) {
                    var index = ix;
                    var rowElt = row;
                    $(row).find('td').each(function (ind, elt) {
                        if (tblBody[index][1].text == '' && tblBody[index][2].text == '') {
                            delete tblBody[index][ind].style;
                            tblBody[index][ind].fillColor = '#FFF9C4';
                        }
                        else
                        {
                            if (tblBody[index][2].text == '') {
                                delete tblBody[index][ind].style;
                                tblBody[index][ind].fillColor = '#FFFDE7';
                            }
                        }
                    });
                });
            }
        }
      ],
      info: false,
      bFilter: false,
      columnDefs: [
        {
          targets: [0],
          visible: false,
          searchable: false
        },
        {
          targets: [1],
          visible: false
        }
      ]
    };
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.dtOptions);
  }
}
