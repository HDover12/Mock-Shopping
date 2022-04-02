import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SortComponent } from './sort/sort.component';
import { ProductCardComponent } from './main-content/product-card/product-card.component';
import { FilterPipe } from './main-content/product-card/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ProductCardDirective } from './main-content/product-card/product-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    MainContentComponent,
    SortComponent,
    ProductCardComponent,
    FilterPipe,
    ProductCardDirective,
   
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
