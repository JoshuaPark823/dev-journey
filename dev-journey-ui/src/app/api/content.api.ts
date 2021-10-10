import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { PostObject } from '../models/post-object.model';

@Injectable()
export class ContentAPI {

  // RG: lmao change once we add the back, no time for now
  private tempTitles: string[] = [
    'test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7'
  ];

  constructor() { 

  }

  /**
   * Get's all available posts as a stream of models.PostObject
   * 
   * @returns BehaviorSubject<PostObject[]>
   */
  getAllPosts(): Observable<PostObject[]> {

    let test: PostObject[] = [];

    for (const title of this.tempTitles) {

      let filePath = `./assets/posts/${title}.post/${title}.md`;

      let desc = 'This is a sample description. In production we will use a short description of the post.';
      
      let localObj: PostObject = new PostObject(title, filePath, desc);

      test.push(localObj);
    }

    return new BehaviorSubject<PostObject[]>(test).asObservable();
  }
}
