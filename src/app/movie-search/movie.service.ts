import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = environment.omdbApiUrl;
  private apiKey = environment.omdbApiKey;

  constructor(private http: HttpClient) {}

  searchMovies(searchTerm: string): Observable<any> {
    const params = new HttpParams()
      .set('s', searchTerm)  
      .set('apikey', this.apiKey); 
  
    console.log('API URL:', this.apiUrl);
  
    return this.http.get(this.apiUrl, { params });
  }

}
