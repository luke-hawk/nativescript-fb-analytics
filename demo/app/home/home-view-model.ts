import { Observable } from 'tns-core-modules/data/observable';
import * as fbAnalytics from 'nativescript-fb-analytics';
import * as platform from "tns-core-modules/platform";

export class HomeViewModel extends Observable {

  constructor() {
    super();
  }

  public sendTestEvent() {
    const eventString = `TestEventFrom${platform.device.os}`
    fbAnalytics.logEvent(eventString);
  }
}