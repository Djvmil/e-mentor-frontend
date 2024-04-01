import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../model/blog.model';
import { BlogService } from '../services/blog/blog.service';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrl: './update-blog.component.css'
})
export class UpdateBlogComponent {
  blogList?: Blog[];

    constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService){
    }

  ngOnInit(): void {
    this.blogList = this.blogService.getBlogList()
  }

  findBlog(id: number): Blog{

    return this.blogService.findBlog(id)
  }

}
