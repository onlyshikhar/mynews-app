import { Component } from '@angular/core';
import { Http,Response} from '@angular/http';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})

export class FavouriteComponent {

data: any=[];
 constructor(private newsService:NewsService){
    // console.log('helloserch component');    
     
}


favour(){
          this.newsService.favour().subscribe((data)=>{
            //console.log(data);
            this.data=data;
    
          });
        }
delete(data:any){
	this.newsService.delete(data)
	.subscribe(res=>{
		this.data=res
	})
}
      }