import {Component, OnInit} from '@angular/core';
import {Country} from "../../interfaces/country.interface";
import {CountriesService} from "../../services/countries.service";

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{

  public countries: Country[]=[];
  public isLoading: boolean= false;
  public initialValue: string ='';


  constructor( private countryService: CountriesService ) {
  }

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountry.countries;
    this.initialValue = this.countryService.cacheStore.byCountry.term;
  }

  searchByCountry(term: string):void{
    this.isLoading = true;
    this.countryService.searchByCountry(term)
        .subscribe( countries => {
          this.countries = countries;
          this.isLoading = false;
        });

  }

  get countriesQueried(): Country[]{
    return this.countries;
  }
}
