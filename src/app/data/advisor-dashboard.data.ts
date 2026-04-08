export interface AdvisorDashboardData {
  accountTracker: any[];
  liquidityRates: any[];
  overview: {
    totalBalance: string;
    averageBalance: string;
    numAccounts: number;
    accountsOpenedChart: any;
    topClientsChart: any;
    clientBalances: any[];
  };
  cashFlow: {
    inflows: string;
    outflows: string;
    netCashFlow: string;
    cashFlowChart: any;
    transactions: any[];
  };
}

export const DASHBOARD_DATA: AdvisorDashboardData = {
  accountTracker: [
    {
      id: 1,
      name: 'Mr. Rajesh Sharma',
      type: 'Primary',
      advisor: 'Vikram Malhotra',
      daysSinceStart: 6,
      avatar: 'RS',
      status: {
        advisorsAgreements: 'error', // 'error', 'pending', 'complete', 'not-started'
        personalDetails: 'pending',
        kycStatus: 'pending',
        bankAgreements: 'not-started',
        additionalInfo: 'not-started',
        openAccount: 'not-started',
        accountFunding: 'not-started'
      }
    },
    {
      id: 2,
      name: 'Amit Gupta',
      type: 'Primary',
      advisor: 'Vikram Malhotra',
      daysSinceStart: 6,
      avatar: 'AG',
      status: {
        advisorsAgreements: 'pending',
        personalDetails: 'not-started',
        kycStatus: 'not-started',
        bankAgreements: 'not-started',
        additionalInfo: 'not-started',
        openAccount: 'not-started',
        accountFunding: 'not-started'
      }
    }
  ],
  liquidityRates: [
    { label: 'Effective Fund Rate', date: '01-15-2026', rate: '3.6%' },
    { label: 'SOFR', date: '01-15-2026', rate: '3.7%' },
    { label: '30-Day Average SOFR', date: '01-16-2026', rate: '3.7%' },
    { label: '90-Day Average SOFR', date: '01-16-2026', rate: '3.9%' },
    { label: '180-Day Average SOFR', date: '01-16-2026', rate: '4.1%' }
  ],
  overview: {
    totalBalance: '₹1,923,709.00',
    averageBalance: '₹10,512.00',
    numAccounts: 183,
    accountsOpenedChart: {
      data: [
        { value: 5, name: '9' },
        { value: 5, name: '0' },
        { value: 5, name: '1' },
        { value: 5, name: '2' }
      ]
    },
    topClientsChart: {
      categories: ['Mr. Aditya Rao', 'Mr. Vikram Singh', 'Meena Kumari', 'Mr. Sanjay Kumar', 'Mr. Nishant Shah', 'Mr. Arjun Reddy', 'Mr. Deepak Sinha', 'Mrs. Sunita Patel', 'Mr. Rohan Deshmukh', 'Mrs. Kavita Iyer'],
      data: [780000, 650000, 420000, 210000, 150000, 80000, 40000, 30000, 20000, 10000]
    },
    clientBalances: [
      { name: 'Mr. Aditya Rao', balance: '₹802,622.67', initials: 'A', color: '#93aed2' },
      { name: 'Mr. Vikram Singh', balance: '₹651,900.30', initials: 'V', color: '#93aed2' },
      { name: 'Meena Kumari', balance: '₹421,289.44', initials: 'M', color: '#93aed2' },
      { name: 'Mr. Sanjay Kumar', balance: '₹150,120.35', initials: 'S', color: '#93aed2' },
      { name: 'Mr. Nishant Shah', balance: '₹1,054.22', initials: 'N', color: '#93aed2' },
      { name: 'Mr. Arjun Reddy', balance: '₹1,051.40', initials: 'A', color: '#93aed2' }
    ]
  },
  cashFlow: {
    inflows: '₹400,010.00',
    outflows: '₹0.00',
    netCashFlow: '₹400,010.00',
    cashFlowChart: {
      categories: ['Jan26'],
      inflows: [400010],
      outflows: [0]
    },
    transactions: [
      { type: 'INDIVIDUAL', id: 'XXXXX6768', date: '10-25-2025', amount: '₹60.00', status: 'Pending', color: '#4caf50' },
      { type: 'INDIVIDUAL', id: 'XXXXX6768', date: '10-25-2025', amount: '₹50.00', status: 'Pending', color: '#4caf50' },
      { type: 'Joint Acco...', id: 'XXXXX6722', date: '10-25-2025', amount: '₹30.00', status: 'Pending', color: '#4caf50' },
      { type: 'Joint Acco...', id: 'XXXXX6722', date: '10-25-2025', amount: '₹60.00', status: 'Pending', color: '#4caf50' },
      { type: 'Joint Acco...', id: 'XXXXX6722', date: '10-25-2025', amount: '₹50.00', status: 'Pending', color: '#4caf50' }
    ]
  }
};
