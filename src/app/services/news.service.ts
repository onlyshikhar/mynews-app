import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

  constructor(public http:Http) { }

getPosts(){
	return this.http.get('https://newsapi.org/v1/sources?language=en')
	.map(res => res.json());

}
getPosts1(nameid){
	return this.http.get('https://newsapi.org/v1/articles?source='+nameid+'&sortBy=top&apiKey=f9b785283e1d41f69bb484d5461653b9')
	.map(res => res.json());
}
}
