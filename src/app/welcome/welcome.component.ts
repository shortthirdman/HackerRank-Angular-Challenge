import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
	
  title = 'HackerRank Angular Challenge';

  constructor() { }

  ngOnInit(): void {
  }

}
