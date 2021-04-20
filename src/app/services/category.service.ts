import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResposeModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl="https://localhost:44366/api/Category/GetAll";
  constructor(private httpClient:HttpClient) { }

  getCategory():Observable<ListResponseModel<Category>>{
   return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
    
  }

}
