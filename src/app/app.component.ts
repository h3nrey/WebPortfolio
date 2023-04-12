import { Component } from '@angular/core';
import { projects } from "../app/data"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  projects = projects;
}
