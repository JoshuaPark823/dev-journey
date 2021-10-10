import { PostObject } from './../../models/post-object.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.scss']
})
export class PostTileComponent implements OnInit {

  @Input() postRef!: PostObject;

  constructor() { }

  ngOnInit(): void {
    
  }

}
