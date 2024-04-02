import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CommunityComponent } from './community/community.component';
import { InterviewComponent } from './interview/interview.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { DetailComponent } from './interview/detail/detail.component';

const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent },
  { path: "interview", component: InterviewComponent, data: { title: 'Interview List' } },
  { path: "blog", component: BlogComponent, data: { title: 'Blog List' } },
  { path: "community", component: CommunityComponent },
  { path: "update-blog/:id", component: UpdateBlogComponent },
  { path: "detail-interview", component: DetailComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
