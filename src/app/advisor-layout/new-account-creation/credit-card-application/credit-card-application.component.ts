import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-credit-card-application',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SelectModule,
    ButtonModule,
    InputTextModule,
    TooltipModule,
    DialogModule,
    TableModule,
    RadioButtonModule,
    PaginatorModule
  ],
  templateUrl: './credit-card-application.component.html',
  styleUrl: './credit-card-application.component.scss'
})
export class CreditCardApplicationComponent {
  selectedInstitution: any;
  selectedCard: any;
  clientName: string = '';

  displayClientSearch: boolean = false;
  displayAddClient: boolean = false;
  displayConfirmation: boolean = false;
  selectedClient: any = null;

  // New Client Form Model
  newClient = {
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    email: '',
    dob: '',
    idNumber: '', // This is for PAN
    aadhaarNumber: '',
    idType: 'PAN', // Default to PAN for Indian context
    phoneType: 'Mobile',
    countryCode: '+91',
    phoneNumber: ''
  };

  titles = [
    { label: 'Mr.', value: 'Mr.' },
    { label: 'Mrs.', value: 'Mrs.' },
    { label: 'Ms.', value: 'Ms.' },
    { label: 'Dr.', value: 'Dr.' }
  ];

  suffixes = [
    { label: 'Sr.', value: 'Sr.' },
    { label: 'Jr.', value: 'Jr.' },
    { label: 'III', value: 'III' }
  ];

  countries = [
    { label: 'India (+91)', value: '+91' },
    { label: 'USA (+1)', value: '+1' },
    { label: 'UK (+44)', value: '+44' }
  ];

  clients = [
    { name: 'Rajesh Kumar', type: 'My Client', email: 'rajesh.kumar@gmail.com', phone: '+91 98765 43210' },
    { name: 'Priya Sharma', type: 'My Client', email: 'priya.sharma@outlook.in', phone: '+91 87654 32109' },
    { name: 'Amit Patel', type: 'My Client', email: 'amit.patel@yahoo.com', phone: '+91 76543 21098' },
    { name: 'Sneha Reddy', type: 'CRM Client', email: 'sneha.reddy@gmail.com', phone: '--' },
    { name: 'Vikram Singh', type: 'My Client', email: 'vikram.singh@protonmail.com', phone: '+91 65432 10987' },
    { name: 'Meena Kumari', type: 'My Client', email: 'meena.k@gmail.com', phone: '+91 54321 09876' },
    { name: 'Sanjay Gupta', type: 'My Client', email: 'sanjay.g@outlook.com', phone: '+91 43210 98765' },
    { name: 'Kavita Iyer', type: 'CRM Client', email: 'kavita.iyer@gmail.com', phone: '--' }
  ];

  clientOptions = this.clients.map(c => ({ label: c.name, value: c.name }));

  institutions = [
    { label: 'HDFC Bank', value: 'HDFC' },
    { label: 'ICICI Bank', value: 'ICICI' },
    { label: 'SBI Card', value: 'SBI' },
    { label: 'Axis Bank', value: 'Axis' },
    { label: 'American Express India', value: 'AMEX' }
  ];

  cards = [
    { label: 'Infinia Credit Card', value: 'INFINIA' },
    { label: 'Regalia Gold', value: 'REGALIA' },
    { label: 'Amazon Pay ICICI', value: 'AMAZON_PAY' },
    { label: 'SBI Card ELITE', value: 'SBI_ELITE' }
  ];

  constructor(private router: Router) {}

  goBack() {
    window.history.back();
  }

  openClientSearch() {
    this.displayClientSearch = true;
  }

  openAddClient() {
    this.displayAddClient = true;
  }

  selectClient() {
    if (this.selectedClient) {
      this.clientName = this.selectedClient.name;
      this.displayClientSearch = false;
    }
  }

  verifyAndCreate() {
    // Add logic to save new client and then select them
    console.log('Verifying and creating client:', this.newClient);
    this.clientName = `${this.newClient.firstName} ${this.newClient.lastName}`;
    this.displayAddClient = false;
    this.displayClientSearch = false;
  }

  saveAndNext() {
    this.displayConfirmation = true;
  }

  confirmProceed() {
    this.displayConfirmation = false;
    this.router.navigate(['/advisor/new-account-creation/credit-card-details']);
  }

  cancelProceed() {
    this.displayConfirmation = false;
  }
}
