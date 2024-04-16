import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommunityComponent } from './community/community.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InterviewComponent } from './interview/interview.component';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { DetailComponent } from './interview/detail/detail.component';
import { InterceptorService } from './services/api/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommunityComponent,
    BlogComponent,
    LoginComponent,
    RegisterComponent,
    UpdateBlogComponent,
    NavbarComponent,
    InterviewComponent,
    SearchFilterPipe,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
