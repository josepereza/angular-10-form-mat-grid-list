import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  breakpoint: number;

  constructor(public service: EmployeeService,breakpointObserver: BreakpointObserver) { 
    this.breakpoint=6;
    breakpointObserver.observe([
      Breakpoints.Large,
      Breakpoints.Medium,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.matches) {
        this.breakpoint=2;
      }else {
        this.breakpoint=1;
      }
    });
  }
  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }];


  ngOnInit(): void {
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
