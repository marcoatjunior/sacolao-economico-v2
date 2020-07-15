import { Component, OnInit } from "@angular/core";
import { products } from "../../constants/products";

@Component({
  selector: "app-site-pricing",
  templateUrl: "pricing.component.html",
  styleUrls: ["pricing.component.scss"],
})
export class PricingComponent implements OnInit {
  products = products;
  ngOnInit() {}
}
