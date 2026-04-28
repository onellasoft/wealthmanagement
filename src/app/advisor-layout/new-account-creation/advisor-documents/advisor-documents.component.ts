import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-advisor-documents',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    TooltipModule,
    DialogModule
  ],
  templateUrl: './advisor-documents.component.html',
  styleUrl: './advisor-documents.component.scss'
})
export class AdvisorDocumentsComponent {
  constructor(private router: Router) {}
  
  currentStep: number = 2;
  selectedDoc: any = null;
  displayPreview: boolean = false;

  documents: any[] = [
    { id: 1, title: 'Investment Advisory Agreement', status: 'No Documents Uploaded', uploaded: false, fileType: '', previewUrl: '', sentForSignature: false },
    { id: 2, title: 'Customer Relationship Summary', status: 'No Documents Uploaded', uploaded: false, fileType: '', previewUrl: '', sentForSignature: false },
    { id: 3, title: 'Terms & Conditions / Privacy Policy', status: 'No Documents Uploaded', uploaded: false, fileType: '', previewUrl: '', sentForSignature: false }
  ];

  viewDocument(doc: any) {
    this.selectedDoc = doc;
    this.displayPreview = true;
  }

  triggerUpload(doc: any) {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
      (window as any).currentUploadingDocId = doc.id;
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const docId = (window as any).currentUploadingDocId;
      const doc = this.documents.find(d => d.id === docId);
      if (doc) {
        doc.status = `Uploaded: ${file.name}`;
        doc.uploaded = true;
        doc.fileType = file.type;
        
        const reader = new FileReader();
        reader.onload = (e: any) => {
          doc.previewUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
    event.target.value = '';
  }

  sendForSignature(doc: any) {
    doc.sentForSignature = true;
  }

  onNext() {
    this.router.navigate(['/advisor/new-account-creation/application-summary']);
  }
}
