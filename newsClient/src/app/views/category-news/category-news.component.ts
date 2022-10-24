import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Allnews } from 'src/app/entities/allnews';
import { Category } from 'src/app/entities/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-news',
  templateUrl: './category-news.component.html',
  styleUrls: ['./category-news.component.css']
})
export class CategoryNewsComponent implements OnInit {
  
  allNews: Allnews[] | undefined;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const categoryId = Number(routeParams.get('categoryId'));

    this.categoryService.getCategoryNews(categoryId).then(news => {
      this.allNews = news
    })
  }
  onDelete(id:any): void {
    this.categoryService.deleteNews(id).subscribe( delet => {alert ("All good!")})
  }
}

