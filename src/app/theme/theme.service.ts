import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {

  private activeTheme = new BehaviorSubject('light');

  constructor() { }

  public getActiveTheme() {
      let value = localStorage.getItem('theme')
      this.activeTheme.next(value)
    return this.activeTheme.asObservable();
  }

  public setActiveTheme(name, isDarkTheme:string) {
    localStorage.setItem('theme', name)
    localStorage.setItem('checked',isDarkTheme)
    this.activeTheme.next(name);
  }

}
