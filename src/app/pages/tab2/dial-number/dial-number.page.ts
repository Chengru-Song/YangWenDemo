import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-dial-number',
  templateUrl: './dial-number.page.html',
  styleUrls: ['./dial-number.page.scss'],
})
export class DialNumberPage implements OnInit {

  constructor(public router : Router,
    public location : Location) { }

  ngOnInit() {
  }

  getBack() {
    this.location.back();
  }
}
