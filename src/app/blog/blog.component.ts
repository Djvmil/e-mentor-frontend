import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/blog.model';
import { BlogService } from '../services/blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{
  title = "E-Mentor Frontend Page Blog"
  blogList?: Blog[];
  disabledButton: Boolean = false

  constructor(private blogService: BlogService){

  }

  ngOnInit(): void {
    this.blogList = this.blogService.getBlogList()
  }


  deleteBlog(blog: Blog): void{

    let conf = confirm("Etes vous sure?")
    if(conf)
      this.blogService.deleteBlog(blog)
  }

  addBlog(blog: Blog){
    this.blogService.addBlog(blog)
  }

  findBlog(id: number): Blog{

    return this.blogService.findBlog(id)
  }
  changeTitle(){
    this.title = "E-Mentor Frontend Blog Page"
  }
}
