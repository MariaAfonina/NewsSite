import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../entities/category';
import { Allnews } from '../entities/allnews'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private http: HttpClient) { }

  public getCategoryList(): Promise<Category[]> {
    return fetch('http://localhost:8085/categories').then(response => {
      return response.json().then(categories => {
        return categories
      })
    })
  }

  public getOneCategory(id:number): Promise<Category> {
    return fetch('http://localhost:8085/categories/'+id).then(response => {
      return response.json().then(category => {
        return category
      })
    })
  }

  public addCategory(body: any): Observable<Category> {
    return this.http.post<Category>('http://localhost:8085/categories/create', body)
  }

  public deleteCategory(id:any): Observable<any> {
      return this.http.delete(`http://localhost:8085/categories/${id}/delete`)
  }

  public getCategoryNews(id:number): Promise<Allnews[]> {
    return fetch(`http://localhost:8085/categories/${id}/allnews`).then(response => {
      return response.json().then(allNews => {
        return allNews
      })
    })
  }

  public addNews(id: number, body: any): Observable<Allnews> {
    return this.http.post<Allnews>(`http://localhost:8085/categories/${id}/addNews`, body)
  }

  public getLatestDate(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8085/allnews/latest')
  }

  public deleteNews(id:any): Observable<any> {
    return this.http.delete(`http://localhost:8085/categories/${id}/allnews/delete`)
  }

  public getHotNewsList(): Promise<Allnews[]> {
    return fetch('http://localhost:8085/allnews/active').then(response => {
      return response.json().then(allnews => {
        return allnews
      })
    })
  }
}