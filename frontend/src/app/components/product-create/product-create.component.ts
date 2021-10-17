import { Router } from '@angular/router';
import { MasterService } from './../../service/master.service';
import { ProductService } from './../../service/product.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  submitted = false;
  productForm: FormGroup = this.fb.group({});
  Master:any = [];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private productService: ProductService,
    private masterService: MasterService
  ) {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.productForm = this.fb.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      price: [0, [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]]
    })
this.readMaster();
  }

  // Choose category with select dropdown
  updateCategory(e: any){
    this.productForm.get('category')!.setValue(e, {
      onlySelf: true
    })
  }

//read category from the Master
  readMaster(){
    this.masterService.getAll().subscribe((data) => {
     this.Master= data;
    })
  }

// Getter to access form control
  get myForm(){
    return this.productForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.productForm.valid) {
        console.log('Inside Invalid Form Failure');
      return false;
    } else {
      this.productService.create(this.productForm.value).subscribe(
        (res) => {
          console.log('User successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/list-product'))
        }, (error) => {
          console.log(error);
        });
    return;
    }
  }

}
