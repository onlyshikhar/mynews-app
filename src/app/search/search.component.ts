import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
	
	posts:any=[];
	news:any=[];
  constructor(private newsService:NewsService) { }
ngOnInit(){

  	this.newsService.getPosts()
  		.subscribe((posts)=> {
  		//console.log(posts);
  		this.posts = posts.sources;
  		
  	});
  }
  getPosts1(nameid){
  this.newsService.getPosts1(nameid)
  .subscribe((news) => {
  	this.news =news.articles;
  });

}
}

