import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
//import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
	
	posts:any=[];

  constructor(private newsService:NewsService) { }

  getPosts(searchTerm : HTMLInputElement) {

  	this.newsService.getPosts(searchTerm.value)
  		.subscribe((posts)=> {
  		console.log(posts.articles);
  		this.posts = posts.articles;
  		
  	});
  }

}
