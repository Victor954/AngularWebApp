import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';

import { PostComponent } from './components/post.component/post.component';

import { ModulePostContactComponent } from './components/module.component';

import { PostServices } from './services/post.services';

@NgModule({
  declarations: [
    ModulePostContactComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [PostServices],
  exports: [ModulePostContactComponent]
})
export class PostContactModule { }