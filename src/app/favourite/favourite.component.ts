import { Component,OnInit } from '@angular/core';
import { Http,Response} from '@angular/http';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})

export class FavouriteComponent implements OnInit {

data: any=[];
 constructor(private newsService:NewsService){
   
     
}


delete(data:any){
	this.newsService.delete(data)
	.subscribe(res=>{
		this.data=res
  
	})
  location.reload();
}

ngOnInit(){
          this.newsService.favour().subscribe((data)=>{
            this.data=data;

    
          });
        }
}
 