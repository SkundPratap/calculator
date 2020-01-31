import { Component, OnInit } from '@angular/core';  
import { ToastrService } from 'ngx-toastr';  
import { DynamicGrid } from '../grid.model';  
  
@Component({  
  selector: 'app-grid-view',  
  templateUrl: './grid-view.component.html',  
  styleUrls: ['./grid-view.component.css']  
})  
export class GridViewComponent implements OnInit {  
  
  constructor(private toastr: ToastrService) { }  
  
  dynamicArray: Array<DynamicGrid> = [];  
  newDynamic: any = {};  
  ngOnInit(): void {  
      this.newDynamic = {title1: "", title2: "",title3:""};  
      this.dynamicArray.push(this.newDynamic);  
  }  
  
  addRow(index) {    
      this.newDynamic = {title1: "", title2: "",title3:""};  
      this.dynamicArray.push(this.newDynamic);  
      this.toastr.success('New row added successfully', 'New Row');  
      console.log(this.dynamicArray);  
      return true;  
  }  
    
  deleteRow(index) {  
      if(this.dynamicArray.length ==1) {  
        this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
          return false;  
      } else {  
          this.dynamicArray.splice(index, 1);  
          this.toastr.warning('Row deleted successfully', 'Delete row');  
          return true;  
      }  
  } 
  
  

  annualTargetPremium : number =0; 
  agentcount1: number = 1;
  agentcount2: number = 1;
  agentcount3: number = 1;
  agentcount4: number = 1;
  agentcount5: number = 1;
  agentcount6: number = 1;
  agentcount7: number = 1;
  atp1: number = 0;
  atp2: number = 0;
  atp3: number = 0;
  atp4: number = 0;
  atp5: number = 0;
  atp6: number = 0;
  atp7: number = 0;
  

  
} 

