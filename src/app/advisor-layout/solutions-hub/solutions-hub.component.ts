import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PRIME_NG_MODULES } from '../../prime-ng-modules';

interface Product {
  id: number;
  title: string;
  provider: string;
  providerIcon: string;
  description: string;
  illustration: string;
  category: string;
  brand: string;
}

@Component({
  selector: 'app-solutions-hub',
  standalone: true,
  imports: [CommonModule, FormsModule, ...PRIME_NG_MODULES],
  templateUrl: './solutions-hub.component.html',
  styleUrl: './solutions-hub.component.scss'
})
export class SolutionsHubComponent implements OnInit {
  selectedBrand: string = 'All';
  selectedCategory: string = 'All Products';

  brands: string[] = ['All', 'Bell Bank', 'Sage Home Loan', 'Academy Bank', 'American Express', 'Coventry'];
  categories: string[] = ['All Products', 'Cash Management', 'Advisor Financing', 'Securities-Backed Lending', 'Real Estate Lending', 'Credit Cards', 'Insurance Solutions'];

  allProducts: Product[] = [
    {
      id: 1,
      title: 'Advisor Financing',
      provider: 'Bell Bank',
      providerIcon: 'pi pi-building',
      description: 'Access flexible financing options tailored to support business growth, acquisitions, or strategic opportunities.',
      illustration: 'assets/advisor-financing.png', // Generating icons later
      category: 'Advisor Financing',
      brand: 'Bell Bank'
    },
    {
      id: 2,
      title: 'High Yield Savings Account',
      provider: 'Bell Bank',
      providerIcon: 'pi pi-building',
      description: 'Create your HYSA account easily and start saving with high interest rates and secure online access.',
      illustration: 'assets/hysa.png',
      category: 'Cash Management',
      brand: 'Bell Bank'
    },
    {
      id: 3,
      title: 'Mortgage, Refinancing, & HELOC',
      provider: 'Sage Home Loan',
      providerIcon: 'pi pi-home',
      description: 'Easily open your mortgage account to manage payments and access loan details securely.',
      illustration: 'assets/mortgage.png',
      category: 'Real Estate Lending',
      brand: 'Sage Home Loan'
    },
    {
      id: 4,
      title: 'Securities-Backed Loan',
      provider: 'Bell Bank',
      providerIcon: 'pi pi-building',
      description: 'A flexible financing solution using securities as collateral without liquidating your investment portfolio.',
      illustration: 'assets/sbl.png',
      category: 'Securities-Backed Lending',
      brand: 'Bell Bank'
    }
  ];

  filteredProducts: Product[] = [];

  ngOnInit(): void {
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.allProducts.filter(p => {
      const matchBrand = this.selectedBrand === 'All' || p.brand === this.selectedBrand;
      const matchCategory = this.selectedCategory === 'All Products' || p.category === this.selectedCategory;
      return matchBrand && matchCategory;
    });
  }

  selectBrand(brand: string) {
    this.selectedBrand = brand;
    this.filterProducts();
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterProducts();
  }
}
