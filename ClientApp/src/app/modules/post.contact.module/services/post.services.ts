import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PostModel } from './../models/post.model';

@Injectable()
export class PostServices{

    constructor(private http : HttpClient){ }

    public getPostCollection(){
        const pathPostData = '/Home/GetDataPost';

        return this.http.get<PostModel[]>(pathPostData);
    }
}