import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './views/add-category/add-category.component';
import { AddNewsComponent } from './views/add-news/add-news.component';
import { CategoryNewsComponent } from './views/category-news/category-news.component';
import { HotNewsComponent } from './views/hot-news/hot-news.component';
import { OneCategoryComponent } from './views/one-category/one-category.component';

const routes: Routes = [
  { path: 'categories/create', component: AddCategoryComponent},
  { path: 'allnews/active', component: HotNewsComponent},
  { path: 'categories/:categoryId', component: OneCategoryComponent},
  { path: 'categories/:categoryId/allnews', component: CategoryNewsComponent},
  { path: 'categories/:categoryId/addNews', component: AddNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }