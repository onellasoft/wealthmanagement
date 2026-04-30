import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-new-account-creation',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './new-account-creation.component.html',
  styleUrl: './new-account-creation.component.scss'
})
export class NewAccountCreationComponent {
  cards = [
    {
      title: 'Credit Cards',
      description: 'A financial tool that allows users to borrow funds for purchases up to a set limit, offering convenience, rewards, and short-term credit flexibility.',
      image: 'assets/images/hub/credit-cards.png',
      buttonLabel: 'Start Application',
      buttonIcon: 'pi pi-plus',
      link: '/advisor/new-account-creation/credit-card'
    },
    {
      title: 'Home loan',
      description: 'Easily open your mortgage account to manage payments and access loan details securely.',
      image: 'assets/images/hub/mortgage.png',
      buttonLabel: 'Start Application',
      buttonIcon: 'pi pi-plus',
      link: '/advisor/new-account-creation/sage-loan'
    },
    {
      title: 'Advisor Financing',
      description: 'Access flexible financing options tailored to support business growth, acquisitions opportunities.',
      image: 'assets/images/hub/advisor-financing.png',
      buttonLabel: 'Start Application',
      buttonIcon: 'pi pi-plus',
      link: '/advisor/new-account-creation/advisor-financing'
    }
  ];
}
