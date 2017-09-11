import { Component, OnInit,EventEmitter,Input} from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { NewsService } from '../services/news.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
@Input('news') news:any;
favr:any={}
  constructor(private newsService:NewsService) { }
   addFav(post){
   	this.favr={
   			"title":post.title,
   			"description":post.description,
   			"urlToImage":post.urlToImage
   	}
   	this.newsService.addfav(post).subscribe((data)=>{
       alert("Added to favourites");
   		//console.log(data)
   	})
   }
}
