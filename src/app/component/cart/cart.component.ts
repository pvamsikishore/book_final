import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 public  products :any= []
  constructor(private cartapi:CartapiService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getCartList();
  }
  getCartList(){
    this.cartapi.getCartItems()
    .subscribe((res:any)=>{
      this.products = res;
      console.log(this.products);
    });
  }
  removeItem(bookId:number){
    this.cartapi.deleteSingleCartItem(bookId)
    .subscribe((res: any)=>{
      console.log(res);
      this.getCartList();
    });
    this.toastr.success('Product removed from cart','close');
  }
  clearCartItems(){
    this.cartapi.removeCartItems()
    .subscribe((res: any)=>{
      console.log(res);
      this.getCartList();
    });
  }

}
