import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private baseUrl = 'http://localhost:8080/imagecurd';

  constructor(public http: HttpClient) { }

  // uploadImage(file: File, customName: string, description: string): Observable<any> {
  //   const formData: FormData = new FormData();
  //   formData.append('file', file);
  //   formData.append('name', customName);
  //   formData.append('description', description);

  //   return this.http.post(`${this.baseUrl}/upload`, formData, { responseType: 'text' });
  // }

  uploadImage(files: File[], customName: string, description: string) {
    const formData = new FormData();
    for (let file of files) {
      formData.append("files", file);
    }
    formData.append("name", customName);
    formData.append("description", description);
  
    return this.http.post('http://localhost:8080/imagecurd/upload-multiple', formData);
  }
  

  getAllImages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }
}
