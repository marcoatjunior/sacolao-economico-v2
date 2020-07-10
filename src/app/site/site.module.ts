import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SiteComponent } from "./site.component";
import { SiteRoutingModule } from "./site-routing.module";
import { BannerComponent } from "./shared/components/banner/banner.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FeatureComponent } from "./shared/components/feature/feature.component";
import { RecentUpdateComponent } from "./shared/components/recent-update/recent-update.component";
import { BigFeatureComponent } from "./shared/components/big-feature/big-feature.component";
import { PricingComponent } from "./shared/components/pricing/pricing.component";
import { TestimonialComponent } from "./shared/components/testimonial/testimonial.component";
import { BrandComponent } from "./shared/components/brand/brand.component";
import { ImpressComponent } from "./shared/components/impress/impress.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@NgModule({
  imports: [CommonModule, SiteRoutingModule],
  declarations: [
    SiteComponent,
    HeaderComponent,
    BannerComponent,
    FeatureComponent,
    RecentUpdateComponent,
    BigFeatureComponent,
    PricingComponent,
    TestimonialComponent,
    BrandComponent,
    ImpressComponent,
    FooterComponent,
  ],
  exports: [SiteComponent],
})
export class SiteModule {}
