import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CribsListingComponent } from './cribs-listing/cribs-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CribsService } from './service/cribs.service';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';
import { FormsModule }   from '@angular/forms';
import { UtilService } from './service/util.service';



@NgModule({
  declarations: [
    AppComponent,
    CribsListingComponent,
    CribCardComponent,
    AddListingFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [CribsService, UtilService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
