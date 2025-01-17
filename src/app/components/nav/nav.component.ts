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
  planets: string[] = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus']
  @Output() planetSelectionEvent = new EventEmitter<string>();

  onClickSwitchMobileVisibility() {
    this.mobileNavVisible = !this.mobileNavVisible
  }

  onClickSelectPlanet(planet: string) {
    this.planetSelectionEvent.emit(planet);
    this.mobileNavVisible = false;
  }
}
