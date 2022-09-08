import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {
    this.getCartItemsCount();
   }
  getAllBooks() {
    return this.productList.asObservable();
  }

  addBookToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);

    console.log(this.cartItemList)
    return this.http.post("https://bookcart.azurewebsites.net/api/shoppingcart/addToCart/1140/" + product.bookId, {})
  }
  deleteSingleCartItem(bookId: number) {
    return this.http.delete("https://bookcart.azurewebsites.net/api/shoppingcart/1140/" + bookId);
  }

  removeCartItems() {
    return this.http.delete("https://bookcart.azurewebsites.net/api/shoppingcart/1140/");
  }

  getCartItems() {
    return this.http.get("https://bookcart.azurewebsites.net/api/shoppingcart/1140/");
  }
  getCartItemsCount() {
    return this.http.get("https://bookcart.azurewebsites.net/api/user/1140");
  }
}
