import { Input, Component } from '@angular/core';
import { Project } from '../data';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  @Input() project!: Project
}
