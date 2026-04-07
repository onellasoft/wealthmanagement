import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADVISOR_FINANCING_DATA, AdvisorFinancing } from '../../data/deposit-accounts.data';

@Component({
  selector: 'app-advisor-financing-hub',
  standalone: false,
  templateUrl: './advisor-financing-hub.component.html',
  styleUrl: './advisor-financing-hub.component.scss'
})
export class AdvisorFinancingHubComponent implements OnInit {
  financingData: AdvisorFinancing[] = ADVISOR_FINANCING_DATA;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goBack(): void {
    this.router.navigate(['/advisor/dashboard']);
  }
}
