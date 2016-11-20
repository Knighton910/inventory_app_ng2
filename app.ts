/*
*@ProductDepartment: A component to show the breadcrumbs to
*Product department
*/

@Component({
    selector: 'product-department',
    inputs: ['product'],
    template: `
        <div class="product-department">
            <span *ngFor="let name of product.department; let i =index">
                <a href="#">{{name}}</a>
            </span>
            
        </div>
    `
})

class ProductDepartment {
    product: Product
}


/*
* @PriceDisplay: A component to show the price of a product
*/

@Component({
    selector: 'price-display',
    inputs: ['price'],
    template: ` 
        <div class="price-display"> \${{ price }} </div> 
`
})

class PriceDisplay {
    price: number
}



/*
*  @ProductRow: A component for the view of single Product
*/

@Componet({
  selector: 'product-row',
  inputs: ['product'],
  host: ['class': 'item'],
  template: `
    <product-image [product]="product"></product-image>
    
    <div class="content">
        <div class="header">{{product.name}}</div>
        <div class="meta">
            <div class="product-sku">SKU #{{product.sku}}</div>
        </div>
        <div class="description">
            <product-department [product]="product"></product-department>
        </div>
    </div>
    <price-display [price]="product.price"></price-display>
    
  `
})

class ProductRow {
  product: Product
}


/*
*@ProductImage: A component to show a single Product's image
*/

@Component({
    selector: 'product-image',
    host: {class: 'ui small image'},
    inputs: ['product'],
    template: `
        <img class='product-image' [src]='product.imageUrl'>
    `
})

class ProductImage {
    product: Product
}







// //@ProductsList: A component for rendering all ProductRows
// // and storing the currently selected product
//
// @Component({
//   selector: 'products-list',
//   inputs: ['productList'],
//   outputs: ['onProductSelected'],
//   template: `
//     <div class="ui items">
//         <product-row
//             *ngFor="let myProduct of productList"
//             [product]="myProduct"
//             (click)='clicked(myProduct)'
//             [class.selected]="isSelected(myProduct)">
//         </product-row>
//     </div>
//   `
// })
//
// class ProductsList {
//   productList: Product[]
//
//   onProductSelected: EventEmitter<Product>
//
//   currentProduct: Product
//
//   constructor() {
//     this.onProductSelected = new EventEmitter()
//   }
//
//   clicked(product: Product): void {
//     this.currentProduct = product
//     this.onProductSelected.emit(product)
//   }
//
//   isSelected(product: Product): boolean {
//     if (!product || !this.currentProduct) {
//       return false
//     }
//     return product.sku === this.currentProduct.sku
//   }
//
// }
//
