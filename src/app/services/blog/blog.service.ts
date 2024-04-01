import { Injectable } from '@angular/core';
import { Blog } from '../../model/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogList: Blog[];

  constructor() {
      this.blogList = [
        {
          "blogID": 1,
          "userID": 1,
          "title": "Blog 1",
          "content":"Lorem Ipsum 1 Lorem Ipsum 1 Lorem Ipsum 1",
          //"datetime": new Date("17/11/2023"),
        },
        {
          "blogID": 2,
          "userID": 1,
          "title": "Blog 2",
          "content":"Lorem Ipsum 2 Lorem Ipsum 2 Lorem Ipsum 2",
          //"datetime": new Date("08/05/2023"),
        },
        {
          "blogID": 3,
          "userID": 1,
          "title": "Blog 3",
          "content":"Lorem Ipsum 3 Lorem Ipsum 3 Lorem Ipsum 3",
          //"datetime": new Date("17/05/2023"),
        },
        {
          "blogID": 4,
          "userID": 1,
          "title": "Blog 4",
          "content":"Lorem Ipsum 4 Lorem Ipsum 4 Lorem Ipsum 4",
          //"datetime": new Date("17/05/2023"),

        }
      ]

  }

  getBlogList(): Blog[]{
    return this.blogList
  }

  deleteBlog(blog: Blog){
    const index = this.blogList?.indexOf(blog, 0)

    if(index > -1){
      this.blogList.splice(index, 1)
    }
  }

  findBlog(id: number): Blog{
    return this.blogList.find(p => p.blogID == id)!;
  }

  addBlog(blog: Blog){
     this.blogList.push(blog)
  }
}
