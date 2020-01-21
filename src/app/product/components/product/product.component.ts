import {
        Component ,
        Input ,
        Output ,
        EventEmitter ,
        OnChanges ,
        SimpleChanges ,
        OnInit ,
        DoCheck ,
        OnDestroy } from '@angular/core';
import {Product} from '@core/models/product.model';

import {CartService} from '@core/services/cart/cart.service';

@Component({
   selector: 'app-product',
   templateUrl: './product.component.html' ,
   styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(
        private cartService: CartService
    ) { }


    ngOnInit() {
    }
    /*
    ngDoCheck() {
     console.log('4.ngDoCheck');
    }

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnDestroy() {
        console.log('5.ngOnDestroy');
    }*/

    addCart() {
        console.log('Añadir al carrito');
        this.cartService.addCart(this.product);

    }
}
