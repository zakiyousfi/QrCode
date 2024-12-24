import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title: string = 'Qrcode';
 url:SafeUrl=''
public Qrcodetext!: string;
public myAngularxQrCode: string = "";
public qrCodeDownloadLink!: SafeUrl | undefined; constructor() {
this.myAngularxQrCode = 'Your QR code data string';
}
ngOnInit(): void {
}
onChangeURL(url: SafeUrl) :void{
console.log(url);
this.url= url;
}
  
}
