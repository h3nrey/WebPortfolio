import { Component, Input} from '@angular/core';
import { skills } from '../data';

@Component({
  selector: 'app-skill-container',
  templateUrl: './skill-container.component.html',
  styleUrls: ['./skill-container.component.css']
})

export class SkillContainerComponent {
  @Input() name!: "frontend" | "backend" | "other";
  skills: any[];

  constructor(){
    this.skills = [];
  }

  ngOnChanges() {
    this.loadSkills();
  }

  private loadSkills(){
    this.skills = skills[`${this.name}`] || [];

  }
}
