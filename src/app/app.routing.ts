import {RouterModule, Routes} from "@angular/router";
import {DetailsComponent} from "./Details/details/details.component";
import {LibraryComponent} from "./Library/library/library.component";


const APP_ROUTING: Routes = [
  {path: '', redirectTo: 'library', pathMatch: 'full'},
  {path: 'library', component: LibraryComponent},
  {path: 'details/:id', component: DetailsComponent},
  ];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
