import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLinkActive,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  productarray: any[] = [];

  fetchdata() {
    fetch('http://127.0.0.1:8000/products')
      .then(response => response.json())  
      .then((data: any) => {
        this.productarray = data;
      })
      
  }

  ngOnInit(): void {
    this.fetchdata(); 
  }
}