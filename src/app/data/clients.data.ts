export interface Client {
  id: number;
  type: 'individual' | 'crm' | 'business' | 'trust';
  name?: string;
  firstName?: string;
  lastName?: string;
  businessName?: string;
  dbaName?: string;
  businessType?: string;
  trustName?: string;
  trustType?: string;
  addressType?: string;
  address: string;
  email: string;
  phoneType?: string;
  phone: string;
  dateOfBirth?: string;
  ssn?: string;
  tinEin?: string;
  idVerification?: string;
  suffix?: string;
}

export interface IndividualClient extends Client {
  type: 'individual' | 'crm';
  name: string;
  dateOfBirth: string;
}

export interface BusinessClient extends Client {
  type: 'business';
  businessName: string;
  dbaName: string;
  businessType: string;
}

export interface TrustClient extends Client {
  type: 'trust';
  trustName: string;
  trustType: string;
}

export const CLIENTS_DATA: Client[] = [
  // Individual Clients
  {
    id: 1,
    type: 'individual',
    name: 'Mr. Saijan SK Khan Sr.',
    addressType: 'Residence',
    address: '742 Ridgewood Ave2, 742 Ridgewoodq, Columbus, OH, USA, 43215',
    email: 'saijan.khan@yopmail.com',
    phoneType: 'Mobile',
    phone: '(830) 250-8166',
    dateOfBirth: '05-03-1995'
  },
  {
    id: 2,
    type: 'individual',
    name: 'Mr. Sagar SM Mahajan Jr.',
    addressType: 'Residence',
    address: 'address 101, Los Angeles, CA, USA, 90001',
    email: 'sagar.test@yopmail.com',
    phoneType: 'Mobile',
    phone: '(830) 250-8166',
    dateOfBirth: '12-23-2025'
  },
  {
    id: 3,
    type: 'individual',
    name: 'Mr. James JB Barker Jr.',
    addressType: 'Residence',
    address: '742 Evergreen Terrace, 742 Evergreen, Springfield, IL, USA, 62704',
    email: 'james.barker@yopmail.com',
    phoneType: 'Mobile',
    phone: '(514) 555-1299',
    dateOfBirth: '05-19-1993'
  },
  {
    id: 4,
    type: 'individual',
    name: 'Mr. Linda LI Iparagure Jr.',
    addressType: 'Residence',
    address: '742 Evergreen Tech Park, Suite 410, Los Angeles, CA, USA, 90099',
    email: 'linda.iparagure@yopmail.com',
    phoneType: 'Mobile',
    phone: '(514) 555-1886',
    dateOfBirth: '02-01-1980'
  },
  {
    id: 5,
    type: 'individual',
    name: 'Mr. Sagar Test Mahajan Sr.',
    addressType: 'Residence',
    address: 'address 101, address 102, Los Angeles, CA, USA, 90001',
    email: 'sagar.mahajan1@yopmail.com',
    phoneType: 'Mobile',
    phone: '(830) 250-8166',
    dateOfBirth: '02-01-1990'
  },
  {
    id: 6,
    type: 'individual',
    name: 'Zepat Aman',
    addressType: 'Residence',
    address: 'address line 1, address line 2, Los Angeles, CA, USA, 90001',
    email: 'zaman1222@yopmail.com',
    phoneType: 'Mobile',
    phone: '(830) 250-8166',
    dateOfBirth: '12-04-2025'
  },

  // Business Clients
  {
    id: 101,
    type: 'business',
    businessName: 'Anderson Family Holdings LLC',
    dbaName: 'Anderson Capital',
    businessType: 'Limited Liability Company',
    addressType: 'Physical & Mailing',
    address: '245 Market Street, San Jose, CA, USA, 95113',
    email: 'contact@andersoncapital.com',
    phoneType: 'Mobile',
    phone: '(408) 555-2233',
    tinEin: 'XX-XXX4321'
  },
  {
    id: 102,
    type: 'business',
    businessName: 'BlueRock Ventures Inc',
    dbaName: 'BlueRock VC',
    businessType: 'Corporation',
    addressType: 'Physical & Mailing',
    address: '88 Madison Ave, New York, NY, USA, 10016',
    email: 'admin@bluerockvc.com',
    phoneType: 'Mobile',
    phone: '(212) 555-7788',
    tinEin: 'XX-XXX3210'
  },
  {
    id: 103,
    type: 'business',
    businessName: 'GreenField Agro Pvt Ltd',
    dbaName: 'GreenField Farms',
    businessType: 'Limited Liability Partnership',
    addressType: 'Physical & Mailing',
    address: '120 Harvest Rd, Fresno, CA, USA, 93650',
    email: 'info@greenfieldfarms.com',
    phoneType: 'Mobile',
    phone: '(559) 555-6344',
    tinEin: 'XX-XXX2109'
  },
  {
    id: 104,
    type: 'business',
    businessName: 'Summit Tech Solutions LLC',
    dbaName: 'SummitTech',
    businessType: 'Limited Liability Company',
    addressType: 'Physical & Mailing',
    address: '500 Innovation Dr, Palo Alto, CA, USA, 94301',
    email: 'support@summittech.io',
    phoneType: 'Mobile',
    phone: '(650) 555-5005',
    tinEin: 'XX-XXX4567'
  },
  {
    id: 105,
    type: 'business',
    businessName: 'Oakwood Realty Group',
    dbaName: 'Oakwood Realty',
    businessType: 'Sole Proprietorship',
    addressType: 'Physical & Mailing',
    address: '77 Lakeshore Dr, Chicago, IL, USA, 60611',
    email: 'contact@oakwoodrealty.com',
    phoneType: 'Mobile',
    phone: '(312) 555-8901',
    tinEin: 'XX-XXX1098'
  },

  // Trust Clients
  {
    id: 201,
    type: 'trust',
    trustName: 'Anderson Family Trust',
    trustType: 'Revocable',
    addressType: 'Physical & Mailing',
    address: '500 Market Street, San Jose, CA, USA, 95113',
    email: 'trust1@anderson.com',
    phoneType: 'Mobile',
    phone: '(408) 555-2233',
    tinEin: 'XX-XXX4321'
  },
  {
    id: 202,
    type: 'trust',
    trustName: 'Brown Living Trust',
    trustType: 'Revocable',
    addressType: 'Physical & Mailing',
    address: '210 Palm Drive, Palo Alto, CA, USA, 94301',
    email: 'trust2@brown.com',
    phoneType: 'Mobile',
    phone: '(650) 555-7788',
    tinEin: 'XX-XXX3210'
  },
  {
    id: 203,
    type: 'trust',
    trustName: 'Miller Heritage Trust',
    trustType: 'Irrevocable',
    addressType: 'Physical & Mailing',
    address: '88 Bay Street, San Francisco, CA, USA, 94105',
    email: 'trust3@miller.com',
    phoneType: 'Mobile',
    phone: '(415) 555-3344',
    tinEin: 'XX-XXX2109'
  },
  {
    id: 204,
    type: 'trust',
    trustName: 'Wilson Family Trust',
    trustType: 'Revocable',
    addressType: 'Physical & Mailing',
    address: '900 Ocean Ave, Santa Monica, CA, USA, 90405',
    email: 'trust4@wilson.com',
    phoneType: 'Mobile',
    phone: '(310) 555-2211',
    tinEin: 'XX-XXX1098'
  },
  {
    id: 205,
    type: 'trust',
    trustName: 'Thompson Revocable Trust',
    trustType: 'Revocable',
    addressType: 'Physical & Mailing',
    address: '120 Madison Ave, New York, NY, USA, 10016',
    email: 'trust5@thompson.com',
    phoneType: 'Mobile',
    phone: '(212) 555-9988',
    tinEin: 'XX-XXX0987'
  },

  // CRM Clients (similar format to Individual)
  {
    id: 301,
    type: 'crm',
    name: 'Ms. Jennifer JA Anderson',
    addressType: 'Residence',
    address: '2100 M Street NW, Washington, DC, USA, 20037',
    email: 'jennifer.anderson@yopmail.com',
    phoneType: 'Mobile',
    phone: '(202) 555-0167',
    dateOfBirth: '11-08-1992'
  },
  {
    id: 302,
    type: 'crm',
    name: 'Mrs. Patricia PW Wilson Sr.',
    addressType: 'Residence',
    address: '1200 Market St, Suite 300, San Francisco, CA, USA, 94103',
    email: 'patricia.wilson@yopmail.com',
    phoneType: 'Mobile',
    phone: '(415) 555-0142',
    dateOfBirth: '07-15-1987'
  },
  {
    id: 303,
    type: 'crm',
    name: 'Mr. David DT Thompson Sr.',
    addressType: 'Residence',
    address: '333 Las Olas Way, Fort Lauderdale, FL, USA, 33301',
    email: 'david.thompson@yopmail.com',
    phoneType: 'Mobile',
    phone: '(954) 555-0134',
    dateOfBirth: '09-14-1968'
  }
];
