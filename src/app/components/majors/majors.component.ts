import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-majors',
  templateUrl: './majors.component.html',
  styleUrls: ['./majors.component.scss'],
})


export class MajorsComponent implements OnInit {
  @Input() title;
  @Input() iconname;
  
  constructor() { }

  ngOnInit() {}

}
