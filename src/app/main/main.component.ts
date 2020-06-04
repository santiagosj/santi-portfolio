import { Component, OnInit, HostListener, ElementRef  } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {ProjectService} from '../../services/project.service'
import {Project} from '../../models/project'
import {Work} from '../../models/work'
import { WorkService } from '../../services/work.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations:[
    trigger('fadeOutAnimation',[
      state('hide',style({
        opacity:0
      })),
      state('show',style({
        opacity:1
      })),
      transition('hide => show',animate('1s ease-in-out')),
      transition('show => hide',animate('1s ease-in-out'))
    ]),
  ]
})
export class MainComponent implements OnInit {

  constructor( private projectService:ProjectService,
               private workService:WorkService,
               public el:ElementRef) { }

  projects: Project[]
  works: Work[]
  state = 'show'
  date = new Date().getFullYear()

  ngOnInit() {
    this.getProjectsFromService()
    this.getWorksFromService()
  }

  @HostListener('window:scroll')

   scrollHandler():void{

    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset;

    if(scrollPosition > componentPosition){
           this.state = "hide"
    }else{
          this.state = "show"
    }
   }

   getProjectsFromService():void{
     this.projectService.getProjects().subscribe(project => this.projects = project)
   }

   getWorksFromService():void{
     this.workService.getWorks().subscribe(work => this.works = work)
   }



}
