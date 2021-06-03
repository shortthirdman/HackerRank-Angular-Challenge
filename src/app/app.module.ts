import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule, routeComponents } from './app-routing.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { HackerRankService } from './shared/services/hacker-rank.service';


@NgModule({
  declarations: [
    AppComponent,
    routeComponents
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	CommonModule,
	FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

	FontAwesomeModule,

	SharedModule,
	AppRoutingModule
  ],
  providers: [HackerRankService, DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

	constructor(library: FaIconLibrary) {
		library.addIconPacks(fas, far, fab);
	}
}
