import { Master } from './../../model/Master';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MasterService } from './../../service/master.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-master-edit',
  templateUrl: './master-edit.component.html',
  styleUrls: ['./master-edit.component.css']
})
export class MasterEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup = this.fb.group({});
  masterData: Master[] = [];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private masterService: MasterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateMaster();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getMaster(id);
    this.editForm = this.fb.group({
      category: ['', [Validators.required]]
    })
  }

// Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getMaster(id: any) {
    this.masterService.getOne(id).subscribe(data => {
      this.editForm.setValue({
      category: data['category'],
      });
    });
  }

  updateMaster() {
    this.editForm = this.fb.group({
      category: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.masterService.update(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/list-master');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    return;
    }
  }
}
