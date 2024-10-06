import { NgStyle } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, Injectable, } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

@Injectable({
  providedIn: 'root'
})
export class RegisterComponent {
  data: any = {};


  submitForm(e: any) {
    e.preventDefault();  

    const formData = new FormData(e.target);  

    
    formData.forEach((value, key) => {
      this.data[key] = value;  
    });

   
    localStorage.setItem('formData', JSON.stringify(this.data));

    console.log("Form data saved to localStorage:", this.data); 
  }

  private apiUrl = 'http://localhost:8000/users/register';

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, userData);
  }
  
}
