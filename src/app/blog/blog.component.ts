import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{
  title = "E-Mentor Frontend Page Blog"
  blogList: Blog[];

  disabledButton: Boolean = false

  constructor(){
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
        //"datetime": new Date("17/11/2023")
      }
    ]

  }

  ngOnInit(): void{
  }

  changeTitle(){
    this.title = "E-Mentor Frontend Blog Page"
  }
}
