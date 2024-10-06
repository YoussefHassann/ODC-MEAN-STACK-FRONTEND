import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  data: any = {};
  // http=inject(HttpClient)

  submitForm(e: any) {
    e.preventDefault();  

    const formData = new FormData(e.target);  

    
    formData.forEach((value, key) => {
      this.data[key] = value; 

      // this.http.post('link',this.data)
      // .subscribe(resp=>console.log(resp));
    });

   
    localStorage.setItem('formData', JSON.stringify(this.data));

    console.log("Form data saved to localStorage:", this.data); 
  }
}
