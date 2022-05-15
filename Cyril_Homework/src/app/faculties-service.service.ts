import { Injectable } from '@angular/core';
import data from './faculties-list.json';
import { Faculty } from './Faculty';

@Injectable({
  providedIn: 'root'
})
export class FacultiesServiceService {
  faculties: any = data;
  constructor() { }
   getAll() : Faculty[]{
     return this.faculties;
   }
}
