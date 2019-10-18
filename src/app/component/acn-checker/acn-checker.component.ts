import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'acn-checker',
  templateUrl: './acn-checker.component.html',
  styleUrls: ['./acn-checker.component.scss']
})
export class AcnCheckerComponent implements OnInit {

  //variable for text-box
  txtbox_acn: string;
  acn_validate: boolean;
  acn_valid : boolean;
  acn_msg : string;

  constructor() { }

  ngOnInit() {

    //define txtbox_acn
    this.txtbox_acn = '';

    //
    this.acn_valid = false;
    this.acn_validate = false;
    this.acn_msg = 'test';

  }

  //if user keypress on textbox
  charRules(event): boolean {

    //detect charcode pressed by user
    const charCode = (event.which) ? event.which : event.keyCode;

    //set max input
    let maxInput = this.txtbox_acn.replace(/\s+/g, '').length < 9;

    //set allowerd char code
    let allowedCharCode = (charCode >= 48 && charCode <=57);

    //allowed space
    let allowedSpace = (this.txtbox_acn.length > 0 && charCode === 32 && this.txtbox_acn.replace(/\s+/g, '').length%3 === 0 && this.txtbox_acn.slice(-1) !== ' ')

    //validate max input + allowed char code & allowed space
    if(maxInput && (allowedCharCode || allowedSpace)){

      if(this.txtbox_acn.replace(/\s+/g, '').length === 6 && this.txtbox_acn.charAt(3) === ' '){
        if(charCode !== 32 && this.txtbox_acn.slice(-1) !== ' '){
          this.txtbox_acn = this.txtbox_acn + ' ';
        }
      }
      return true;
    }

    return false;

  }

  //ACN checker
  acnCheck(): void{
    let acn = this.txtbox_acn.replace(/\s+/g, '').split('').map(Number);
    let weight = [8,7,6,5,4,3,2,1]
    let sum = 0;
    
    weight.forEach(function (value, index){
      sum += value * acn[index];
    })

    //display msg
    this.acn_validate = true;

    //determine acn valid / invalid
    this.acn_valid = (((10 - (sum%10))%10) === acn[8]) ? true : false;

    //show msg
    if(this.txtbox_acn.replace(/\s+/g, '').length < 9){
      this.acn_msg = 'Please input your complete ACN number';
    }else if(this.acn_valid){
      this.acn_msg = 'ACN is valid!';
    }else{
      this.acn_msg = 'ACN is invalid!';
    }

  }

}
