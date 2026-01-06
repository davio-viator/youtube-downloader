import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  videoData = {
    link: '',
    name: '',
    auhor: '',
    startTime: '',
    endTime: '',
  }

  constructor() {}


  testSubmit(event:Event) {
    event.preventDefault();
    console.log(`the link is ${this.videoData.link}`);
    // this.ytdlService.downloadVideo(this.videoData.link, {});
    return false
  }


}
