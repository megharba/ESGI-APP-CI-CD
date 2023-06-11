import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import "ojs/ojknockout";
import Message = require("ojs/ojmessaging");
import 'oj-c/input-password';
import "ojs/ojinputtext";
import "ojs/ojlabel";
import "ojs/ojformlayout";
class DashboardViewModel {

  private readonly username: ko.Observable<string> = ko.observable("");
  private readonly password: ko.Observable<string> = ko.observable("");

  constructor() {

  }
  /**
   * log of login field
   * @param event 
   */
  private submit = (event:Event) => {
    console.log(this.username(), this.password());
    console.log((event.currentTarget as HTMLElement).id);
  };


  /**
   * Optional ViewModel method invoked after the View is inserted into the
   * document DOM.  The application can put logic that requires the DOM being
   * attached here.
   * This method might be called multiple times - after the View is created
   * and inserted into the DOM and after the View is reconnected
   * after being disconnected.
   */
  connected(): void {
    AccUtils.announce("Dashboard page loaded.");
    document.title = "Dashboard";
    // implement further logic if needed
  }

  /**
   * Optional ViewModel method invoked after the View is disconnected from the DOM.
   */
  disconnected(): void {
    // implement if needed
  }

  /**
   * Optional ViewModel method invoked after transition to the new View is complete.
   * That includes any possible animation between the old and the new View.
   */
  transitionCompleted(): void {
    // implement if needed
  }
}

export = DashboardViewModel;
