import { Component, OnInit } from '@angular/core';
import { FacultiesServiceService } from '../faculties-service.service';
import { Faculty } from '../Faculty';
@Component({
  selector: 'app-faculties-list',
  templateUrl: './faculties-list.component.html',
  styleUrls: ['./faculties-list.component.css']
})

export class FacultiesListComponent implements OnInit {

  constructor(private facultiesService : FacultiesServiceService) { }
  faculties : Faculty[];
  ngOnInit(): void {
    this.faculties = this.facultiesService.getAll();
  }

}
