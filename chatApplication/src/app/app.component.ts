import { Component, ViewChild, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Router } from '@angular/router';
import { TokenService } from './services/token.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ARTT';
  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit() {
    const token = this.tokenService.GetToken();
    if (token) {
      // this is where to change default router
      this.router.navigate(['people']);
    } else {
      this.router.navigate(['']);
    }
  }
}
