import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'piral-ng/common';

import { AboutPage } from './AboutPage';

@NgModule({
  declarations: [ AboutPage],
  exports: [ AboutPage],
  imports: [SharedModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TileModule {}