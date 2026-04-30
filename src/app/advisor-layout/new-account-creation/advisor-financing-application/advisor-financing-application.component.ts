import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TextareaModule } from 'primeng/textarea';
import { AccordionModule } from 'primeng/accordion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advisor-financing-application',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule, 
    InputTextModule, 
    ButtonModule, 
    SelectModule, 
    DatePickerModule,
    DialogModule,
    RadioButtonModule,
    TextareaModule,
    AccordionModule
  ],
  templateUrl: './advisor-financing-application.component.html',
  styleUrl: './advisor-financing-application.component.scss'
})
export class AdvisorFinancingApplicationComponent {
  formData = {
    firmName: '18Forty8 Private Wealth India',
    locationCity: 'Mumbai',
    locationState: 'MH',
    firmAum: '500,000',
    advisorsCount: '25',
    yearFounded: new Date(2015, 0, 1),
    corporateStructure: 'LLC',
    riaAffiliation: 'Yes'
  };

  states = [
    { label: 'Andhra Pradesh', value: 'AP' },
    { label: 'Arunachal Pradesh', value: 'AR' },
    { label: 'Assam', value: 'AS' },
    { label: 'Bihar', value: 'BR' },
    { label: 'Chhattisgarh', value: 'CG' },
    { label: 'Goa', value: 'GA' },
    { label: 'Gujarat', value: 'GJ' },
    { label: 'Haryana', value: 'HR' },
    { label: 'Himachal Pradesh', value: 'HP' },
    { label: 'Jharkhand', value: 'JH' },
    { label: 'Karnataka', value: 'KA' },
    { label: 'Kerala', value: 'KL' },
    { label: 'Madhya Pradesh', value: 'MP' },
    { label: 'Maharashtra', value: 'MH' },
    { label: 'Manipur', value: 'MN' },
    { label: 'Meghalaya', value: 'ML' },
    { label: 'Mizoram', value: 'MZ' },
    { label: 'Nagaland', value: 'NL' },
    { label: 'Odisha', value: 'OR' },
    { label: 'Punjab', value: 'PB' },
    { label: 'Rajasthan', value: 'RJ' },
    { label: 'Sikkim', value: 'SK' },
    { label: 'Tamil Nadu', value: 'TN' },
    { label: 'Telangana', value: 'TG' },
    { label: 'Tripura', value: 'TR' },
    { label: 'Uttar Pradesh', value: 'UP' },
    { label: 'Uttarakhand', value: 'UK' },
    { label: 'West Bengal', value: 'WB' },
    { label: 'Andaman and Nicobar Islands', value: 'AN' },
    { label: 'Chandigarh', value: 'CH' },
    { label: 'Dadra and Nagar Haveli and Daman and Diu', value: 'DN' },
    { label: 'Delhi', value: 'DL' },
    { label: 'Jammu and Kashmir', value: 'JK' },
    { label: 'Ladakh', value: 'LA' },
    { label: 'Lakshadweep', value: 'LD' },
    { label: 'Puducherry', value: 'PY' }
  ];

  structures = [
    { label: 'LLC', value: 'LLC' },
    { label: 'Corporation', value: 'Corp' }
  ];

  affiliations = [
    { label: 'Affiliated', value: 'Yes' },
    { label: 'Independent', value: 'No' }
  ];

  suffixes = [
    { label: 'Jr.', value: 'Jr' },
    { label: 'Sr.', value: 'Sr' }
  ];

  owners = [
    {
      firstName: 'Akash',
      lastName: 'Patil',
      suffix: null,
      email: 'akash.patil@18forty8.in',
      ownership: '60'
    },
    {
      firstName: 'Rohan',
      lastName: 'Deshmukh',
      suffix: null,
      email: 'rohan.d@18forty8.in',
      ownership: '40'
    }
  ];

  displayConfirmation: boolean = false;
  currentStep: number = 1;
  expandedSection: string = 'firm';

  reviewSections = {
    firm: true,
    loan: true
  };

  toggleReviewSection(section: string) {
    (this.reviewSections as any)[section] = !(this.reviewSections as any)[section];
  }

  loanData = {
    amountRequested: '',
    useOfFunds: null,
    timeline: null,
    loiSigned: null,
    description: '',
    preferredBank: null
  };

  useOfFundsOptions = [
    { label: 'Acquisition of Firm', value: 'acquisition_of_firm' },
    { label: 'Buy into a Practice', value: 'buy_into_a_practice' },
    { label: 'Acquisition of Book', value: 'acquisition_of_book' }
  ];

  timelineOptions = [
    { label: 'Select Timeline', value: null },
    { label: '30-60 Days', value: '30-60_days' },
    { label: 'Flexible', value: 'flexible' },
    { label: 'To Be Determined', value: 'to_be_determined' }
  ];

  bankOptions = [
    { label: 'Select Preferred B...', value: null },
    { label: 'State Bank of India', value: 'sbi' },
    { label: 'HDFC Bank', value: 'hdfc' },
    { label: 'ICICI Bank', value: 'icici' }
  ];

  constructor(private router: Router) {}

  addOwner() {
    this.owners.push({
      firstName: '',
      lastName: '',
      suffix: null,
      email: '',
      ownership: ''
    });
  }

  saveAndNext() {
    this.displayConfirmation = true;
  }

  confirmProceed() {
    this.displayConfirmation = false;
    if (this.currentStep < 3) {
        this.currentStep++;
    } else {
        this.router.navigate(['/advisor/new-account-creation/financing-email-workflow']);
    }
  }

  cancelProceed() {
    this.displayConfirmation = false;
  }

  goToStep(step: number) {
    this.currentStep = step;
  }
}
