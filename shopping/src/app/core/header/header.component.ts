import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../shared/storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private storageService: StorageService,
    public authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.storageService.saveRecipes();
  }

  onFetchData() {
    this.storageService.fetchRecipes();
  }
}
