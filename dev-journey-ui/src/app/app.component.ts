import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   * Represents whether the application is in Dark or Light mode.
   * 
   * @type boolean
   */
  viewState!: boolean;

  /**
   * Updates viewState contained in the parent.
   * 
   * @param newState Dark/Light mode state emitted from the child (top-nav-component).
   */
  updateViewState(newState: boolean) {
    this.viewState = newState;
  }
}
