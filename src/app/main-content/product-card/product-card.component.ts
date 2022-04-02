import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, HostListener, HostBinding } from '@angular/core';
import { SelectionService } from 'src/app/selection.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit, DoCheck {
 
selectedCategory: string = '';
sortSelector: string = ''


products: Product[] = []

constructor(private productService: SelectionService){}
ngDoCheck(): void {
  this.selectedCategory = this.productService.selection;
   this.sortSelector = this.productService.sortSelection;

}
 
 ngOnInit() {
  this.products = this.productService.getProducts()
 }



}