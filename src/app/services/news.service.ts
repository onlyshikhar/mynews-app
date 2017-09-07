import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

  constructor(public http:Http) { }

getPosts(searchTerm : any){
	return this.http.get('https://newsapi.org/v1/articles?source='+searchTerm+'&sortBy=top&apiKey=f9b785283e1d41f69bb484d5461653b9')
	.map(res => res.json());

}
}
