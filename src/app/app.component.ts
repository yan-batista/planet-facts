import { Component } from '@angular/core';
import { PlanetComponent } from './components/planet/planet.component';
import { NavComponent } from './components/nav/nav.component';
import { Planet } from './types/planet_type';

import data from './data.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, PlanetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'planets';
  planetSelection = 'earth';
  planetData: Planet = {
    "name": "Earth",
    "overview": {
      "content": "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
      "source": "https://en.wikipedia.org/wiki/Earth"
    },
    "structure": {
      "content": "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
      "source": "https://en.wikipedia.org/wiki/Earth#Internal_structure"
    },
    "geology": {
      "content": "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
      "source": "https://en.wikipedia.org/wiki/Earth#Surface"
    },
    "rotation": "0.99 Days",
    "revolution": "365.26 Days",
    "radius": "6,371 KM",
    "temperature": "16°c",
    "images": {
      "planet": "./assets/planet-earth.svg",
      "internal": "./assets/planet-earth-internal.svg",
      "geology": "./assets/geology-earth.png"
    }
  };

  planetSelectionTrigger(planet: string) {
    this.planetSelection = planet;

    const foundPlanet = data.find(item => item.name.toLowerCase() === planet.toLowerCase() || null)

    if(foundPlanet) {
      this.planetData = foundPlanet
    } else {
      this.planetData = data[0]
    }
  }
}
