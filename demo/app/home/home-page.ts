/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { Page } from "tns-core-modules/ui/page";
import { EventData } from 'tns-core-modules/data/observable';
import { HomeViewModel } from "./home-view-model";

export function pageLoaded(args: EventData) {
    // Get the event sender
    let page = <Page>args.object;
    page.bindingContext = new HomeViewModel();
}