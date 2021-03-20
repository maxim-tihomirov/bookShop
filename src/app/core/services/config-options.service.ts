import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

export interface ConfigOptions {
  id: number;
  login: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigOptionsService {
  standardConfig: ConfigOptions = {
    id: 0,
    login: 'none',
    email: 'none',
  };

  constructor(private localStorage: LocalStorageService) {}

  getConfig(): unknown {
    return this.localStorage.getItem('config') || this.standardConfig;
  }

  setConfig(config: ConfigOptions): void {
    this.localStorage.setItem('config', config);
  }
}
