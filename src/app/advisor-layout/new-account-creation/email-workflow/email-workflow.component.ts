import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-email-workflow',
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
  templateUrl: './email-workflow.component.html',
  styleUrl: './email-workflow.component.scss'
})
export class EmailWorkflowComponent {
  constructor(private router: Router) {}

  clientName: string = 'Rajesh Kumar Sharma';
  email: string = 'rajesh.sharma@yopmail.com';
  subject: string = 'Action Required: Complete Your Credit Card Account Setup';
  attachedFiles: any[] = [];
  displaySuccessDialog: boolean = false;
  
  messageContent: string = `
    <p>Dear Rajesh Kumar Sharma,</p>
    <p>I hope you're doing well.</p>
    <p>Thank you for your continued trust in Onella Private Wealth.</p>
    <p>I'm pleased to inform you that I have initiated the Credit Card Account opening process with Bell Bank on your behalf. To complete the setup, please follow these steps:</p>
    <ol>
      <li>Check Your Email - You will receive a separate email with a login link.</li>
      <li>Click the link to access the application page, where you'll need to enter your email ID, then follow steps 2 to 5.</li>
      <li>Enter Your Email ID - Use the same email ID where you received this message.</li>
      <li>Request a Verification Code - Click "Send Code" to receive a one-time verification code.</li>
      <li>Set Your Password - Enter the received code and create a new password.</li>
      <li>Log In - Use your email ID and newly created password to access your account.</li>
    </ol>
    <p>If you have any questions or need assistance, please feel free to reach out to me at +91 99999 99999 or advisor.name@onella.com.</p>
    <br>
    <p>Best Regard,</p>
    <p>Krithikesh Iyer (Financial Advisor)...</p>
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
    this.router.navigate(['/advisor/dashboard']);
  }
}
