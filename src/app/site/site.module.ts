import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SiteComponent } from "./site.component";
import { SiteRoutingModule } from "./site-routing.module";
import { BannerComponent } from "./shared/components/banner/banner.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { LocationComponent } from "./shared/components/location/location.component";
import { PricingComponent } from "./shared/components/pricing/pricing.component";
import { CompanyComponent } from "./shared/components/company/company.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { CardComponent } from './shared/components/card/card.component';

@NgModule({
  imports: [CommonModule, SiteRoutingModule],
  declarations: [
    SiteComponent,
    HeaderComponent,
    CardComponent,
    BannerComponent,
    LocationComponent,
    PricingComponent,
    CompanyComponent,
    FooterComponent,
  ],
  exports: [SiteComponent],
})
export class SiteModule {}
