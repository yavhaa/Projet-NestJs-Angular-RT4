import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryComponent } from './Library/library/library.component';
import { BookComponent } from './Library/book/book.component';
import { ReservationComponent } from './Details/reservation/reservation.component';
import { AboutComponent } from './Details/about/about.component';
import { DiscussionComponent } from './Details/discussion/discussion.component';
import {DetailsComponent} from "./Details/details/details.component";
import {ROUTING} from "./app.routing";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        LibraryComponent,
        BookComponent,
        DetailsComponent,
        ReservationComponent,
        AboutComponent,
        DiscussionComponent,
        DetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ROUTING,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
