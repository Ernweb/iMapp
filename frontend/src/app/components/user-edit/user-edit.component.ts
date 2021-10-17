import { User } from './../../model/User';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup = this.fb.group({});
  userData: User[] = [];
  UserProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']
  Gender: any = ['Male', 'Female', 'Others']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateUser();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getUser(id);
    this.editForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      image: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      address: ['', [Validators.required]]
    })
  }

  // Choose options with select-dropdown
  updateProfile(e: any) {
    this.editForm.get('designation')!.setValue(e, {
      onlySelf: true
    })
  }

  // Choose gender with select dropdown
  updateGender(e: any){
    this.editForm.get('gender')!.setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getUser(id: any) {
    this.apiService.getOne(id).subscribe(data => {
      this.editForm.setValue({
      firstName: data['firstName'],
      lastName: data['lastName'], 
      email: data['email'],
      designation: data['designation'],
      gender: data['gender'],
      dateOfBirth: data['dateOfBirth'],
      image: data['image'],
      mobile: data['mobile'],
      address: data['address'],
      });
    });
  }

  updateUser() {
    this.editForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      image: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      address: ['', [Validators.required]]

    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.update(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/user-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    return;
    }
  }
}
