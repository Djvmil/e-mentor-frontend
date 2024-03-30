import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CommunityComponent } from './community/community.component';
import { BlogComponent } from './blog/blog.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "blog", component: BlogComponent },
  { path: "community", component: CommunityComponent },
  { path: "update-blog/:id", component: UpdateBlogComponent },
  { path: "", redirectTo: "blog", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
