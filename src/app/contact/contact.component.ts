import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
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
}
