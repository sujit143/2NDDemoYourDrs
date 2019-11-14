import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MenutempComponent } from './menutemp/menutemp.component';
import { MenuModule, ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
// import { CdkTree } from '@angular/cdk/tree';





@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    MenutempComponent

  ],
  imports: [
    BrowserModule,
    MenuModule,
    ToolbarModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule
    // CdkTree

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
