import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device';

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.css']
})
export class GatewayComponent implements OnInit {
  gateWayid:number = 1;
  devices: Device[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
