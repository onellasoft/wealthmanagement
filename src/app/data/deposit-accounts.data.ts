export interface DepositAccount {
  clientName: string;
  accountName: string;
  accountNumber: string;
  accountType: string;
  status: 'Open' | 'Closed' | 'Pending';
  revenueStatus: 'Yes' | 'No';
  accountBalance: string;
  availableBalance: string;
  balanceDate: string;
}

export const DEPOSIT_ACCOUNTS_DATA: DepositAccount[] = [
  {
    clientName: 'Mr. Saijan SK Khan Sr.',
    accountName: 'HYSA 50',
    accountNumber: 'XXXXX4451',
    accountType: 'High Yield Savings Account',
    status: 'Open',
    revenueStatus: 'No',
    accountBalance: '$150,120.35',
    availableBalance: '$150,120.35',
    balanceDate: '01-18-2026'
  },
  {
    clientName: 'Mr. Kavya KD Dadhich',
    accountName: 'HYSA 50',
    accountNumber: 'XXXXX3390',
    accountType: 'High Yield Savings Account',
    status: 'Open',
    revenueStatus: 'No',
    accountBalance: '$0.00',
    availableBalance: '$0.00',
    balanceDate: '01-18-2026'
  },
  {
    clientName: 'Mr. Rahul RV Vaishnav Sr.',
    accountName: 'HYSA 25',
    accountNumber: 'XXXXX8455',
    accountType: 'High Yield Savings Account',
    status: 'Open',
    revenueStatus: 'No',
    accountBalance: '$130.42',
    availableBalance: '$130.42',
    balanceDate: '01-18-2026'
  },
  {
    clientName: 'Mr. Prasantha PR Rout III',
    accountName: 'HYSA 50',
    accountNumber: 'XXXXX2526',
    accountType: 'High Yield Savings Account',
    status: 'Open',
    revenueStatus: 'No',
    accountBalance: '$0.00',
    availableBalance: '$0.00',
    balanceDate: '01-18-2026'
  },
  {
    clientName: 'Mr. Prasantha PR Rout III',
    accountName: 'HYSA 50',
    accountNumber: 'XXXXX2356',
    accountType: 'High Yield Savings Account',
    status: 'Open',
    revenueStatus: 'No',
    accountBalance: '$50.25',
    availableBalance: '$50.25',
    balanceDate: '01-18-2026'
  },
  {
    clientName: 'Mr. Krithikesh KI Iyer Sr.',
    accountName: 'Hysa Advisor 0',
    accountNumber: 'XXXXX6531',
    accountType: 'High Yield Savings Account',
    status: 'Open',
    revenueStatus: 'No',
    accountBalance: '$0.00',
    availableBalance: '$0.00',
    balanceDate: '01-18-2026'
  },
  {
    clientName: 'Mr. Charles A Smith Jr',
    accountName: 'HYSA 25 Account',
    accountNumber: 'XXXXX1257',
    accountType: 'High Yield Savings Account',
    status: 'Open',
    revenueStatus: 'No',
    accountBalance: '$0.00',
    availableBalance: '$0.00',
    balanceDate: '01-18-2026'
  },
  {
    clientName: 'Mr. Charles A Smith Jr',
    accountName: 'HYSA 50 Account',
    accountNumber: 'XXXXX0871',
    accountType: 'High Yield Savings Account',
    status: 'Open',
    revenueStatus: 'No',
    accountBalance: '$151.67',
    availableBalance: '$151.67',
    balanceDate: '01-18-2026'
  }
];


export interface Transaction {
  date: string;
  netAmount: string;
  description: string;
}

export const TRANSACTIONS_DATA: Transaction[] = [
  { date: '01-14-2026', netAmount: '$150,000.00', description: 'Transfer from CITIZENS BANK NA to HYSA 50 2265' },
  { date: '12-31-2025', netAmount: '$0.00',        description: 'Interest paid to HYSA 50 2265' },
  { date: '11-30-2025', netAmount: '$0.00',        description: 'Interest paid to HYSA 50 2265' },
  { date: '11-28-2025', netAmount: '$20.00',       description: 'Transfer from CITIZENS BANK NA to HYSA 50 2265' },
  { date: '11-28-2025', netAmount: '$50.00',       description: 'Transfer from CITIZENS BANK NA to HYSA 50 2265' },
  { date: '11-28-2025', netAmount: '$50.00',       description: 'Transfer from CITIZENS BANK NA to HYSA 50 2265' }
];

export interface InProgressAccount {
  clientName: string;
  accountName: string;
  accountType: string;
  revenueShared: 'Yes' | 'No';
  lastModifiedDate: string;
  accountStage: string;
}

export const IN_PROGRESS_DATA: InProgressAccount[] = [
  {
    clientName: 'Frankil Adam',
    accountName: 'HYSA 50',
    accountType: 'Individual',
    revenueShared: 'No',
    lastModifiedDate: '01-16-2026',
    accountStage: 'Application Holder Details'
  },
  {
    clientName: 'Frankil Adam',
    accountName: 'Test',
    accountType: 'Individual',
    revenueShared: 'No',
    lastModifiedDate: '01-06-2026',
    accountStage: 'Review Details'
  },
  {
    clientName: 'Frankil Adam',
    accountName: 'HYSA 50',
    accountType: 'Individual',
    revenueShared: 'No',
    lastModifiedDate: '12-31-2025',
    accountStage: 'Application Holder Details'
  },
  {
    clientName: 'Mr. Saijan SK Khan Sr.',
    accountName: 'HYSA 50',
    accountType: 'Individual',
    revenueShared: 'No',
    lastModifiedDate: '12-29-2025',
    accountStage: 'Advisor Agreements'
  },
  {
    clientName: 'Frankil Adam',
    accountName: 'Test',
    accountType: 'Individual',
    revenueShared: 'No',
    lastModifiedDate: '12-29-2025',
    accountStage: 'Email Customization'
  },
  {
    clientName: 'Frankil Adam',
    accountName: 'HYSA 50',
    accountType: 'Individual',
    revenueShared: 'No',
    lastModifiedDate: '12-29-2025',
    accountStage: 'Review Details'
  },
  {
    clientName: 'Frankil Adam',
    accountName: 'HYSA 50',
    accountType: 'Individual',
    revenueShared: 'No',
    lastModifiedDate: '12-29-2025',
    accountStage: 'Application Holder Details'
  }
];

export interface ExternalAccount {
  accountName: string;
  bankName: string;
  accountType: string;
  accountNumber: string;
  accountBalance: string;
  balanceDate?: string;
}

export const EXTERNAL_ACCOUNTS_DATA: ExternalAccount[] = [
  {
    accountName: 'Plaid Saving',
    bankName: 'Chase',
    accountType: 'savings',
    accountNumber: 'XXXXXXXXXXXX1111',
    accountBalance: '$200.00'
  },
  {
    accountName: 'Plaid Saving',
    bankName: 'Chase',
    accountType: 'savings',
    accountNumber: 'XXXXXXXXXXXX1111',
    accountBalance: '$200.00',
    balanceDate: '11-03-2025'
  },
  {
    accountName: 'Plaid Checking',
    bankName: 'Chase',
    accountType: 'checking',
    accountNumber: 'XXXXXXXXXXXX0000',
    accountBalance: '$100.00'
  },
  {
    accountName: 'Plaid Checking',
    bankName: 'Chase',
    accountType: 'checking',
    accountNumber: 'XXXXXXXXXXXX0000',
    accountBalance: '$100.00'
  }
];

export interface WithdrawalTransaction {
  recipientName: string;
  date: string;
  transferType: string;
  availableDate: string;
  bankName: string;
  accountNumber: string;
  routingNumber: string;
}

export const WITHDRAWAL_TRANSACTIONS_DATA: WithdrawalTransaction[] = Array(6).fill(null).map(() => ({
  recipientName: 'Plaid Saving',
  date: '11-11-2025',
  transferType: 'Approval Pending',
  availableDate: '--',
  bankName: 'Chase',
  accountNumber: 'XXXXXXXXXXXX1111',
  routingNumber: '011401533'
}));

export interface AddCashTransaction {
  senderName: string;
  date: string;
  transferType: string;
  availableDate: string;
  bankName: string;
  accountNumber: string;
}

export const ADD_CASH_TRANSACTIONS_DATA: AddCashTransaction[] = Array(4).fill(null).map(() => ({
  senderName: 'Plaid Saving',
  date: '11-03-2025',
  transferType: 'Settled',
  availableDate: '11-03-2025',
  bankName: 'Chase',
  accountNumber: 'XXXXXXXXXXXX1111'
}));




export interface Mortgage {
  clientName: string;
  homeLoanType: 'Purchase' | 'Refinance';
  term: string;
  rate: string;
  apr: string;
  points: string;
}

export const MORTGAGES_DATA: Mortgage[] = [
  { clientName: 'Mr. Kavya KD Dadhich', homeLoanType: 'Purchase', term: '15 year Fixed', rate: '5.125 %', apr: '5.377 %', points: '$3,129.60' },
  { clientName: 'Mr. Jexon JR Reid Sr.', homeLoanType: 'Purchase', term: '15 year Fixed', rate: '5.25 %', apr: '5.492 %', points: '$2,899.20' },
  { clientName: 'Mr. Prasantha PR Rout Sr.', homeLoanType: 'Refinance', term: '30 year Fixed', rate: '6.12 %', apr: '6.269 %', points: '$2,780.80' },
  { clientName: 'Mr. Prasantha PR Rout Sr.', homeLoanType: 'Purchase', term: '15 year Fixed', rate: '5.125 %', apr: '5.365 %', points: '$2,889.60' },
  { clientName: 'Mr. Kavya KD Dadhich Sr.', homeLoanType: 'Purchase', term: '20 year Fixed', rate: '5.625 %', apr: '5.787 %', points: '$2,006.40' },
  { clientName: 'Mr. Liyakat LH Hussain II', homeLoanType: 'Purchase', term: '15 year Fixed', rate: '5 %', apr: '5.23 %', points: '$2,716.80' },
  { clientName: 'Mr. Kavya KD Dadhich', homeLoanType: 'Refinance', term: '20 year Fixed', rate: '5.625 %', apr: '5.777 %', points: '$1,737.60' }
];

export const MORTGAGES_IN_PROGRESS_DATA: Mortgage[] = [
  { clientName: 'Mr. Kai KD Donovan Sr.', homeLoanType: 'Purchase', term: '20 year Fixed', rate: '5.875 %', apr: '6.055 %', points: '$2,406.40' },
  { clientName: 'Mr. Kai KD Donovan Sr.', homeLoanType: 'Purchase', term: '20 year Fixed', rate: '5.875 %', apr: '6.055 %', points: '$2,406.40' },
  { clientName: 'Mr. Kai KD Donovan Sr.', homeLoanType: 'Purchase', term: '20 year Fixed', rate: '5.875 %', apr: '6.055 %', points: '$2,406.40' },
  { clientName: 'Miss. Anam AK Jr.', homeLoanType: 'Purchase', term: '20 year Fixed', rate: '5.875 %', apr: '6.055 %', points: '$2,406.40' },
  { clientName: 'Mr. Kai KD Donovan Sr.', homeLoanType: 'Purchase', term: '20 year Fixed', rate: '5.875 %', apr: '6.055 %', points: '$2,406.40' },
  { clientName: 'Van Dersar Sr.', homeLoanType: 'Purchase', term: '20 year Fixed', rate: '5.875 %', apr: '6.057 %', points: '$2,448.00' },
  { clientName: 'Mr. Prasantha PR Rout III', homeLoanType: 'Purchase', term: '20 year Fixed', rate: '5.875 %', apr: '6.048 %', points: '$2,224.00' },
  { clientName: 'Miss. Anam AK Jr.', homeLoanType: 'Purchase', term: '20 year Fixed', rate: '5.625 %', apr: '5.824 %', points: '$2,992.00' },
  { clientName: 'Miss. Anam AK Jr.', homeLoanType: 'Purchase', term: '15 year Fixed', rate: '5.25 %', apr: '5.477 %', points: '$2,576.00' },
  { clientName: 'Mr. Krithikesh KI Iyer Sr.', homeLoanType: 'Purchase', term: '15 year Fixed', rate: '5.375 %', apr: '5.578 %', points: '$2,032.00' }
];

export interface AdvisorFinancing {
  firmName: string;
  submittedDate: string;
  firmAum: string;
  advisorsCount: number;
  owners: string[];
}

export interface LifeSettlement {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  deathBenefit: number;
  age: number;
  health: string;
}

export const LIFE_SETTLEMENTS_DATA: LifeSettlement[] = [
  { firstName: 'John', lastName: 'Doe', phone: '+1-555-123-4567', email: 'john.doe@example.com', deathBenefit: 500000, age: 45, health: 'Excellent' },
  { firstName: 'Jane', lastName: 'Smith', phone: '+1-555-234-5678', email: 'jane.smith@example.com', deathBenefit: 750000, age: 39, health: 'Good' },
  { firstName: 'Michael', lastName: 'Johnson', phone: '+1-555-345-6789', email: 'michael.johnson@example.com', deathBenefit: 250000, age: 52, health: 'Fair' },
  { firstName: 'Emily', lastName: 'Davis', phone: '+1-555-456-7890', email: 'emily.davis@example.com', deathBenefit: 300000, age: 31, health: 'Excellent' },
  { firstName: 'Robert', lastName: 'Miller', phone: '+1-555-567-8901', email: 'robert.miller@example.com', deathBenefit: 1000000, age: 60, health: 'Good' },
  { firstName: 'Laura', lastName: 'Wilson', phone: '+1-555-678-9012', email: 'laura.wilson@example.com', deathBenefit: 450000, age: 42, health: 'Excellent' },
  { firstName: 'David', lastName: 'Anderson', phone: '+1-555-789-0123', email: 'david.anderson@example.com', deathBenefit: 600000, age: 48, health: 'Fair' },
  { firstName: 'Sophia', lastName: 'Thomas', phone: '+1-555-890-1234', email: 'sophia.thomas@example.com', deathBenefit: 350000, age: 36, health: 'Good' },
  { firstName: 'Daniel', lastName: 'Martinez', phone: '+1-555-901-2345', email: 'daniel.martinez@example.com', deathBenefit: 800000, age: 50, health: 'Excellent' }
];

export const ADVISOR_FINANCING_DATA: AdvisorFinancing[] = [
  { firmName: '18Forty8 Private Wealth', submittedDate: '10-17-2025', firmAum: '$2,000.00', advisorsCount: 500, owners: ['adnan hussain Jr.'] },
  { firmName: '18Forty8 Private Wealth', submittedDate: '09-11-2025', firmAum: '$5,000.00', advisorsCount: 200, owners: ['Kavya Dashich', 'Adnan Hussain Jr.'] },
];

export interface CreditCard {
  clientName: string;
  accountNumber?: string;
  accountStatus?: string;
  lastModifiedDate?: string;
  accountStage?: string;
}

export const CREDIT_CARDS_DATA: CreditCard[] = [
  { clientName: 'Mr. Saijan SK Khan Sr.', accountNumber: '--', accountStatus: '--' },
  { clientName: 'Mr. Aaman AA Ansari Sr.', accountNumber: 'XXXXXXXXXXXX1556', accountStatus: 'Active' },
  { clientName: 'Mr. Saijan SK Khan Sr.', accountNumber: '--', accountStatus: '--' },
  { clientName: 'Mr. Saijan SK Khan Sr.', accountNumber: '--', accountStatus: '--' },
  { clientName: 'Mr. Saijan SK Khan Sr.', accountNumber: '--', accountStatus: '--' },
  { clientName: 'Mr. Saijan SK Khan Sr.', accountNumber: '--', accountStatus: '--' },
  { clientName: 'Mr. Kavya KD Dadhich', accountNumber: '--', accountStatus: '--' }
];

export const CREDIT_CARDS_IN_PROGRESS_DATA: CreditCard[] = [
  { clientName: 'Mr. Rehan RQ Qureshi Jr.', lastModifiedDate: '01-08-2026', accountStage: 'Email Sent to Client' },
  { clientName: 'Mr. James JB Barker Jr.', lastModifiedDate: '12-22-2025', accountStage: 'Email Sent to Client' },
  { clientName: 'Mr. Linda LI Iparagure Jr.', lastModifiedDate: '12-17-2025', accountStage: 'Email Sent to Client' },
  { clientName: 'Miss. Anam AK Khan Jr.', lastModifiedDate: '11-25-2025', accountStage: 'Email Sent to Client' },
  { clientName: 'Miss. Anam AK Khan Jr.', lastModifiedDate: '11-25-2025', accountStage: 'Email Sent to Client' },
  { clientName: 'Miss. Anam AK Khan Jr.', lastModifiedDate: '11-25-2025', accountStage: 'Email Sent to Client' },
  { clientName: 'Miss. Anam AK Khan Jr.', lastModifiedDate: '11-24-2025', accountStage: 'Email Sent to Client' }
];

export interface SblProposal {
  number: string;
  advisorName: string;
  lineOfCredit: string;
  participants: number;
  status: 'Pending' | 'Approved' | 'Rejected' | 'Expired';
  createdDate: string;
  expireDate: string;
}

export interface SblApplication {
  number: string;
  advisorName: string;
  lineOfCredit: string;
  participants: number;
  stage: string;
  createdDate: string;
}

export interface SblAccount {
  accountNumber: string;
  totalCreditLine: number;
  availableBalance: number;
  interestRate: string;
  lastWithdrawalDate: string;
  lastWithdrawalAmount: string;
  status: 'Active' | 'Inactive';
}

export interface SblPayment {
  date: string;
  type: string;
  amount: string;
  method: string;
  status: 'Completed' | 'Pending';
}

export const SBL_PROPOSALS_DATA: SblProposal[] = [
  { number: 'P001', advisorName: 'John Doe', lineOfCredit: '$100,000.00', participants: 3, status: 'Pending', createdDate: '07-25-2025', expireDate: '07-25-2027' },
  { number: 'P002', advisorName: 'Jane Smith', lineOfCredit: '$50,000.00', participants: 2, status: 'Approved', createdDate: '07-25-2025', expireDate: '07-25-2028' },
  { number: 'P003', advisorName: 'Will Harne', lineOfCredit: '$200,000.00', participants: 5, status: 'Rejected', createdDate: '07-25-2025', expireDate: '07-25-2029' },
  { number: 'P004', advisorName: 'Jack Powell', lineOfCredit: '$200,000.00', participants: 5, status: 'Expired', createdDate: '07-25-2025', expireDate: '07-25-2030' }
];

export const SBL_APPLICATIONS_DATA: SblApplication[] = [
  { number: 'A001', advisorName: 'John Doe', lineOfCredit: '$150,000.00', participants: 4, stage: 'In Review', createdDate: '07-20-2025' }
];

export const SBL_ACCOUNTS_DATA: SblAccount[] = [
  { accountNumber: 'SBL-102341', totalCreditLine: 300000, availableBalance: 210000, interestRate: '7.25%', lastWithdrawalDate: '2025-09-22', lastWithdrawalAmount: '20,000', status: 'Active' },
  { accountNumber: 'SBL-102567', totalCreditLine: 150000, availableBalance: 95000, interestRate: '7%', lastWithdrawalDate: '2025-08-18', lastWithdrawalAmount: '10,000', status: 'Active' },
  { accountNumber: 'SBL-103089', totalCreditLine: 500000, availableBalance: 500000, interestRate: '6.85%', lastWithdrawalDate: '--', lastWithdrawalAmount: '--', status: 'Inactive' }
];

export const SBL_PAYMENTS_DATA: SblPayment[] = [
  { date: '15 Sep 2025', type: 'Monthly Repayment', amount: '$5,000', method: 'ACH Transfer', status: 'Completed' },
  { date: '15 Aug 2025', type: 'Monthly Repayment', amount: '$5,000', method: 'ACH Transfer', status: 'Completed' }
];

export interface SblTransaction {
  date: string;
  type: string;
  description: string;
  debit: string;
  credit: string;
  balance: string;
}

export interface SblStatement {
  period: string;
  openingBalance: string;
  closingBalance: string;
  interestCharged: string;
}

export const SBL_TRANSACTIONS_DATA: SblTransaction[] = [
  { date: '20 Sep 2025', type: 'Draw', description: 'Transferred to HYSA Account', debit: '$10,000', credit: '--', balance: '$75,000' },
  { date: '15 Sep 2025', type: 'Payment', description: 'Monthly repayment received', debit: '--', credit: '$5,000', balance: '$65,000' }
];

export const SBL_STATEMENTS_DATA: SblStatement[] = [
  { period: 'Sep 2025', openingBalance: '$80,000', closingBalance: '$75,000', interestCharged: '$250' },
  { period: 'Aug 2025', openingBalance: '$85,000', closingBalance: '$80,000', interestCharged: '$300' }
];
