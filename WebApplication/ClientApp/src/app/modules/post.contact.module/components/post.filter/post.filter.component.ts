import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'post-filter-component',
  templateUrl: './post.filter.component.html',
  styleUrls: ['./post.filter.component.scss']
})
export class PostFilterComponent{

    value:string = "";

    constructor() { }
}