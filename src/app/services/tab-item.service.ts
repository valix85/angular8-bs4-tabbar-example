import { Injectable } from "@angular/core";
import { TabItem } from "../pages/model/tabItem";

@Injectable({
  providedIn: "root"
})
export class TabItemService {
  constructor() {}

  public getTabItem(): TabItem[] {
    return [
      new TabItem("Componente1-Alfa", true),
      new TabItem("Componente2-Beta", false),
      new TabItem("Componente3", false)
    ];
  }

  public getSecTabItem(): TabItem[] {
    return [
      new TabItem("Componente1/1", true),
      new TabItem("Componente1/2", false)
    ];
  }
}
