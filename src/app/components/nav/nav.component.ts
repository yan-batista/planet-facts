import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  mobileNavVisible: boolean = false;
  planets: string[] = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', "neptune"]
  @Output() planetSelectionEvent = new EventEmitter<string>();
  selectedPlanet = this.planets[2];

  onClickSwitchMobileVisibility() {
    this.mobileNavVisible = !this.mobileNavVisible
  }

  onClickSelectPlanet(planet: string) {
    this.planetSelectionEvent.emit(planet);
    this.selectedPlanet = planet;
    this.mobileNavVisible = false;
  }
}
