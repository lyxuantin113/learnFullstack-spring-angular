import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule], // Thêm HttpClientModule vào imports
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'] // Sửa từ 'styleUrl' thành 'styleUrls'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productService.getProductList().subscribe(
      data => this.products = data // Cập nhật danh sách sản phẩm
    );
  }

}
