import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-design-patterns',
  templateUrl: './design-patterns.component.html',
  styleUrls: ['./design-patterns.component.scss']
})
export class DesignPatternsComponent implements OnInit {

  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }

}
