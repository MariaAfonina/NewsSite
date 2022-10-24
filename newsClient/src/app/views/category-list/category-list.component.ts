import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entities/category';
import { CategoryService } from 'src/app/services/category.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { MessageTypes } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = []
  date_only: string = "";

  constructor(private categoryService: CategoryService, private websocketService: WebsocketService) { }

  setDateNews(category_id: number, date_only: string) {
    var cat = this.categories.find(c => c.id == category_id)
    if (cat) {
      cat.date_only = date_only;
    }
  }
  
  ngOnInit(): void {
    this.websocketService.ws.onmessage = response => {
      var message = JSON.parse(response.data)
      if (message.type == MessageTypes.AllNewsLastDate){
        this.setDateNews(message.payload.category_id, message.payload.date_only)
      }
    };
    this.categoryService.getCategoryList().then(cat => {
      this.categories = cat;
      this.categoryService.getLatestDate().subscribe((vl: any[]) => {
        vl.forEach(val => {
          this.setDateNews(val.category_id, val.date_only);
        })
      })
    })
  }
}