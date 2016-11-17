@Component({
  selector:
  template: `
    <div class='ui items'>
        <product-row 
            *ngFor="let myProduct of productList"
            [product] = 'myProduct'
            (click)="clicked(myProduct)"
            [class.select]='isSelected(myProduct)'>
        </product-row>
    </div>
  `
})

class ProductList {
  productList: Product[]

  onProductSelected: EventEmitter<Product>

  currentProduct: ProductList

  constructor() {
    this.onProductSelected = new EventEmitter()
  }
}





// @Component({
//   selector: 'counter',
//   template: `
//   {{value}}
//   <button (click)='increase()'>Increase</button>
//   <button (click=)='decrease()'>Decrease</button>
//   `
// })
//
// class Counter {
//   value: number
//
//   constructor() {
//     this.value = 1
//   }
//
//   increase() {
//     this.value = this.value +1
//     return false
//   }
//   decrease() {
//     this.value = this.value -1
//     return false
//   }
//
// }
//


//
// @Component({
//   selector: 'inventory-app',
//   template:  `
//     <div class=' inventory-app'>
//       <h1>{{product.name}}</h1>
//       <span>{{product.sku}}</span>
//       </div>
//     `
// })
//
// class InventoryApp {
//   products: Product[]
//
//   constructor() {
//     this.products = [
//
//       new Product(
//         'MYSHOES',
//         'Black Running Shoes',
//         '/resources/images/products/black-shoes.jpg',
//         ['Men', 'Shoes', 'Running Shoes'],  109.99),
//
//         new Product(
//           'NEATOJACKET',
//           'Blue Jacket',
//           '/resources/images/products/blue-jacket.jpg',
//           ['Women', 'Apparel', 'Jackets & Vests'],  238.99),
//
//           new Product(
//             'NICEHAT',
//             'Nice Black Hat',
//             '/resources/images/products/black-hat.jpg',
//             ['Men', 'Accessories', 'Hats'],  29.99),
//
//     ]
//   }
// }
//
// productWasSelected(product: Product): void {
//   console.log('Product clicked: ', product)
// }
