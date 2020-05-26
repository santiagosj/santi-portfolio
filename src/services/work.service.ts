import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Work} from '../models/work'
import {WORKS} from '../models/data'

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor() { }

  getWorks():Observable<Work[]>{
    return of(WORKS)
  }

}
