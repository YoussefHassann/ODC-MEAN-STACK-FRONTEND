import { Component, inject, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signledish',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './signledish.component.html',
  styleUrl: './signledish.component.css'
})
export class SignledishComponent implements OnInit {
  pid= input.required();
  product:any;

  fetchdata() {
    fetch(`http://127.0.0.1:8000/products/${this.pid()}`)
      .then(response => response.json())  
      .then((data: any) => {
        this.product = data; 
      })
      
  }


ngOnInit(): void {
  this.fetchdata();
}
}