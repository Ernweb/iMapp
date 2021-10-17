import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent implements OnInit {  
  submitted = false;
  userForm: FormGroup = this.fb.group({});
  UserProfile:any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']
  Gender: any = ['Male', 'Female', 'Others']
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.userForm = this.fb.group({
      userCode: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      branchCode: ['', [Validators.required]],	
      image: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      address: ['', [Validators.required]]
    })
  }

  // Choose designation with select dropdown
  updateProfile(e: any){
    this.userForm.get('designation')!.setValue(e, {
      onlySelf: true
    })
  }

  // Choose gender with select dropdown
  updateGender(e: any){
    this.userForm.get('gender')!.setValue(e, {
      onlySelf: true
    })
  }


  // Getter to access form control
  get myForm(){
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.userForm.valid) {
	console.log('Inside Invalid Form Failure');
      return false;
    } else {
      this.apiService.create(this.userForm.value).subscribe(
        (res) => {
          console.log('User successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/list-user'))
        }, (error) => {
          console.log(error);
        });
    return;
    }
  }

}
