import { Injectable } from "@angular/core";
import { TabPaneItem } from "../pages/model/tabPaneItem";
import { Component1Component } from "../pages/tab-components/component1/component1.component";
import { Component2Component } from "../pages/tab-components/component2/component2.component";
import { Component3Component } from "../pages/tab-components/component3/component3.component";
import { Component11Component } from "../pages/tab-components/component11/component11.component";
import { Component12Component } from "../pages/tab-components/component12/component12.component";

@Injectable({
  providedIn: "root"
})
export class TabPaneService {
  constructor() {}

  // rappresenta, IN ORDINE, i componenti che verranno caricati nel pannello dei pannelli, i titoli della tabbar sono, IN ORDINE, in tab-item.service.ts

  public getTabPanes(): TabPaneItem[] {
    return [
      new TabPaneItem(Component1Component),
      new TabPaneItem(Component2Component),
      new TabPaneItem(Component3Component)
    ];
  }

  public getSecTabPanes(): TabPaneItem[] {
    return [
      new TabPaneItem(Component11Component),
      new TabPaneItem(Component12Component)
    ];
  }
}
