import { Observable } from '@nativescript/core/data/observable';
import * as fbAnalytics from 'nativescript-fb-analytics';

export class HomeViewModel extends Observable {

  constructor() {
    super();
  }

  public sendTestEvent() {
    const eventString = "Hello Facebook Analytics";
    fbAnalytics.logEvent(eventString);
  }
}