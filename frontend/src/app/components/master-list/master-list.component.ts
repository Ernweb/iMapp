import { Component, OnInit } from '@angular/core';
import { MasterService } from './../../service/master.service';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css']
})
export class MasterListComponent implements OnInit {

  Master:any = [];

  constructor(private masterService: MasterService) {
    this.readMaster();
  }

  ngOnInit() {}

  readMaster(){
    this.masterService.getAll().subscribe((data) => {
     this.Master= data;
    })
  }

  removeMaster(master: any, index: any) {
    if(window.confirm('Are you sure?')) {
        this.masterService.delete(master._id).subscribe((data) => {
          this.Master.splice(index, 1);
        }
      )
    }
  }

}

