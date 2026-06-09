import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpEventType, HttpEvent } from '@angular/common/http';
import { FileUploadService } from './fileuploadservice';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fileuploadcomponent.html',
  styleUrls: ['./fileuploadcomponent.css']
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  uploadProgress: number = 0;
  message: string = '';
  isUploading: boolean = false;

  constructor(private fileUploadService: FileUploadService) {}

  // Captured when the user selects a file from the local file system
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.uploadProgress = 0;
      this.message = '';
    }
  }

  // Executes when clicking the upload button
  onUpload(): void {
    if (!this.selectedFile) {
      this.message = 'Please select a file first!';
      return;
    }

    this.isUploading = true;
    this.message = '';

    this.fileUploadService.uploadFile(this.selectedFile).subscribe({
      next: (event: HttpEvent<any>) => {
        // Track the upload progress calculations
        if (event.type === HttpEventType.UploadProgress && event.total) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total));
        } 
        // File upload complete response received
        else if (event.type === HttpEventType.Response) {
          this.message = 'File uploaded successfully!';
          this.isUploading = false;
          this.selectedFile = null;
        }
      },
      error: (err) => {
        console.error(err);
        this.message = 'Could not upload the file!';
        this.isUploading = false;
        this.uploadProgress = 0;
      }
    });
  }
}