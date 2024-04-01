import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../model/blog.model';
import { BlogService } from '../services/blog/blog.service';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrl: './update-blog.component.css'
})
export class UpdateBlogComponent {
  blogList?: Blog[];

    constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute, private router: Router){
    }

  ngOnInit(): void {
    this.blogList = this.blogService.getBlogList()
  }

  findBlog(id: number): Blog{

     //this.router.navigate(["blog"])
    return this.blogService.findBlog(id)
  }

}
