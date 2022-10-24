import { Component, OnInit } from '@angular/core';
import { Allnews } from 'src/app/entities/allnews';
import { CategoryService } from 'src/app/services/category.service';
import { flyIn } from './hot-news.animation'

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.css'],
  animations: [flyIn]
})
export class HotNewsComponent implements OnInit {

  allHotNews: Allnews[] = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getHotNewsList().then(n => {
      this.allHotNews = n;
    })
  }
}