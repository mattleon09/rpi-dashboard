import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PositionsService {

  constructor() { }

  getPositions(): Observable<any> {
    return new Observable(observer => {

      setTimeout(() => {
        if (localStorage.getItem('positions')) {
          observer.next(JSON.parse(localStorage.getItem('positions')));

        } else { // default data

          observer.next([
            { cols: 3, rows: 4, y: 0, x: 3 },
            { cols: 3, rows: 4, y: 0, x: 0 },
          ///  { cols: 3, rows: 4, y: 4, x: 0 },
           /////// { cols: 3, rows: 4, y: 4, x: 3 },
           // { cols: 2, rows: 8, y: 0, x: 6 }
          ]);

        }
      }, 1000);
    });
  }

  savePositions(positions) {
    localStorage.setItem('positions', JSON.stringify(positions));
  }
}
