import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Project} from '../models/project' //modelo
import { PROJECTS} from '../models/data' //data

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  constructor() { }

  getProjects():Observable<Project[]>{
    return of(PROJECTS)
  }

}
