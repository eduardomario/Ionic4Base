import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.page.html',
  styleUrls: ['./qr-scan.page.scss'],
})
export class QrScanPage implements OnInit {

  qrData = 'https://ionicacademy.com/';
  scannedCode = null;
  elementType: 'url' | 'canvas' | 'img' = 'canvas';

  constructor(
    private barcodeScanner: BarcodeScanner,
    private base64ToGallery: Base64ToGallery,
    private diagnostic: Diagnostic,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  scanCode() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.scannedCode = JSON.stringify(JSON.parse(barcodeData.text));
        console.log('QR Code', this.scannedCode);
      }
    );
  }

  downloadQR() {
    this.checkPermission();
  }

  checkPermission() {
    const permissionStatus = this.diagnostic.permissionStatus;
    this.diagnostic.getExternalStorageAuthorizationStatus()
      .then((state) => {
        switch (state) {
          case permissionStatus.GRANTED:
            console.log('Permission granted to use the storage');
            this.saveImage();
            break;
          case permissionStatus.NOT_REQUESTED:
            this.askPermission();
            console.log('Permission not requested to use the storage - ask');
            break;
          case permissionStatus.DENIED_ONCE:
            this.askPermission();
            console.log('Permission denied to use the storage - ask again?');
            break;
          case permissionStatus.DENIED_ALWAYS:
            console.log('Permission permanently to use the storage');
            break;
          default:
            console.log('Permission not requested to use the storage - ask');
            this.askPermission();
            break;
        }
      }).catch(e => console.error(e));
  }

  askPermission() {
    const permission = this.diagnostic.permission;
    this.diagnostic.requestRuntimePermission(permission.WRITE_EXTERNAL_STORAGE).then(
      success => {
        console.log('reuqestStorageAuthroization, success', success);
        this.saveImage();
      },
      error => {
        console.log('reuqestStorageAuthroization, error', error);
      },
    );
  }

  saveImage() {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const imageData = canvas.toDataURL('image/jpeg').toString();

    console.log('data: ', imageData);

    const data = imageData.split(',')[1];

    this.base64ToGallery.base64ToGallery(data,
      { prefix: 'qr_image', mediaScanner: true})
      .then(async res => {
        const toast = await this.toastCtrl.create({
          header: 'QR Code saved in your Photo Library',
          duration: 2000
        });
        toast.present();
      }, err => {
        console.log('Error: ', err);
      }
    );
  }

}
