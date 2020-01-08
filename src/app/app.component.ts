import { Component } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  editing = {};
  rows = [];

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open("GET", `./assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateValue(event, cell, rowIndex) {
    console.log("inline editing rowIndex", rowIndex);
    this.editing[rowIndex + "-" + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log("UPDATED!", this.rows[rowIndex][cell]);
  }
}
