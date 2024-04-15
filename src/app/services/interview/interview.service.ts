import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Interview } from '../../model/interview.model';
import { RestService } from '../api/rest.service';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  apiUrl: string = "http://51.75.27.211:8989/em/api"

  constructor(private restService: RestService) {

  }

  getInterviewList(token: string): Observable<Interview[]>{
    return this.restService.getInterviewList(token)
  }

  updateInterview(interview: Interview): Observable<Interview>{
    return this.restService.updateInterview(interview)
  }

  /*deleteInterview(interview: Interview){
    const index = this.blogList?.indexOf(blog, 0)

    if(index > -1){
      this.blogList.splice(index, 1)
    }
  }

  findInterview(id: number): Interview{
    return this.blogList.find(p => p.blogID == id)!;
  }

  addInterview(interview: Interview){
     this.blogList.push(blog)
  }*/

}
