import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[xtbTabs]"
})
export class TabsDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
