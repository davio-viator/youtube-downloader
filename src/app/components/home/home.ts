import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios'

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
    axios.get(`http://localhost:4000/api/v1/get-info?link=${this.videoData.link}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(()=> {
        console.log("idk")
      })
    return false;
  }


}
