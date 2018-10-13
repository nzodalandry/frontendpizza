import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from './pizza';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  URL = "https://lpa2sgadot.herokuapp.com"

  constructor(private httpclient: HttpClient) { }
  public listPizzas(): Observable<Pizza[]>{
    return this.httpclient.get<Pizza[]>(this.URL + '/pizzas.json')
  }
  public showPizza(id:number): Observable<Pizza>{
    return this.httpclient.get<Pizza>(this.URL + '/pizzas/'+id+'.json')
  }
}
