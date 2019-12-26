import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { HomePageModule } from '../home/home.module';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'qr-scan',
        children: [
          {
            path: '',
            loadChildren: '../qr-scan/qr-scan.module#QrScanPageModule'
          }
        ]
      },
      {
        path: 'consume',
        children: [
          {
            path: '',
            loadChildren: '../consume-api/consume-api.module#ConsumeAPIPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tab/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
