import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private oneSignal: OneSignal) { }


  configuracioninicial () {

    this.oneSignal.startInit('90b0470b-03ab-4233-9aad-6b8a4f16f5a7', '1045694554138');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    
    this.oneSignal.handleNotificationReceived().subscribe(( noti ) => {

      console.log('Notificacion recibida',noti);
     // do something when notification is received
    });
    
    this.oneSignal.handleNotificationOpened().subscribe(( noti ) => {
      
      console.log('notificacion abierta', noti);
      // do something when a notification is opened
    });
    
    this.oneSignal.endInit();
  }

}
