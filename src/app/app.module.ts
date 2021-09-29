import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GatewayComponent } from './components/gateway/gateway.component';
import { DeviceComponent } from './components/device/device.component';
import { GatewayBoardComponent } from './components/gateway-board/gateway-board.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GatewayComponent,
    DeviceComponent,
    GatewayBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
