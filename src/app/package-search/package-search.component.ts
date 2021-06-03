import { Component, OnInit } from '@angular/core';
import { HackerRankService } from '@hacker-rank/shared/services/hacker-rank.service';
import { MessageService } from 'primeng/api';


@Component({
  templateUrl: './package-search.component.html',
  styleUrls: ['./package-search.component.scss']
})
export class PackageSearchComponent implements OnInit {
	
  totalAngularPackages: number = 0;

  constructor(private hrService: HackerRankService, private messageService: MessageService) {}

  ngOnInit(): void {
	this.hrService.getPackages('').subscribe(data => {
        this.totalAngularPackages = data.total;
    });
  }

}
