import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [HttpClientModule],  // Import HttpClientModule here
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']  // Corrected from styleUrl to styleUrls
})
export class SignInComponent {
  [x: string]: any;
  data: any = {};
  http = inject(HttpClient);

  submitForm(e: any) {
    e.preventDefault();  

    const formData = new FormData(e.target);  

    formData.forEach((value, key) => {
      this.data[key] = value; 
    });

    localStorage.setItem('formData', JSON.stringify(this.data));
    this.http.post('http://127.0.0.1:8000/users/login', formData)
      .subscribe(resp => console.log(resp));

    console.log("Form data saved to localStorage:", this.data); 
  }
}
