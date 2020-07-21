import { Component, OnInit } from "@angular/core";
import { products } from "../../constants/products";

@Component({
  selector: "app-site-header",
  templateUrl: "header.component.html",
  styleUrls: ["header.component.scss"],
})
export class HeaderComponent implements OnInit {
  products = products;

  ngOnInit() {}

  scroll(id: string) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }
}
