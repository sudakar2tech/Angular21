import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

//@Injectable({
  //providedIn: 'root'
//})
export class FileUploadService {
  // Replace with your actual backend API endpoint url
  private apiServerUrl = 'https://example.com';

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    // 'file' must match the key name expected by your backend API
    formData.append('file', file, file.name);

    return this.http.post(this.apiServerUrl, formData, {
      reportProgress: true, // Enables progress tracking tracking
      observe: 'events'     // Allows tracking of raw HTTP events
    });
  }
}