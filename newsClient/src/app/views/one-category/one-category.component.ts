import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/entities/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-one-category',
  templateUrl: './one-category.component.html',
  styleUrls: ['./one-category.component.css']
})
export class OneCategoryComponent implements OnInit {

  category: Category | undefined

  constructor(private route: ActivatedRoute, private categoryService:CategoryService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const categoryId = Number(routeParams.get('categoryId'));

    this.categoryService.getOneCategory(categoryId).then( cat => {
      this.category = cat
    });
  }

  onDelete(id:any): void {
    this.categoryService.deleteCategory(id).subscribe( del => {alert ("All good!")})
  }
}
