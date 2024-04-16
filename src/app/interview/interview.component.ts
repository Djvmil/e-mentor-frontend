import { OnInit, Component } from '@angular/core';
import { Interview } from '../model/interview.model';
import { InterviewService } from '../services/interview/interview.service';
import { RestService } from '../services/api/rest.service';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrl: './interview.component.css'
})
export class InterviewComponent implements OnInit{
  interviews!: Interview[];
  interviewInput!: Interview;

  constructor(private service: InterviewService, private authService: AuthService){

  }

  ngOnInit(): void {
    this.service.getInterviewList().subscribe((result: Interview[]) => {
      console.log(result)
      this.interviews = result
    })

  }

  deleteInterview(interview: Interview){

  }

  updateInterview(interview: Interview){
    this.interviewInput = interview
  }

  searchInterview(text: string){
      console.log(text)
  }

  onKeyUp(textSearch: string){
    console.log(textSearch)

  }

  interviewUpdated(interviewEvent: Interview){
    console.log("interviewEvent", interviewEvent)
    this.service.updateInterview(interviewEvent).subscribe((result: Interview) => {
      console.log(result)
    })

  }

}
