import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  safeSrc: SafeResourceUrl;
  safeSrc1: SafeResourceUrl;
  safeSrc3: SafeResourceUrl;
  safeSrc4: SafeResourceUrl;
  safeSrc5: SafeResourceUrl;
  safeSrc6: SafeResourceUrl;
  safeSrc7: SafeResourceUrl;
  safeSrc8: SafeResourceUrl;
  safeSrc9: SafeResourceUrl;
  safeSrc10: SafeResourceUrl;
  safeSrc11: SafeResourceUrl;
  safeSrc12: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { 
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/PdgIh7ctu-E");
    this.safeSrc1 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/wtGXOMTtIHQ");
    this.safeSrc3 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/OAV-0cYLuZw");
    this.safeSrc4 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/nUDDwgpR4FU");
    this.safeSrc5 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/2WaLKRjWoOM");
    this.safeSrc6 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/xuF3vPL6KJc");
    this.safeSrc7 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/gtNfEK_FfRc");
    this.safeSrc8 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/RzVX3FwSi04");
    this.safeSrc9 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/TSQIjn3lP_0");
    this.safeSrc10=  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/N0VejsysCpA");
    this.safeSrc11 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/5qXCPyt0NUU");
    this.safeSrc12 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/9b7Xp6qE6w4");
  }

  

  ngOnInit() {
  }

}
