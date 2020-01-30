import { Component, OnInit } from '@angular/core';
import { Loader } from '@shared/models/loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public multiloader: Loader = {} as Loader;

  ngOnInit(): void {
    // this.multiloader.about = true;
    // this.multiloader.portfolio = true;
    // this.multiloader.skills = true;
    this.multiloader.navbar = true;
  }

}
