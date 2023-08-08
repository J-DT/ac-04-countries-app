import {Component} from '@angular/core';
import {CountriesService} from "../../services/countries.service";
import {Country} from "../../interfaces/country";

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {

  public countries: Country[]=[];


  constructor( private countryService: CountriesService ) {
  }


  searchByCapital(term: string):void{
    this.countryService.searchByCapital(term)
      .subscribe( countries => this.countries = countries);
  }

  get countriesQueried(): Country[]{
    return this.countries;
  }
}
