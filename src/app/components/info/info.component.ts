import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  imports: [
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  constructor(private router: Router) { };

  goBack() {
    this.router.navigate(['home']);
  }
}
