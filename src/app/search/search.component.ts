import { Component, OnInit, } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Http,Response} from '@angular/http';
import { EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
	
	posts:any=[];
	news:any=[];
  @Output() onVoted = new EventEmitter<any>();
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
    this.onVoted.emit(this.news)

  });

}
}

