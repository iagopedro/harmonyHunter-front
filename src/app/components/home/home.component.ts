import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchForm = new FormGroup({
    search: new FormControl('', Validators.required),
  });

  constructor(private router: Router) { }
  
  onSubmit() {
    // Make connection with Youtube API
    // fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=' + this.searchForm.get('search')?.value + '&key=AIzaSyBlQ9TQ_lhH_at0r92wjpB9ONLsialg-Vw')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     // Handle the data from the API
    //   })
    console.log(this.searchForm.get('search')?.value);
    this.router.navigate(['/info']);
  }

}
