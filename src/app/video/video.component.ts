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
  safeSrc13: SafeResourceUrl;
  safeSrc14: SafeResourceUrl;
  safeSrc15: SafeResourceUrl;
  safeSrc16: SafeResourceUrl;
  safeSrc17: SafeResourceUrl;
  safeSrc18: SafeResourceUrl;
  safeSrc19: SafeResourceUrl;
  safeSrc20: SafeResourceUrl;
  safeSrc21: SafeResourceUrl;
  safeSrc22: SafeResourceUrl;
  safeSrc23: SafeResourceUrl;
  safeSrc24: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { 
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/XibiyEwUnpY");
    this.safeSrc1 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/wtGXOMTtIHQ");
    this.safeSrc3 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/7cx1YdGTNgY");
    this.safeSrc4 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/nUDDwgpR4FU");
    this.safeSrc5 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/2WaLKRjWoOM");
    this.safeSrc6 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/iKD3wjn-lU0");
    this.safeSrc7 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/x5cKnLTQlGU");
    this.safeSrc8 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/zvJmkI29Jg0");
    this.safeSrc9 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/TSQIjn3lP_0");
    this.safeSrc10=  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/J6sIf0XJBrw");
    this.safeSrc11 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/hJuS0_pBD74");
    this.safeSrc12 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/jXaZ-YaFkg0");
    this.safeSrc13 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/dR7D_2QcbS0");
    this.safeSrc14 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/EbSuhMwJyp4");
    this.safeSrc15 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/GwnV8OTOalg");
    this.safeSrc16 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/qy3vj3--Q3c");
    this.safeSrc17 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/xNmvpuVHef4");
    this.safeSrc18=  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/rGz6sz4LvtY");
    this.safeSrc19 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/zYfonmZB5Mg");
    this.safeSrc20 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/17Rk3ed878w");
    this.safeSrc21 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/VcyJgMh-olk");
    this.safeSrc22 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/wgYw1_rfr9M");
    this.safeSrc23 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/y2jeK6zEzJk");
    
  }

  

  ngOnInit() {
  }

}
