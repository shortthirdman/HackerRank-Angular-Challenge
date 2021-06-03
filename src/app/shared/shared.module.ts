import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorModule } from './vendor/vendor.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VendorModule,
	FormsModule,
	ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    VendorModule,
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
