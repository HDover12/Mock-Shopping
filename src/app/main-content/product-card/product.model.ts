export class Product {
  public image: string;
  public color: string;
  public category: string;
  public price: number;
  public productId: number;
  public description: string;

  constructor(
    image: string,
    color: string,
    category: string,
    price: number,
    productID: number,
    description: string
  ) {
    this.image = image;
    this.color = color;
    this.category = category;
    this.color = color;
    this.price = price;
    this.productId = productID;
    this.description = description;

  }

  
}
