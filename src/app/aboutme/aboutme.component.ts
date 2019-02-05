import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  basics: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getBasics().subscribe(
      data => {
        this.basics = data
      }
    )
  }

}
