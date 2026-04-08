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
    name: 'Mr. Rajesh Sharma',
    addressType: 'Residence',
    address: 'Flat 402, Green Park, Andheri East, Mumbai, Maharashtra, India, 400069',
    email: 'rajesh.sharma@yopmail.com',
    phoneType: 'Mobile',
    phone: '+91 98765 43210',
    dateOfBirth: '05-03-1995'
  },
  {
    id: 2,
    type: 'individual',
    name: 'Mr. Aditya Rao',
    addressType: 'Residence',
    address: 'Villa 15, Prestige Golfshire, Nandi Hills Road, Bengaluru, Karnataka, India, 560300',
    email: 'aditya.rao@yopmail.com',
    phoneType: 'Mobile',
    phone: '+91 98123 45678',
    dateOfBirth: '12-23-1990'
  },
  {
    id: 3,
    type: 'individual',
    name: 'Mrs. Priya Deshmukh',
    addressType: 'Residence',
    address: 'A-21, Vasant Vihar, New Delhi, Delhi, India, 110057',
    email: 'priya.deshmukh@yopmail.com',
    phoneType: 'Mobile',
    phone: '+91 91234 56789',
    dateOfBirth: '05-19-1993'
  },
  {
    id: 4,
    type: 'individual',
    name: 'Mr. Vikram Singh',
    addressType: 'Residence',
    address: '142, Jubilee Hills, Hyderabad, Telangana, India, 500033',
    email: 'vikram.singh@yopmail.com',
    phoneType: 'Mobile',
    phone: '+91 99887 76655',
    dateOfBirth: '02-01-1980'
  },
  {
    id: 5,
    type: 'individual',
    name: 'Ms. Ananya Patel',
    addressType: 'Residence',
    address: 'Plot 8, Koregaon Park, Pune, Maharashtra, India, 411001',
    email: 'ananya.patel@yopmail.com',
    phoneType: 'Mobile',
    phone: '+91 98765 12345',
    dateOfBirth: '02-01-1990'
  },
  {
    id: 6,
    type: 'individual',
    name: 'Mr. Suresh Joshi',
    addressType: 'Residence',
    address: 'B-14, Satellite Town, Ahmedabad, Gujarat, India, 380015',
    email: 'suresh.joshi@yopmail.com',
    phoneType: 'Mobile',
    phone: '+91 94567 89012',
    dateOfBirth: '12-04-1988'
  },

  // Business Clients
  {
    id: 101,
    type: 'business',
    businessName: 'Sharma Family Holdings Pvt Ltd',
    dbaName: 'Sharma Capital',
    businessType: 'Private Limited Company',
    addressType: 'Physical & Mailing',
    address: '245 MG Road, Camp, Pune, Maharashtra, India, 411001',
    email: 'contact@sharmacapital.in',
    phoneType: 'Mobile',
    phone: '+91 98220 11223',
    tinEin: 'GSTIN27AAAAA0000A1Z5'
  },
  {
    id: 102,
    type: 'business',
    businessName: 'BlueRock Tech Ventures Pvt Ltd',
    dbaName: 'BlueRock VC',
    businessType: 'Private Limited Company',
    addressType: 'Physical & Mailing',
    address: '88 Cyber City, Gurugram, Haryana, India, 122002',
    email: 'admin@bluerockvc.in',
    phoneType: 'Mobile',
    phone: '+91 98110 33445',
    tinEin: 'GSTIN06BBBBB0000B2Z6'
  },
  {
    id: 103,
    type: 'business',
    businessName: 'Harit Krishi Pvt Ltd',
    dbaName: 'Harit Farms',
    businessType: 'Limited Liability Partnership',
    addressType: 'Physical & Mailing',
    address: '120 Ring Road, Surat, Gujarat, India, 395003',
    email: 'info@haritfarms.in',
    phoneType: 'Mobile',
    phone: '+91 94260 55667',
    tinEin: 'GSTIN24CCCCC0000C3Z7'
  },
  {
    id: 104,
    type: 'business',
    businessName: 'Shikhar Tech Solutions',
    dbaName: 'ShikharTech',
    businessType: 'Private Limited Company',
    addressType: 'Physical & Mailing',
    address: '500 IT Park, Whitefield, Bengaluru, Karnataka, India, 560066',
    email: 'support@shikhartech.in',
    phoneType: 'Mobile',
    phone: '+91 99000 77889',
    tinEin: 'GSTIN29DDDDD0000D4Z8'
  },
  {
    id: 105,
    type: 'business',
    businessName: 'Banyan Tree Realty Group',
    dbaName: 'Banyan Realty',
    businessType: 'Sole Proprietorship',
    addressType: 'Physical & Mailing',
    address: '77 Marine Drive, South Mumbai, Maharashtra, India, 400020',
    email: 'contact@banyanrealty.in',
    phoneType: 'Mobile',
    phone: '+91 98200 99001',
    tinEin: 'GSTIN27EEEEE0000E5Z9'
  },

  // Trust Clients
  {
    id: 201,
    type: 'trust',
    trustName: 'Sharma Family Trust',
    trustType: 'Revocable',
    addressType: 'Physical & Mailing',
    address: '500 MG Road, Camp, Pune, Maharashtra, India, 411001',
    email: 'trust1@sharma.in',
    phoneType: 'Mobile',
    phone: '+91 98220 11223',
    tinEin: 'PT27AAAAA0000'
  },
  {
    id: 202,
    type: 'trust',
    trustName: 'Rao Living Trust',
    trustType: 'Revocable',
    addressType: 'Physical & Mailing',
    address: '210 Palm Drive, Jayanagar, Bengaluru, Karnataka, India, 560041',
    email: 'trust2@rao.in',
    phoneType: 'Mobile',
    phone: '+91 98123 45678',
    tinEin: 'PT29BBBBB0000'
  },
  {
    id: 203,
    type: 'trust',
    trustName: 'Deshmukh Heritage Trust',
    trustType: 'Irrevocable',
    addressType: 'Physical & Mailing',
    address: '88 Shivaji Park, Dadar, Mumbai, Maharashtra, India, 400028',
    email: 'trust3@deshmukh.in',
    phoneType: 'Mobile',
    phone: '+91 91234 56789',
    tinEin: 'PT27CCCCC0000'
  },
  {
    id: 204,
    type: 'trust',
    trustName: 'Singh Family Trust',
    trustType: 'Revocable',
    addressType: 'Physical & Mailing',
    address: '900 Banjara Hills, Hyderabad, Telangana, India, 500034',
    email: 'trust4@singh.in',
    phoneType: 'Mobile',
    phone: '+91 99887 76655',
    tinEin: 'PT36DDDDD0000'
  },
  {
    id: 205,
    type: 'trust',
    trustName: 'Patel Revocable Trust',
    trustType: 'Revocable',
    addressType: 'Physical & Mailing',
    address: '120 Ashram Road, Ahmedabad, Gujarat, India, 380009',
    email: 'trust5@patel.in',
    phoneType: 'Mobile',
    phone: '+91 98765 12345',
    tinEin: 'PT24EEEEE0000'
  },

  // CRM Clients
  {
    id: 301,
    type: 'crm',
    name: 'Ms. Neha Gupta',
    addressType: 'Residence',
    address: '2100 Civil Lines, Prayagraj, Uttar Pradesh, India, 211001',
    email: 'neha.gupta@yopmail.com',
    phoneType: 'Mobile',
    phone: '+91 94150 11223',
    dateOfBirth: '11-08-1992'
  },
  {
    id: 302,
    type: 'crm',
    name: 'Mrs. Kavita Iyer',
    addressType: 'Residence',
    address: '1200 Anna Salai, Chennai, Tamil Nadu, India, 600002',
    email: 'kavita.iyer@yopmail.com',
    phoneType: 'Mobile',
    phone: '+91 98400 33445',
    dateOfBirth: '07-15-1987'
  },
  {
    id: 303,
    type: 'crm',
    name: 'Mr. Manoj Tiwari',
    addressType: 'Residence',
    address: '333 JLN Marg, Jaipur, Rajasthan, India, 302004',
    email: 'manoj.tiwari@yopmail.com',
    phoneType: 'Mobile',
    phone: '+91 98290 55667',
    dateOfBirth: '09-14-1968'
  }
];
