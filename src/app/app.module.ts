import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Component1Component } from "./pages/tab-components/component1/component1.component";
import { Component2Component } from "./pages/tab-components/component2/component2.component";
import { Component3Component } from "./pages/tab-components/component3/component3.component";
import { TabComponent } from "./pages/tab/tab.component";
import { TabsDirective } from "./pages/tab/tabs.directive";
import { Component11Component } from "./pages/tab-components/component11/component11.component";
import { Component12Component } from "./pages/tab-components/component12/component12.component";
import { TabPaneItem } from "./pages/model/tabPaneItem";
import { TabItem } from "./pages/model/tabItem";
import { TabItemService } from "./services/tab-item.service";
import { TabPaneService } from "./services/tab-pane.service";

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    TabComponent,
    TabsDirective,
    Component11Component,
    Component12Component
  ],
  entryComponents: [
    Component1Component,
    Component2Component,
    Component3Component,
    Component11Component,
    Component12Component
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TabItemService, TabPaneService],
  bootstrap: [AppComponent]
})
export class AppModule {}
