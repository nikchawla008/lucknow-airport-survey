import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from "@angular/material/stepper";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import {NzCardModule} from "ng-zorro-antd/card";
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NzRadioModule} from "ng-zorro-antd/radio";
import { NzButtonModule } from 'ng-zorro-antd/button';
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzTreeSelectModule} from "ng-zorro-antd/tree-select";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzSpaceModule} from "ng-zorro-antd/space";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    HttpClientModule,
    NzCardModule,
    NzInputModule,
    NgbModule,
    NzRadioModule,
    NzButtonModule,
    NzSelectModule,
    NzTreeSelectModule,
    NzInputNumberModule,
    NzSpaceModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
