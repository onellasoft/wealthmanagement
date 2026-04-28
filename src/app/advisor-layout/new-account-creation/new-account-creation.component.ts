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
      image: 'assets/images/premium-credit-card.png',
      buttonLabel: 'Start Application',
      buttonIcon: 'pi pi-plus',
      link: '/advisor/new-account-creation/credit-card'
    },
    {
      title: 'Mortgage, Refinancing, & HELOC',
      description: 'Easily open your mortgage account to manage payments and access loan details securely.',
      image: 'assets/images/premium-mortgage.png',
      buttonLabel: 'Start Application',
      buttonIcon: 'pi pi-plus',
      link: '/advisor/mortgage'
    }
  ];
}
