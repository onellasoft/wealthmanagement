import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-credit-card-details',
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
    DatePickerModule
  ],
  templateUrl: './credit-card-details.component.html',
  styleUrl: './credit-card-details.component.scss'
})
export class CreditCardDetailsComponent {
  currentStep: number = 1;

  clientDetails = {
    firstName: 'Rajesh',
    middleName: 'Kumar',
    lastName: 'Sharma',
    suffix: '',
    email: 'rajesh.sharma@gmail.com',
    dob: '15-08-1985',
    panNumber: 'ABCDE1234F',
    aadhaarNumber: '',
    annualIncome: '',
    employmentStatus: '',
    livingSituation: '',
    monthlyRent: '',
    phoneType: 'Mobile',
    countryCode: '+91',
    phoneNumber: '98765 43210',
    addressLine1: 'Flat 402, Sunshine Apartments',
    addressLine2: 'Andheri West',
    zipCode: '400053',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India'
  };

  suffixes = [
    { label: 'None', value: '' },
    { label: 'Jr.', value: 'Jr.' }
  ];

  employmentStatuses = [
    { label: 'Salaried', value: 'Salaried' },
    { label: 'Self-Employed', value: 'Self-Employed' },
    { label: 'Business Owner', value: 'Business Owner' },
    { label: 'Retired', value: 'Retired' }
  ];

  livingSituations = [
    { label: 'Owned', value: 'Owned' },
    { label: 'Rented', value: 'Rented' },
    { label: 'Parental', value: 'Parental' }
  ];

  countries = [
    { label: 'India (+91)', value: '+91' },
    { label: 'UAE (+971)', value: '+971' },
    { label: 'UK (+44)', value: '+44' }
  ];

  displayVerificationResults: boolean = false;
  isVerified: boolean = false;

  verificationStatus = {
    name: false,
    dob: false,
    pan: false,
    aadhaar: false,
    phone: true,
    address: false
  };

  isVerifying: boolean = false;

  // Validation Patterns
  private patterns = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    pan: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
    aadhaar: /^[0-9]{12}$/,
    zip: /^[0-9]{6}$/,
    phone: /^[0-9]{10}$/,
    numeric: /^[0-9]*$/
  };

  // Input Restriction Handlers
  onlyNumbers(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onlyAlphabets(event: any) {
    const pattern = /[a-zA-Z\s]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onlyAlphanumericUpper(event: any) {
    const pattern = /[a-zA-Z0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  formatPAN() {
    if (this.clientDetails.panNumber) {
      this.clientDetails.panNumber = this.clientDetails.panNumber.toUpperCase().substring(0, 10);
    }
  }

  formatAadhaar() {
    let val = this.clientDetails.aadhaarNumber.replace(/\D/g, '');
    if (val.length > 12) val = val.substring(0, 12);
    
    const parts = val.match(/.{1,4}/g);
    this.clientDetails.aadhaarNumber = parts ? parts.join('-') : val;
  }

  formatDate() {
    let val = this.clientDetails.dob.replace(/\D/g, '').substring(0, 8);
    let formatted = '';
    if (val.length > 0) {
      formatted += val.substring(0, 2);
      if (val.length > 2) {
        formatted += '-' + val.substring(2, 4);
        if (val.length > 4) {
          formatted += '-' + val.substring(4, 8);
        }
      }
    }
    this.clientDetails.dob = formatted;
  }

  formatPhone() {
    let val = this.clientDetails.phoneNumber.replace(/\D/g, '').substring(0, 10);
    if (val.length > 5) {
      this.clientDetails.phoneNumber = val.substring(0, 5) + ' ' + val.substring(5, 10);
    } else {
      this.clientDetails.phoneNumber = val;
    }
  }

  formatCurrency(field: 'annualIncome' | 'monthlyRent') {
    let val = this.clientDetails[field].replace(/\D/g, '');
    if (val) {
      this.clientDetails[field] = new Intl.NumberFormat('en-IN').format(parseInt(val));
    } else {
      this.clientDetails[field] = '';
    }
  }

  isFieldValid(field: keyof typeof this.clientDetails): boolean {
    const value = this.clientDetails[field];
    if (!value && ['firstName', 'lastName', 'email', 'dob', 'panNumber', 'aadhaarNumber', 'addressLine1', 'zipCode', 'phoneNumber'].includes(field)) {
      return false;
    }
    
    if (!value) return true; // Optional fields are valid if empty

    switch (field) {
      case 'email': return this.patterns.email.test(value);
      case 'panNumber': return this.patterns.pan.test(value);
      case 'aadhaarNumber': return this.patterns.aadhaar.test(value.replace(/\D/g, ''));
      case 'zipCode': return this.patterns.zip.test(value);
      case 'phoneNumber': return this.patterns.phone.test(value.replace(/\D/g, ''));
      case 'annualIncome':
      case 'monthlyRent':
        return this.patterns.numeric.test(value.toString().replace(/,/g, ''));
      default: return true;
    }
  }

  get isFormValid(): boolean {
    const requiredFields: (keyof typeof this.clientDetails)[] = [
      'firstName', 'lastName', 'email', 'dob', 'panNumber', 'aadhaarNumber', 
      'addressLine1', 'zipCode', 'phoneNumber'
    ];
    return requiredFields.every(field => this.isFieldValid(field));
  }

  save() {
    if (this.isFormValid) {
      console.log('Saving details...', this.clientDetails);
    }
  }

  verifyInformation() {
    if (!this.isFormValid) return;
    
    this.isVerifying = true;
    
    setTimeout(() => {
      this.isVerifying = false;
      this.isVerified = true;
      this.displayVerificationResults = true;
      
      this.verificationStatus.name = true;
      this.verificationStatus.dob = true;
      this.verificationStatus.pan = true;
      this.verificationStatus.aadhaar = Math.random() > 0.3;
      this.verificationStatus.address = true;
    }, 3500);
  }

  closeVerification() {
    this.displayVerificationResults = false;
  }
}
