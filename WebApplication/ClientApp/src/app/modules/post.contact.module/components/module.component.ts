import { Component, OnInit} from '@angular/core';
import { PostModel } from './../models/post.model';
import { PostServices } from './../services/post.services';

@Component({
  selector: 'post-contact-main',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModulePostContactComponent implements OnInit {

  postDataCollection: PostModel[];

  constructor(private postServices: PostServices) { }

  ngOnInit(){
    this.postServices
    .getPostCollection()
    .subscribe((data: PostModel[]) => {
      this.postDataCollection = data;
    });

  }

}
