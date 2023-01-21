import { MachineDetailsModule } from './machine-details/machine-details.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MachineDetailsPipe } from './machine-details.pipe';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    MachineDetailsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatTreeModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MachineDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
