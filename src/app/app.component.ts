import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {delay} from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'HabileUI';
  companyForm: FormGroup;
  navState:boolean =false;
  constructor(private _formBuilder: FormBuilder,private observer:BreakpointObserver) {}
  ngAfterViewInit(): void {
   this.observer.observe('(max-width : 640px)').pipe(delay(0)).subscribe((data) =>{
    if(data.matches){
      this.navState=true;
    }else{
      this.navState=false;
    }
   })
  }

  ngOnInit() {
    this.companyForm = this._formBuilder.group({
      propertyName: ['', Validators.required],
      propertyType: ['', Validators.required],
      noOfUnits:['', Validators.required],
      propertAddress:['', Validators.required],
      fileAttachment:['']
    });
   
  //   if (window.innerWidth >= 768) {
  //     document.querySelectorAll('form > label').forEach(function (el) {
  //         var wrapper = document.createElement('div');
  //         var input = el.nextElementSibling;
  //         el.parentNode.insertBefore(wrapper, el);
  //         wrapper.appendChild(el);
  //         wrapper.appendChild(input);
  //     });
  // }
  }
  details(){
    console.log(this.companyForm.value)
  }
}
