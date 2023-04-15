import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/products.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  nums :any[];
  categoryList: Category;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getCategories().subscribe(data => {
      this.categoryList = data;
    });
     this.nums = [2,3,4,6,7,9,11,14];
     let target = 7;
     console.log("index : " +this.search(this.nums,target));
     console.log("index : " +this.binarySearch(this.nums,target));
  }
  search(num: any, target: any){
    for(var i=0;i<num.length;i++){
      if(num[i] == target){
        return i
      }
    }
    return -1;
  }
  binarySearch(num: any, target: any){
    var start =0;
    var end = num.length - 1;
    while (start <=end){
      var mid = start+ Math.floor((end-start)/2);
      console.log("mid " + mid);
      if(num[mid] > target){
        end = mid-1;
      }
      else if(num[mid] < target){
        start = mid+1;
      }
      else
        return mid;
    }
    return -1;
  }
}
