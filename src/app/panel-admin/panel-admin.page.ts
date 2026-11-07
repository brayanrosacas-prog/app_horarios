import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonButtons, IonMenuButton, IonIcon, IonButton,
  IonGrid, IonRow, IonCol, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent 
} from '@ionic/angular';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.page.html',
  styleUrls: ['./panel-admin.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonButtons, IonMenuButton, IonIcon, IonButton,
    IonGrid, IonRow, IonCol, IonCard, IonCardHeader,
    IonCardTitle, IonCardContent
  ]
})
export class PanelAdminPage implements OnInit {
  
  constructor(private router: Router) {}

  ngOnInit() {
  }

  irARegistro(modulo: string) {
    console.log('Ir a:', modulo);
    // this.router.navigate([`/${modulo}`]); 
  }
}