import { Component } from '@angular/core';
import { CLIENTS_DATA, Client } from '../../data/clients.data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clients-page',
  standalone: false,
  templateUrl: './clients-page.component.html',
  styleUrl: './clients-page.component.scss'
})
export class ClientsPageComponent {
  tabs = ['Individual', 'CRM', 'Business', 'Trusts'];
  activeTab: string = 'Individual';
  rows = 10;
  showAddModal = false;
  addClientForm!: FormGroup;

  allClients: Client[] = CLIENTS_DATA;

  businessTypes = [
    { label: 'Limited Liability Company', value: 'Limited Liability Company' },
    { label: 'Corporation', value: 'Corporation' },
    { label: 'Limited Liability Partnership', value: 'Limited Liability Partnership' },
    { label: 'Sole Proprietorship', value: 'Sole Proprietorship' },
    { label: 'Partnership', value: 'Partnership' }
  ];

  trustTypes = [
    { label: 'Revocable', value: 'Revocable' },
    { label: 'Irrevocable', value: 'Irrevocable' }
  ];

  phoneSuffixes = [
    { label: 'Select Suffix', value: null },
    { label: 'Sr.', value: 'Sr.' },
    { label: 'Jr.', value: 'Jr.' },
    { label: 'II', value: 'II' },
    { label: 'III', value: 'III' }
  ];

  phoneCountries = [
    { label: 'Country', value: null },
    { label: 'United States', value: 'US' },
    { label: 'Canada', value: 'CA' },
    { label: 'Mexico', value: 'MX' }
  ];

  constructor(private fb: FormBuilder) {
    this.initializeForm();
  }

  initializeForm(): void {
    this.addClientForm = this.fb.group({
      title: [''],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      suffix: [''],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: [''],
      ssn: [''],
      idVerification: [''],
      phoneType: ['Mobile'],
      phoneCountry: ['US'],
      phone: ['', Validators.required],
      businessName: [''],
      dbaName: [''],
      businessType: [''],
      trustName: [''],
      trustType: [''],
      address: ['', Validators.required]
    });
  }

  get filteredClients(): Client[] {
    const typeMap: { [key: string]: string } = {
      'Individual': 'individual',
      'CRM': 'crm',
      'Business': 'business',
      'Trusts': 'trust'
    };
    const type = typeMap[this.activeTab];
    return this.allClients.filter(client => client.type === type);
  }

  openAddModal(): void {
    this.showAddModal = true;
    this.initializeForm();
  }

  closeAddModal(): void {
    this.showAddModal = false;
    this.initializeForm();
  }

  onAddClientSubmit(): void {
    if (this.addClientForm.valid) {
      // Handle form submission here
      console.log('Form submitted:', this.addClientForm.value);
      // You can add the new client to the allClients array here
      this.closeAddModal();
    }
  }

  getBusinessName(client: Client): string {
    const bClient = client as any;
    return bClient.businessName || '';
  }

  getDBAName(client: Client): string {
    const bClient = client as any;
    return bClient.dbaName || '';
  }

  getBusinessType(client: Client): string {
    const bClient = client as any;
    return bClient.businessType || '';
  }

  getTrustName(client: Client): string {
    const tClient = client as any;
    return tClient.trustName || '';
  }

  getTrustType(client: Client): string {
    const tClient = client as any;
    return tClient.trustType || '';
  }

  getTinEin(client: Client): string {
    const tClient = client as any;
    return tClient.tinEin || '';
  }
}
