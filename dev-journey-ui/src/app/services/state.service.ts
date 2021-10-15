import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  darkModeSource$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }


}
