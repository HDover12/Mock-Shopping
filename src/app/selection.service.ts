import { Product } from "./main-content/product-card/product.model";
export class SelectionService {
  getProducts() {
    return this.products.slice();
  }
  selection: string = 'SelectAll';
  selectionChange(status: string) {
    this.selection = status;
    console.log(this.selection);
  }
  sortSelection: string = 'hightToLow';
  sortChange(status: string) {
    this.sortSelection = status;
    console.log(this.sortSelection);
  }

  products: Product[] = [
    new Product(
      'assets/pictures/Product0.jpg',
      'tan',
      'Jackets',
      70,
      1,
      'Tan wool coat'
    ),
    new Product(
      'assets/pictures/Product1.jpg',
      'blue',
      'Dresses',
      50,
      2,
      'Blue flowy dress'
    ),
    new Product(
      'assets/pictures/Product2.jpg',
      'tan',
      'Dresses',
      40,
      3,
      'Striped tan dress'
    ),
    new Product(
      'assets/pictures/Product3.jpg',
      'orange',
      'Dresses',
      60,
      4,
      'Burnt orange dress'
    ),
    new Product(
      'assets/pictures/Product4.jpg',
      'orange',
      'Bottoms',
      25,
      5,
      'Orange skirt'
    ),
    new Product(
      'assets/pictures/Product5.jpg',
      'white',
      'Bottoms',
      45,
      6,
      'White and gray flowy skirt'
    ),
    new Product(
      'assets/pictures/Product6.jpg',
      'red',
      'Dresses',
      37,
      7,
      'Pink 2-piece'
    ),
    new Product(
      'assets/pictures/Product7.jpg',
      'black',
      'Dresses',
      38,
      8,
      'Black casual dress'
    ),
    new Product(
      'assets/pictures/Product8.jpg',
      'black',
      'Jackets',
      35,
      9,
      'Black suit jacket'
    ),
    new Product(
      'assets/pictures/Product9.jpg',
      'red',
      'Jackets',
      45,
      10,
      'Red jacket'
    ),
    new Product(
      'assets/pictures/Product10.jpg',
      'white',
      'Tops',
      20,
      11,
      'White and Rainbow Top'
    ),
    new Product(
      'assets/pictures/Product11.jpg',
      'black',
      'Tops',
      23,
      12,
      'Black paisley blouse'
    ),
  ];
}

