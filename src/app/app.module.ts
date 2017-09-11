import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NewsService } from './services/news.service';
import { ListComponent } from './list/list.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { RouterModule,Routes } from '@angular/router';
import { FavComponent } from './fav/fav.component';

const approutes:Routes=[
{path:'',component:SearchComponent},
{path:'search' ,component:FavComponent},
{path:'fav',component:FavouriteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent,
    FavouriteComponent,
    FavComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpModule,
    FormsModule,RouterModule.forRoot(approutes)
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
