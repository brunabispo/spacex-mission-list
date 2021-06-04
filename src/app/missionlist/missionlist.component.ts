import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})

export class MissionlistComponent implements OnInit {

  data: any;

  constructor(private router: Router, private http: HttpClient) {

  }

  ngOnInit(): void {
    const URL_API = "https://api.spacexdata.com/v3/launches"
    this.http.get(URL_API).subscribe((res) => {
      // Storing API info into 'data' array
      this.data = res
    })
  }
}

