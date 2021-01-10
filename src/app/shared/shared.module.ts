import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorModule } from './vendor/vendor.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VendorModule
  ],
  exports: [
    CommonModule,
    VendorModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
