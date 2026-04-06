import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface NavItem {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-admin-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class AdminSidebarComponent {
  isExpanded = false;

  navItems: NavItem[] = [
    { icon: 'pi pi-chart-bar', label: 'Dashboard', route: '/admin/dashboard' },
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
