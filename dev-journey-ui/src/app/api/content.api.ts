import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/operators';
import { PostObject } from '../models/post-object.model';


@Injectable()
export class ContentAPI {

  private postConfig: string = "assets/posts/post-config.json";

  constructor(
    private _http: HttpClient
  ) { 

  }

  /**
   * Get's all available posts as a stream of models.PostObject
   * 
   * @returns BehaviorSubject<PostObject[]>
   */
  getAllPosts(): Observable<PostObject[]> {

    return this._http.get<PostObject[]>(this.postConfig).pipe(take(1));
  }
}
