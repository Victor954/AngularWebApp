import { NgModule } from '@angular/core';

import { PostContactModule } from './../../modules/post.contact.module/post.contact.module';
import { HomePageComponent } from './home.page.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    PostContactModule,
    HomeRoutingModule
  ]
})
export class  HomePageModule{ }