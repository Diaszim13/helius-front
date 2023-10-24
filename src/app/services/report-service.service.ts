import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReportServiceService {

  constructor(private http: HttpClient) { }

  gerarRelatorio(filters: any): Observable<Blob> 
  {
    const params = new URLSearchParams(filters).toString();
    return this.http.get<Blob>(`${environment.url}generate-pdf`, {
      responseType: 'blob' as 'json'
    })
  }
}
