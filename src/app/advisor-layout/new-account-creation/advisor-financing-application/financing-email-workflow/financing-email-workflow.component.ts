import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-financing-email-workflow',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    EditorModule,
    FormsModule,
    DialogModule
  ],
  templateUrl: './financing-email-workflow.component.html',
  styleUrl: './financing-email-workflow.component.scss'
})
export class FinancingEmailWorkflowComponent {
  constructor(private router: Router) {}

  clientName: string = '18Forty8 Private Wealth India';
  email: string = 'contact@18forty8.in';
  subject: string = 'Action Required: Complete Your Advisor Financing Application';
  attachedFiles: any[] = [];
  displaySuccessDialog: boolean = false;
  
  messageContent: string = `
    <p>Dear 18Forty8 Private Wealth India Team,</p>
    <p>I hope you're doing well.</p>
    <p>Thank you for your interest in our Advisor Financing solutions.</p>
    <p>I'm pleased to inform you that I have initiated the financing application process on your behalf. To complete the setup and proceed with the loan request, please follow these steps:</p>
    <ol>
      <li>Check Your Email - You will receive a separate email with a secure link to our financing portal.</li>
      <li>Upload Required Documents - You will be prompted to upload the latest financial statements and ownership proof (Aadhaar/PAN).</li>
      <li>Verification Code - Click "Send Code" to receive a one-time verification code on your registered Indian mobile (+91-XXXXX).</li>
      <li>Review & Sign - Electronically sign the LOI (Letter of Intent) if not already done.</li>
      <li>Submit for Approval - Once all steps are complete, submit the final application.</li>
    </ol>
    <p>If you have any questions or need assistance during the process, please feel free to reach out to me.</p>
    <br>
    <p>Best Regards,</p>
    <p>Krithikesh Iyer (Financial Advisor)</p>
  `;
  
  onFilesSelected(event: any) {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.attachedFiles.push({
          name: files[i].name,
          size: (files[i].size / 1024).toFixed(2) + ' KB'
        });
      }
    }
  }

  removeAttachment(index: number) {
    this.attachedFiles.splice(index, 1);
  }

  onSend() {
    this.displaySuccessDialog = true;
  }

  onOk() {
    this.displaySuccessDialog = false;
    this.router.navigate(['/advisor/advisor-financing']);
  }
}
