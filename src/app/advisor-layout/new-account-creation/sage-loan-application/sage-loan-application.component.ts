import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PaginatorModule } from 'primeng/paginator';
import { DatePickerModule } from 'primeng/datepicker';
import { EditorModule } from 'primeng/editor';

@Component({
  selector: 'app-sage-loan-application',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule, 
    InputTextModule, 
    ButtonModule, 
    SelectModule,
    DialogModule,
    TableModule,
    RadioButtonModule,
    PaginatorModule,
    DatePickerModule,
    EditorModule
  ],
  templateUrl: './sage-loan-application.component.html',
  styleUrl: './sage-loan-application.component.scss'
})
export class SageLoanApplicationComponent {
  currentStep: number = 1;
  displayConfirmation: boolean = false;
  displayClientSearch: boolean = false;
  displayAddClient: boolean = false;
  
  clientName: string = '';
  selectedClient: any = null;

  isVerified: boolean = false;
  isVerifying: boolean = false;
  displayVerificationResults: boolean = false;
  displaySubmitConfirm: boolean = false;
  displayMailSuccess: boolean = false;

  sections = {
    accountType: true,
    personalDetails: false
  };

  clientDetails = {
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    email: '',
    dob: '',
    panNumber: '',
    aadhaarNumber: '',
    drivingLicense: '',
    passport: '',
    phoneType: 'Mobile',
    countryCode: '+91',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    zipCode: '',
    city: '',
    state: '',
    country: 'India'
  };

  verificationStatus = {
    name: false,
    dob: false,
    pan: false,
    aadhaar: false,
    phone: true,
    address: false
  };

  private patterns = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    pan: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
    aadhaar: /^[0-9]{12}$/,
    zip: /^[0-9]{6}$/,
    phone: /^[0-9]{10}$/,
    numeric: /^[0-9]*$/
  };

  formData: any = {
    institution: null,
    mortgage: null,
    zipCode: '',
    homeLoanType: 'purchase',
    loanTerm: null
  };

  termsOptions = [
    { label: '30 Year Fixed', value: '30_fixed' },
    { label: '20 Year Fixed', value: '20_fixed' },
    { label: '15 Year Fixed', value: '15_fixed' },
    { label: '10 Year Fixed', value: '10_fixed' }
  ];

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
    idType: 'PAN',
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

  institutions = [
    { label: 'State Bank of India', value: 'sbi' },
    { label: 'HDFC Bank', value: 'hdfc' },
    { label: 'ICICI Bank', value: 'icici' },
    { label: 'Axis Bank', value: 'axis' },
    { label: 'Kotak Mahindra Bank', value: 'kotak' }
  ];

  emailData = {
    sendTo: 'fadam111@yopmail.com',
    subject: 'Action Required: Complete Your Home Loan Setup',
    message: `<p>Dear Frankil Adam III,</p>
              <p>I hope you are doing well.</p>
              <p>Thank you for your continued trust in <strong>18Forty8 Private Wealth</strong>.</p>
              <p>I wanted to inform you that I have initiated the Home Loan process on your behalf. To complete the process, please log in to the application by clicking the link below and follow the necessary steps to finalize your account setup.</p>
              <p>If you have any questions or need assistance, feel free to reach out to me at (830) 250-8166 or adnan.communication@yopmail.com.</p>`
  };

  mortgages = [
    { label: 'Fixed Rate Mortgage', value: 'fixed' },
    { label: 'Adjustable Rate Mortgage', value: 'adjustable' },
    { label: 'FHA Loan', value: 'fha' },
    { label: 'VA Loan', value: 'va' }
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

  constructor(private router: Router) {}

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
    this.clientName = `${this.newClient.firstName} ${this.newClient.lastName}`;
    this.displayAddClient = false;
    this.displayClientSearch = false;
  }

  saveAndNext() {
    this.displayConfirmation = true;
  }

  confirmProceed() {
    this.displayConfirmation = false;
    if (this.currentStep < 2) {
      this.currentStep++;
    } else {
      this.router.navigate(['/advisor/new-account-creation/advisor-financing/financing-email-workflow']);
    }
  }

  cancelProceed() {
    this.displayConfirmation = false;
  }

  goToStep(step: number) {
    this.currentStep = step;
  }

  // Helper Methods for Personal Details
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

  formatPhone() {
    let val = this.clientDetails.phoneNumber.replace(/\D/g, '').substring(0, 10);
    if (val.length > 5) {
      this.clientDetails.phoneNumber = val.substring(0, 5) + ' ' + val.substring(5, 10);
    } else {
      this.clientDetails.phoneNumber = val;
    }
  }

  isFieldValid(field: keyof typeof this.clientDetails): boolean {
    const value = this.clientDetails[field];
    if (!value && ['firstName', 'lastName', 'email', 'dob', 'panNumber', 'aadhaarNumber', 'addressLine1', 'zipCode', 'phoneNumber'].includes(field)) {
      return false;
    }
    
    if (!value) return true;

    switch (field) {
      case 'email': return this.patterns.email.test(value);
      case 'panNumber': return this.patterns.pan.test(value);
      case 'aadhaarNumber': return this.patterns.aadhaar.test(value.replace(/\D/g, ''));
      case 'zipCode': return this.patterns.zip.test(value);
      case 'phoneNumber': return this.patterns.phone.test(value.replace(/\D/g, ''));
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

  verifyInformation() {
    this.isVerifying = true;
    setTimeout(() => {
      this.isVerifying = false;
      this.isVerified = true;
      this.displayVerificationResults = true;
      this.verificationStatus.name = true;
      this.verificationStatus.dob = true;
      this.verificationStatus.pan = true;
      this.verificationStatus.aadhaar = true;
      this.verificationStatus.address = true;
    }, 2500);
  }

  closeVerification() {
    this.displayVerificationResults = false;
    this.goToStep(3);
  }

  toggleSection(section: keyof typeof this.sections) {
    this.sections[section] = !this.sections[section];
  }

  editPersonalDetails() {
    this.currentStep = 2;
  }

  onSubmit() {
    this.displaySubmitConfirm = true;
  }

  confirmSubmit() {
    this.displaySubmitConfirm = false;
    this.goToStep(4);
  }

  onSend() {
    console.log('Sending Email...', this.emailData);
    this.displayMailSuccess = true;
  }

  onSuccessClose() {
    this.displayMailSuccess = false;
    this.router.navigate(['/advisor/dashboard']);
  }

  save() {
    console.log('Saving Details...', this.clientDetails);
  }
}
