import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrScanPage } from './qr-scan.page';
import { RouterModule, Routes } from '@angular/router';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';

const routes: Routes = [
  {
    path: '',
    component: QrScanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxQRCodeModule
  ],
  declarations: [QrScanPage],
  providers: [BarcodeScanner, Base64ToGallery, Diagnostic]
})
export class QrScanPageModule {}
