import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface NavItem {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-advisor-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class AdvisorSidebarComponent {
  isExpanded = false;

  navItems: NavItem[] = [
    { icon: 'pi pi-chart-bar', label: 'Dashboard', route: '/advisor/dashboard' },
    { icon: 'pi pi-objects-column', label: 'Solutions Hub', route: '/advisor/solutions' },
    { icon: 'pi pi-users', label: 'Clients', route: '/advisor/clients' },
    { icon: 'pi pi-wallet', label: 'Deposit Accounts', route: '/advisor/deposit-accounts' },
    { icon: 'pi pi-home', label: 'Mortgage', route: '/advisor/mortgage' },
    { icon: 'pi pi-shield', label: 'Advisor Financing', route: '/advisor/advisor-financing' },
    { icon: 'pi pi-check-circle', label: 'Life Settlements', route: '/advisor/life-settlements' },
    { icon: 'pi pi-credit-card', label: 'Credit Card', route: '/advisor/credit-card' },
    { icon: 'pi pi-file', label: 'SBL', route: '/advisor/sbl' },
  ];

  constructor(private router: Router) {}

  get activeIndex(): number {
    const url = this.router.url;
    const idx = this.navItems.findIndex(item => url.startsWith(item.route));
    return idx >= 0 ? idx : 0;
  }

  navigate(item: NavItem) {
    this.router.navigateByUrl(item.route);
  }

  onMouseEnter() { this.isExpanded = true; }
  onMouseLeave() { this.isExpanded = false; }

  logout() {
    console.log('Logout clicked');
  }
}
