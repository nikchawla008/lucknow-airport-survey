import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LucknowAirportRoutingModule} from './lucknow-airport-routing.module';
import {SurveyComponent} from './survey/survey.component';

import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    SurveyComponent
  ],
	imports: [
		CommonModule,
		LucknowAirportRoutingModule,
    SharedModule
	]
})
export class LucknowAirportModule { }
