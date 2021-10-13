import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  titleText: string = '<DevJourney/>';
  numReaders: number = 677;

  viewMode!: string;
  viewModeState: boolean = true;
  @Output() viewModeEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.setDarkModeState();
  }

  setDarkModeState(): void {

    // Emit the current state to the parent
    this.viewModeEvent.emit(this.viewModeState);

    // Update the view
    this.viewMode = this.viewModeState
      ? 'Light Mode'
      : 'Dark Mode';

    // Propagate to service
    
  }




}
