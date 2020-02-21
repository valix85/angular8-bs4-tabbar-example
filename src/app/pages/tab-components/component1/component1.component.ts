import { Component, OnInit } from "@angular/core";
import { TabPaneItem } from "../../model/tabPaneItem";
import { TabItem } from "../../model/tabItem";
import { TabPaneService } from "src/app/services/tab-pane.service";
import { TabItemService } from "src/app/services/tab-item.service";

@Component({
  selector: "xtb-component1",
  templateUrl: "./component1.component.html",
  styleUrls: ["./component1.component.css"]
})
export class Component1Component implements OnInit {
  public tabPaneItems: TabPaneItem[];
  public tabItems: TabItem[];

  constructor(
    private tabPaneService: TabPaneService,
    private tabItemService: TabItemService
  ) {}

  ngOnInit() {
    this.tabItems = this.tabItemService.getSecTabItem();
    this.tabPaneItems = this.tabPaneService.getSecTabPanes();
  }
}
