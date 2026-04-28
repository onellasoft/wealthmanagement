import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-application-summary',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    SelectModule,
    InputTextModule,
    DialogModule
  ],
  templateUrl: './application-summary.component.html',
  styleUrl: './application-summary.component.scss'
})
export class ApplicationSummaryComponent {
  constructor(private router: Router) {}

  sections = {
    accountDetails: false,
    personalDetails: false
  };

  displayConfirmDialog: boolean = false;

  mockData = {
    institution: 'American Express',
    creditCard: 'Credit Card',
    client: 'Rajesh Kumar Sharma',
    firstName: 'Rajesh',
    middleName: 'Kumar',
    lastName: 'Sharma',
    suffix: 'None',
    email: 'rajesh.sharma@gmail.com',
    dob: '15-08-1985',
    panNumber: 'ABCDE1234F',
    aadhaarNumber: '1234 5678 9012',
    annualIncome: '15,00,000',
    employmentStatus: 'Salaried',
    livingSituation: 'Owned',
    monthlyRent: '0',
    countryCode: '+91',
    phoneNumber: '98765 43210',
    addressLine1: 'Flat 402, Sunshine Apartments',
    addressLine2: 'Andheri West',
    zipCode: '400053',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India'
  };

  toggleSection(section: string) {
    if (section === 'accountDetails') this.sections.accountDetails = !this.sections.accountDetails;
    if (section === 'personalDetails') this.sections.personalDetails = !this.sections.personalDetails;
  }

  onSubmit() {
    this.displayConfirmDialog = true;
  }

  onConfirm() {
    this.displayConfirmDialog = false;
    this.router.navigate(['/advisor/new-account-creation/email-workflow']);
  }

  onCancel() {
    this.displayConfirmDialog = false;
  }
}
