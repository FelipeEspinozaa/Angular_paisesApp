import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'
import { Country } from '../../interfaces/pais.interfaces';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
     private activatedRoute: ActivatedRoute, 
     private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(  ({id}) => this.paisService.getPaisPorAlpha( id )),
        tap( resp => console.log(resp)
         )
      )
      .subscribe( pais => this.pais = pais );

    // this.activatedRoute.params
    //   .subscribe( ({ id }) => { //aplicamos destructuracion a params para sacar el id
    //     console.log(id);
    //     this.paisService.getPaisPorAlpha( id )
    //       .subscribe( pais => {
    //         console.log(pais);
    //       })
    //   })

  }

}
