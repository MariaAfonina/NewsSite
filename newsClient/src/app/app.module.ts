import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './views/category-list/category-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryNewsComponent } from './views/category-news/category-news.component';
import { OneCategoryComponent } from './views/one-category/one-category.component';
import { AddCategoryComponent } from './views/add-category/add-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewsComponent } from './views/add-news/add-news.component';
import { CategoryService } from './services/category.service';
import { HotNewsComponent } from './views/hot-news/hot-news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryNewsComponent,
    OneCategoryComponent,
    AddCategoryComponent,
    AddNewsComponent,
    HotNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
