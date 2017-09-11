import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
news:any
  constructor() { }

  ngOnInit() {
  }


onVoted(news:any){
	this.news=news
	//console.log(this.news)
}
}
