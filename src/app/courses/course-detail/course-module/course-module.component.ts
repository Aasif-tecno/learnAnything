import { Component, Input, OnInit } from '@angular/core';
import { Modules } from 'src/app/shared/modules.model';

@Component({
  selector: 'app-course-module',
  templateUrl: './course-module.component.html',
  styleUrls: ['./course-module.component.scss'],
})
export class CourseModuleComponent implements OnInit {
  @Input() module!: Modules;
  @Input() name!: string;
  expand = false;

  constructor() {}

  ngOnInit(): void {}

  onExpand() {
    this.expand = !this.expand;
  }
}
