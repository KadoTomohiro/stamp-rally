// App
export * from './app.component';
export * from './app.service';
export * from './app.routes';

import { AppState } from './app.service';
import { StampSheet} from './app.stamp.service'
// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  StampSheet
];
