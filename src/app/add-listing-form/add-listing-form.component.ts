import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { CribsService } from './../service/cribs.service'

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit{

  propertyTypes: Array<string> = ['Hause','Condo','Duplex'];
  @ViewChild('newCribForm') resetForm;


  constructor(public cs:CribsService) { }

  ngOnInit(): void {
  }

  onCribSubmit(data){
    this.cs.addCrib(data);
    this.resetForm.reset();
  }
}
