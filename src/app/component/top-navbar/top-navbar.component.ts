import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {
   itemCount : number =0;
  constructor(private cartapi:CartapiService) { }

  ngOnInit(): void {
     this.cartapi.getAllBooks()
    .subscribe((res: string | any[])=>{
      this.itemCount = res.length;
    })
  }

}
