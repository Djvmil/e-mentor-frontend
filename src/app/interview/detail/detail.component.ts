import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Interview } from '../../model/interview.model';
import { InterviewService } from '../../services/interview/interview.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  @Input()
  interview?: Interview;

  @Input()
  data?: string;

  @Output()
  interviewUpdated = new EventEmitter<Interview>();

  constructor(private service: InterviewService){

  }

  ngOnInit(): void {

  }

  updateInterview(interview?: Interview){
      this.interviewUpdated.emit(interview)
  }
}
