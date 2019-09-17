import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  currentImage: any;
  constructor(private camera : Camera) {}

  majors = [
    new Major('computer', '计算机', '/assets/icon/command-line.svg'),
    new Major('aircraft','航天航空', '/assets/icon/aircraft.svg'),
    new Major('tour', '旅游管理', '/assets/icon/cocktail.svg'),
    new Major('phylosophy', '哲学', '/assets/icon/compass.svg'),
    new Major('economic','经济学', '/assets/icon/hotel.svg'),
    new Major('land', '地质学', '/assets/icon/map.svg'),
    new Major('trade', '贸易经济学', '/assets/icon/tickets.svg'),
    new Major('machine', '机械', '/assets/icon/android.svg')
  ]

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
    });
  }

}

class Major {
  constructor(
    public name: string,
    public title: string,
    public imgUrl: string) { }
}