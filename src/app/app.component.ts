import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ThemeService} from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title:string = 'Santi'
  langs: string[] = [];


  isThemeDark = JSON.parse(localStorage.getItem('checked')) === true //lee este valor en la vista ( app.comp..html)
  themeInStorage:string = localStorage.getItem('theme')
  defaultTheme = 'light'

  constructor(private translateService:TranslateService,private _themeService: ThemeService){
      this.translateService.setDefaultLang('español');
      this.translateService.use('español');
      this.translateService.addLangs(['español', 'english']);
      this.langs = this.translateService.getLangs();
 }

  changeLang(lang: string){
     this.translateService.use(lang);
  }

  toggleTheme() {

        if (this.defaultTheme === 'light' && this.themeInStorage === null) {

              this.defaultTheme = 'dark' ;
              this._themeService.setActiveTheme('dark','true');
              this.themeInStorage = 'dark';

        } else if(this.defaultTheme === 'light' && this.themeInStorage === 'light'){

              this.defaultTheme = 'dark' ;
              this._themeService.setActiveTheme('dark','true');
              this.themeInStorage = 'dark';

        } else {

              this._themeService.setActiveTheme('light','false');
              this.defaultTheme = 'light'
              this.themeInStorage = 'light'
        }
  }
}
