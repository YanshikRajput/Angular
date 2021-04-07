import { Component, OnInit } from '@angular/core';
import { MyerrorhandelerService } from '../myerrorhandeler.service';
 
@Component({
  selector: 'app-generateerror',
  templateUrl: './generateerror.component.html',
  styleUrls: ['./generateerror.component.css']
})
export class GenerateerrorComponent implements OnInit {
 
  constructor(private handler : MyerrorhandelerService) { }
  errorVariable : any = undefined;
 
  ngOnInit(): void {
  }
  GenerateError() {
    this.errorVariable.sort();
  }
 
}