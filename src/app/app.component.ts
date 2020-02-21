import { Component } from "@angular/core";
import { TabItemService } from "./services/tab-item.service";
import { TabPaneService } from "./services/tab-pane.service";
import { TabPaneItem } from "./pages/model/tabPaneItem";
import { TabItem } from "./pages/model/tabItem";

@Component({
  selector: "xtb-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "esempioTabs";
  public tabPaneItems: TabPaneItem[];
  public tabItems: TabItem[];

  constructor(
    private tabPaneService: TabPaneService,
    private tabItemService: TabItemService
  ) {}

  ngOnInit() {
    this.tabItems = this.tabItemService.getTabItem();
    this.tabPaneItems = this.tabPaneService.getTabPanes();
  }
}
