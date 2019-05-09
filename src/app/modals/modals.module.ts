import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule } from '@angular/forms';
import { HelperModule } from './../helper/helper.module';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdjustProductModalComponent } from './adjust-product/adjust-product.component';
import { ChangePasswordModalComponent } from './change-password-modal/chage-password-modal.component';
import { LocationModalComponent } from 'app/modals/location-modal/location-modal.component';
import { LocationService } from 'app/admin/location.service';
import { LoadingModalComponent } from './loading-modal/loading-modal.component';
import { EditLotExpiredComponent } from './edit-lot-expired/edit-lot-expired.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    HelperModule,
    FormsModule,
    TextMaskModule
  ],
  declarations: [
    LocationModalComponent,
    AdjustProductModalComponent,
    ChangePasswordModalComponent,
    LoadingModalComponent,
    EditLotExpiredComponent,
  ],
  exports: [
    LocationModalComponent,
    AdjustProductModalComponent,
    ChangePasswordModalComponent,
    LoadingModalComponent,
    EditLotExpiredComponent
  ],
  providers: [LocationService]
})
export class ModalsModule { }
