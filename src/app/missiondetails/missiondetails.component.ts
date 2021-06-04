import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  // Store the API data
  data: any = [];

  // Store flight_number / ID
  flight_id: any

  constructor(private router: Router, private http: HttpClient, private ActivatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const URL_API = "https://api.spacexdata.com/v3/launches"
    this.http.get(URL_API).subscribe((res) => {
      // Storing API info into 'data' array
      this.data = res
    })

    // Get the flight number that was selected
    this.flight_id = this.ActivatedRouter.snapshot.paramMap.get('id');
  }

  goBack() {
    this.router.navigateByUrl('/list-details');
  }
}
