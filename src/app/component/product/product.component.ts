import { Component, OnInit } from '@angular/core';
import { BookapiService } from 'src/app/services/bookapi.service';
import{CartapiService}  from 'src/app/services/cartapi.service';
import{ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public productList:any;
 
  
  constructor(private bookapi:BookapiService,private cartapi:CartapiService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.bookapi.getAllBooks()
    .subscribe(res=>{
      this.productList=res;
      this.productList.forEach((a:any ) => {
        Object.assign(a,{quantity:1,total:a.price});
    });
  })
  }
  addtocart(item: any){
    this.cartapi.addBookToCart(item)
    .subscribe((res: any)=>{
      console.log(res);
    });
    this.toastr.success('one item added to cart','close');
  }
  }


