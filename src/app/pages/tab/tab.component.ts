import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  Input,
  HostBinding
} from "@angular/core";
import { TabItem } from "../model/tabItem";
import { TabsDirective } from "./tabs.directive";
import { TabPaneItem } from "../model/tabPaneItem";

@Component({
  selector: "xtb-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.css"]
})
export class TabComponent implements OnInit {
  @HostBinding("attr.class") class = "col-md-9 ml-sm-auto col-lg10 pt-3 px-4";

  @Input() tabItems: TabItem[];
  @Input() tabPaneItems: TabPaneItem[];

  @ViewChild(TabsDirective, { static: true }) tabPane: TabsDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public onTabClicked(tabItem: TabItem) {
    this.setActive(tabItem);
  }

  public loadTabPaneComponent(selIndex: number) {
    const tabPaneItem = this.tabPaneItems[selIndex];
    console.log(tabPaneItem);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      tabPaneItem.component
    );

    // è il viewContainerRef che fa da contenitore al componente che viene letto dai parametri
    const tabPaneRef = this.tabPane.viewContainerRef;
    tabPaneRef.clear();
    tabPaneRef.createComponent(componentFactory);
  }

  setActive(tabItem: TabItem) {
    this.tabItems.forEach((value: TabItem, index: number) => {
      value.isSelected = false;
    });
    tabItem.isSelected = true;
    this.loadTabPaneComponent(this.tabItems.indexOf(tabItem));
  }

  ngOnInit() {
    this.loadTabPaneComponent(0);
    // se vuoi cambiare tab iniziale cambiare sopra e attivare qui sotto
    // this.setActive(this.tabItems[0]);
  }
}
