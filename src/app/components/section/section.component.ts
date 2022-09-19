import { Component, OnInit } from '@angular/core';
import { PersonajeService } from 'src/app/services/personajes.service';
import { Personaje } from 'src/app/models/personaje';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  providers: [PersonajeService],
})
export class SectionComponent implements OnInit {

  public personajes!:any[];



  constructor(private PersonajeService: PersonajeService) {}



  ngOnInit(): void {

    this.PersonajeService.getPersonajesMarvel().subscribe(
      (response) => {
        if (response) {
          this.personajes = response.data.results;
          console.log(this.personajes);
        } else {
        }
      },
      (error) => {
        console.log(error);
      }
    );





    console.log(this.personajes)

  }
}
