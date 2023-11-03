import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services/setting.service';

declare function customInitFunctions(): void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  constructor(private SettingService: SettingService) {

  }

  ngOnInit(): void {

    setTimeout(() => {
      customInitFunctions();
    }, 50);
  }
}
