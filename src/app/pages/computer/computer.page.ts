import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-computer',
  templateUrl: './computer.page.html',
  styleUrls: ['./computer.page.scss'],
})
export class ComputerPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  dialNumber() : any{
    this.router.navigate(['/dial-number'])
  }
}
