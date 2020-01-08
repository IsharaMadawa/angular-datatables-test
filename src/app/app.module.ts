import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppComponent } from './app.component';
import { SeparateControlsComponent } from './separate-controls/separate-controls.component';
import { DatatablesJsComponent } from './datatables-js/datatables-js.component';

@NgModule({
  declarations: [
    AppComponent,
    SeparateControlsComponent,
    DatatablesJsComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
