import { Component, OnInit,EventEmitter,Input} from '@angular/core';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
@Input('news') news:any;
  constructor() { }

}
