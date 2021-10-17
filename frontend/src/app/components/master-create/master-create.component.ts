import { Router } from '@angular/router';
import { MasterService } from './../../service/master.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-master-create',
  templateUrl: './master-create.component.html',
  styleUrls: ['./master-create.component.css']
})
export class MasterCreateComponent implements OnInit {
  submitted = false;
  masterForm: FormGroup = this.fb.group({});
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private masterService: MasterService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.masterForm = this.fb.group({
      category: ['', [Validators.required]]
    })
  }
  // Getter to access form control
  get myForm(){
    return this.masterForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.masterForm.valid) {
	console.log('Inside Invalid Form Failure');
      return false;
    } else {
      this.masterService.create(this.masterForm.value).subscribe(
        (res) => {
          console.log('Master successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/list-master'))
        }, (error) => {
          console.log(error);
        });
    return;
    }
  }

}
