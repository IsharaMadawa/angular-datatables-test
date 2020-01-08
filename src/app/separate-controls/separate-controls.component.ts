import { Component, ViewChild, OnInit } from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable/lib/components/datatable.component";
import { IDropdownSettings } from "ng-multiselect-dropdown";

@Component({
  selector: "app-separate-controls",
  templateUrl: "./separate-controls.component.html",
  styleUrls: ["./separate-controls.component.scss"]
})
export class SeparateControlsComponent implements OnInit {
  data = [
    {
      descrizione: "Trip 1",
      indice: "2500 ",
      selectedItems: [{ item_id: 3, item_text: "Elverum" }]
    },
    {
      descrizione: "Trip 2",
      indice: "1000 ",
      selectedItems: [{ item_id: 4, item_text: "Kopervik" }]
    },
    {
      descrizione: "Trip 3",
      indice: "700 ",
      selectedItems: [
        { item_id: 3, item_text: "Elverum" },
        { item_id: 4, item_text: "Kopervik" }
      ]
    },
    {
      descrizione: "Trip 1",
      indice: "2500 ",
      selectedItems: [{ item_id: 3, item_text: "Elverum" }]
    },
    {
      descrizione: "Trip 2",
      indice: "1000 ",
      selectedItems: [{ item_id: 4, item_text: "Kopervik" }]
    },
    {
      descrizione: "Trip 3",
      indice: "700 ",
      selectedItems: [
        { item_id: 3, item_text: "Elverum" },
        { item_id: 4, item_text: "Kopervik" }
      ]
    },
    {
      descrizione: "Trip 1",
      indice: "2500 ",
      selectedItems: [{ item_id: 3, item_text: "Elverum" }]
    },
    {
      descrizione: "Trip 2",
      indice: "1000 ",
      selectedItems: [{ item_id: 4, item_text: "Kopervik" }]
    },
    {
      descrizione: "Trip 3",
      indice: "700 ",
      selectedItems: [
        { item_id: 3, item_text: "Elverum" },
        { item_id: 4, item_text: "Kopervik" }
      ]
    },
    {
      descrizione: "Trip 1",
      indice: "2500 ",
      selectedItems: [{ item_id: 3, item_text: "Elverum" }]
    },
    {
      descrizione: "Trip 2",
      indice: "1000 ",
      selectedItems: [{ item_id: 4, item_text: "Kopervik" }]
    },
    {
      descrizione: "Trip 3",
      indice: "700 ",
      selectedItems: [
        { item_id: 3, item_text: "Elverum" },
        { item_id: 4, item_text: "Kopervik" }
      ]
    }
  ];

  dropdownList = [];
  dropdownSettings: IDropdownSettings;

  selected = [];

  @ViewChild("table", { static: false }) table: DatatableComponent;
  rows = [];
  isEditable = {};

  constructor() {}

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: "Oslo" },
      { item_id: 2, item_text: "Levanger" },
      { item_id: 3, item_text: "Elverum" },
      { item_id: 4, item_text: "Kopervik" },
      { item_id: 5, item_text: "Kirkenes" }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      // itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.rows = this.data;
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  // Save row
  save(row, rowIndex) {
    this.isEditable[rowIndex] = !this.isEditable[rowIndex];
    console.log("Row saved: " + JSON.stringify(row));
  }

  // Delete row
  delete(row, rowIndex) {
    this.isEditable[rowIndex] = !this.isEditable[rowIndex];
    console.log("Row deleted: " + JSON.stringify(row));
  }
}
