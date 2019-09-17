import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-majors',
  templateUrl: './majors.component.html',
  styleUrls: ['./majors.component.scss'],
})


export class MajorsComponent implements OnInit {
  @Input() title;
  @Input() imgUrl;
  @Input() name;
  
  constructor(public router: Router) { }

  ngOnInit() {}

  toMajor(name : string) {
    this.router.navigate(['/' + name])
  }
}
