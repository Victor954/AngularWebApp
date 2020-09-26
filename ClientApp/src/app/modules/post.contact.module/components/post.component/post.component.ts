import { Component, Input } from '@angular/core';
import { PostModel } from './../../models/post.model';

@Component({
  selector: 'post-component',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent{

  @Input() postData: PostModel;

  constructor() { }
}