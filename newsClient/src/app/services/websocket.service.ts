import { Injectable } from '@angular/core';
import { filter, Observable, Subject } from 'rxjs';
import { Allnews } from '../entities/allnews';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public ws = new WebSocket('ws://localhost:3000');

  private messages$ = new Subject<Allnews>()

  constructor() {
    this.ws.onopen = () => console.log('ONLINE');
    this.ws.onclose = () => console.log('DISCONNECTED');
    this.ws.onmessage = (event) => {
      const allNews = ( JSON.parse(event.data) ).payload as Allnews
      console.log('allNews', allNews)
      this.messages$.next(allNews)
    }
  }

  public getAllnews(categoryId?:number): Observable<Allnews> {
    return categoryId ? this.messages$.pipe(
      filter(n => n.category_id == categoryId)
    ) : this.messages$
  }
}

export const MessageTypes = {
  AllNewsLastDate: 'News Last Value'
}