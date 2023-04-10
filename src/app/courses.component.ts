import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
   <div class="container">
    <ul class="list-group">
        <li class="list-group-item list-group-item-action list-group-item-primary"> Title: {{ course.titre | lowercase | uppercase}}</li>
        <li class="list-group-item list-group-item-action list-group-item-primary"> Ratting: {{ course.avis | number:'1.1-1'}}</li>
        <li class="list-group-item list-group-item-action list-group-item-primary"> Students: {{ course.participants}}</li>
        <li class="list-group-item list-group-item-action list-group-item-primary"> Price: {{ course.prix | currency:'CAD':'symbol':'3.1-1'}}</li>
        <li class="list-group-item list-group-item-action list-group-item-primary"> releaseDate: {{ course.publicationDate | date:'yyyy-m-dd' }}</li>
    </ul>
   </div>

    `
})


export class CoursesComponent {


    course = {
        titre: 'Formation Complète Sur Angular',
        avis: '4.9762',
        participants: 136,
        prix: 950.38,
        publicationDate: new Date(2023, 4, 9)
    }
}