import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';

import { PostComponent } from './components/post.component/post.component';
import { ModulePostContactComponent } from './components/module.component';
import { PostFilterComponent } from './components/post.filter/post.filter.component';
import { PostPaginationComponent } from './components/post.pagination/post.pagination.component';

import { PostServices } from './services/post.services';
import { CoreMaterialModule } from './core/core.materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ModulePostContactComponent,
    PostComponent,
    PostFilterComponent,
    PostPaginationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreMaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [PostServices],
  exports: [ModulePostContactComponent]
})
export class PostContactModule { }