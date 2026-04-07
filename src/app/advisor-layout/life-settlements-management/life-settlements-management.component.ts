import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LIFE_SETTLEMENTS_DATA, LifeSettlement } from '../../data/deposit-accounts.data';

@Component({
  selector: 'app-life-settlements-management',
  standalone: false,
  templateUrl: './life-settlements-management.component.html',
  styleUrl: './life-settlements-management.component.scss'
})
export class LifeSettlementsManagementComponent implements OnInit {
  settlementsData: LifeSettlement[] = LIFE_SETTLEMENTS_DATA;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goBack(): void {
    this.router.navigate(['/advisor/dashboard']);
  }
}
