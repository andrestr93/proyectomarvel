import { Component, OnInit } from '@angular/core';
import { CoctelService } from 'src/app/services/cocteles.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  providers: [CoctelService],
})
export class SectionComponent implements OnInit {
  constructor(private _coctelService: CoctelService) {}

  ngOnInit(): void {
    this._coctelService.getCoctelesAlcohol().subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {}
    );
  }
}
