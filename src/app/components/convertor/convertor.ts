import { Component, Input, signal  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convertor',
  imports: [FormsModule],
  templateUrl: './convertor.html',
  styleUrl: './convertor.scss',
})

export class Convertor {

  @Input() videoData: any;
  selectedFormat = 'MP3'
  detailsOpen = signal(false)
  defaultSaveName = ''
  originalVideoData = null

  convertDuration(duration:number) {
    let minutes = Math.floor(duration/60)
    let seconds = duration%60 < 10 ? '0'+duration%60 : duration%60
    return `${minutes}:${seconds}`;
  }

  openDetails() {
    if(this.originalVideoData === null) {
      this.originalVideoData = this.videoData
    }
    this.detailsOpen.set(true);
    this.defaultSaveName = `${this.videoData.author}|${this.videoData.name}`
  }

  closeDetails() {
    this.detailsOpen.set(false);
  }

  selectCover(event:any) {
    console.log(event.target.id);
    const targetId = event.target.id
    if(targetId === "default-cover") {
      document.getElementById(targetId)?.classList.add("selected")
      document.getElementById('choose-cover')?.classList.remove("selected")
    }
    if(targetId === 'choose-cover') {
      document.getElementById(targetId)?.classList.add("selected")
      document.getElementById('default-cover')?.classList.remove("selected")
    }

  }

}
