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



