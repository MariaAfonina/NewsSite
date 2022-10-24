import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/entities/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  category: Category | undefined

  newsForm = new FormGroup ({
    news: new FormControl(''),
    date_only: new FormControl(''),
    status: new FormControl(true)
  })

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) { }

  onSubmit() {
    const routeParams = this.route.snapshot.paramMap;
    const categoryId = Number(routeParams.get('categoryId'));

    this.categoryService.addNews(categoryId, this.newsForm.value).subscribe(news => alert ("Adding news is successful!"));
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const categoryId = Number(routeParams.get('categoryId'));

    this.categoryService.getOneCategory(categoryId).then( cat => {
      this.category = cat
    });
  }
}
