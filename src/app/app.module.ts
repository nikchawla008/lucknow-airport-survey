import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import {NgOptimizedImage, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NzRadioModule} from "ng-zorro-antd/radio";
import { NzButtonModule } from 'ng-zorro-antd/button';
import {NzTreeSelectModule} from "ng-zorro-antd/tree-select";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzSelectModule} from "ng-zorro-antd/select";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzInputModule,
    NgbModule,
    NzRadioModule,
    NzButtonModule,
    NzSelectModule,
    NzTreeSelectModule,
    NzInputNumberModule,
    NzModalModule,
    NgOptimizedImage,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
