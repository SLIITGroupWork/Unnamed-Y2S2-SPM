import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-ssignup',
  templateUrl: './ssignup.component.html',
  styleUrls: ['./ssignup.component.css']
})
export class SSignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  navigate5() {
    this.router.navigate([""]);
}
navigate4() {
  this.router.navigate(["signup"]);
}
}