import { PostObject } from './../../models/post-object.model';
import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-explore-main',
  templateUrl: './explore-main.component.html',
  styleUrls: ['./explore-main.component.scss']
})
export class ExploreMainComponent implements OnInit {

  ngUnsubscribe: Subject<undefined> = new Subject();
  allPosts: PostObject[] = [];

  constructor(
    private _contentService: ContentService
  ) { 

  }

  ngOnInit(): void {
    this._contentService._contentStream$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(posts => {
        this.allPosts = posts;
      });
  }

}
