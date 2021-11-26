import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-design-patterns',
  templateUrl: './design-patterns.component.html',
  styleUrls: ['./design-patterns.component.scss']
})
export class DesignPatternsComponent implements OnInit {

  contents!: any[];
  contentHeaders!: string[];

  constructor() { }

  ngOnInit(): void {
    this.contentHeaders = [
      'Primitive Obsession Antipattern',
      'Composite Pattern',
      'Strategy Pattern',
      'Decorator Pattern',
      'Observer Pattern'
    ]

    this.contents = this.createObject(this.contentHeaders);
  }

  createObject(names: string[]): any[] {
    return names.map(name => {
      return {
        objName: name,
        objPath: "path"
      }
    })
  }

}
