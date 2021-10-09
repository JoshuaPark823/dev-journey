import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ContentAPI } from '../api/content.api';
import { PostObject } from '../models/post-object.model';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  /**
   * stream for site content
   */
  public _contentStream$: Observable<PostObject[]>;

  constructor(
    private _contentAPI: ContentAPI
  ) { 
    this._contentStream$ = this._contentAPI.getAllPosts();
  }


}
