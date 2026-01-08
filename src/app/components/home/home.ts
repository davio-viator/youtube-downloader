import { Component, NgZone, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import axios from 'axios'
import { Convertor } from '../convertor/convertor';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, Convertor],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  videoData = {
    link: '',
    name: 'She converted to Islam and now wants to change it..',
    author: 'Asmongold Clips',
    duration: '157',
    thumbnail:'https://i.ytimg.com/vi_webp/W7CbjY_MDGQ/maxresdefault.webp',
    startTime: '',
    endTime: '',
    size: [null,27,45,90,144,180,240,360,480,720,1080]
  }

  displayConvertor = signal(true)
  pending = signal(false)

  constructor(private http: HttpClient, private ngZone: NgZone) {}

  forceToggle() {
    this.pending.set(!this.pending);
    this.displayConvertor.set(!this.displayConvertor);
    console.log('forceToggle clicked');
  }


  async testSubmit() {
    this.pending.set(true)
    
    let data: any = null
    try {
      const response:any = await axios.get('http://localhost:4000/api/v1/get-info',{
        params: {
          link:this.videoData.link
        }
      })
        this.displayConvertor.set(true)
        data = response.data
        this.videoData.name = data.title
        this.videoData.author = data.creator
        this.videoData.duration = data.duration
        this.videoData.thumbnail = data.thumbnail;
        this.videoData.size = data.qualities
    } catch (error) {
      // this.pending = false
      console.error(error)
    }
    finally {
        this.pending.set(false)
      console.log("done")
    }
  }


}
