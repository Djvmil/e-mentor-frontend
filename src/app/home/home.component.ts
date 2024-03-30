import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  title = "E-Mentor Frontend Page Home"
  nom = "E-Mentor Two Way Binding"
  disabledButton: Boolean = false

  ngOnInit(): void{

  }

  changeTitle(){
    this.title = "E-Mentor Frontend Page Home are changed"
  }
}
