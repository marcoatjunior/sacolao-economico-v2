import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "site.component.html",
  styleUrls: ["site.component.scss"],
})
export class SiteComponent implements OnInit {
  ngOnInit() {}

  scroll(id: string) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }
}
