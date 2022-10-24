import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  name = new FormControl('');

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) { }

  onSubmit() {
    this.categoryService.addCategory({name: this.name.value}).subscribe(news => alert ("All good!"));
  }

  ngOnInit(): void {
  }
}