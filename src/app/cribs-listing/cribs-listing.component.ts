import { Component, OnInit } from '@angular/core';
import {  CribsService } from '../service/cribs.service'
import { Crib } from '../crib';

@Component({
  selector: 'app-cribs-listing',
  templateUrl: './cribs-listing.component.html',
  styleUrls: ['./cribs-listing.component.css']
})
export class CribsListingComponent implements OnInit {

  cribs;
  error:string;
  constructor(private cs:CribsService) { }

  ngOnInit(): void {
    this.cs.getAllCribs().subscribe(result => this.cribs = result,
      error => this.error = error.statusText);

      this.cs.newCribSubject.subscribe(data => this.cribs.unshift(data)
      )



  }

}
