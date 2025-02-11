import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor( private spinner: NgxSpinnerService){}

  ngOnInit(): void {

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);

  }

}
