import { Product } from './../../model/Product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MasterService } from './../../service/master.service';
import { ProductService } from './../../service/product.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup = this.fb.group({});
  productData: Product[] = [];
  Master:any = [];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private productService: ProductService,
    private masterService: MasterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateProduct();
    let id = this.actRoute.snapshot.paramMap.get('id');
console.log('id='+id);
    this.getProduct(id);
    this.readMaster();
    this.editForm = this.fb.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      price: [0, [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
    })
  }

// Choose category with select dropdown
  updateCategory(e: any){
    this.editForm.get('category')!.setValue(e, {
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
    return this.editForm.controls;
  }

  getProduct(id: any) {
    this.productService.getOne(id).subscribe(data => {
      this.editForm.setValue({
      code: data['code'],
      name: data['name'],
      price: data['price'],
      category: data['category'],
      description: data['description'],
      image: data['image']
      });
    });
  }

  updateProduct() {
    this.editForm = this.fb.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      price: [0, [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]]
    })
  }   

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.productService.update(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/list-product');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    return;
    }
  }
}
