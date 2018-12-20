import { PositionsService } from './../../core/services/positions.service';
import { Component, OnInit } from '@angular/core';
import {GridsterConfig, GridsterItem, GridType, DisplayGrid} from 'angular-gridster2';

@Component({
  selector: 'app-gridster-dashboard',
  templateUrl: './gridster-dashboard.component.html',
  styleUrls: ['./gridster-dashboard.component.scss']
})
export class GridsterDashboardComponent implements OnInit {

  options: GridsterConfig;
  dashboard: Array<GridsterItem> = [];
  loaded = false;

  constructor(private posServ: PositionsService) {}

  itemChange(item, itemComponent) {
    console.log('itemChanged', item, itemComponent);
    this.posServ.savePositions(this.dashboard);
  }

  itemResize(item, itemComponent) {
    console.log('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      gridType: GridType.Fixed,
      displayGrid: DisplayGrid.Always,
      minCols: 1,
      maxCols: 6,
      minRows: 1,
      maxRows: 6,
      maxItemCols: 6,
      maxItemRows: 6,
      defaultItemCols: 1,
      defaultItemRows: 1,
      swap: true,
      draggable: {enabled: true},
      itemChangeCallback: (item, itemComponent) => this.itemChange(item, itemComponent),
      itemResizeCallback:  (item, itemComponent) => this.itemResize(item, itemComponent),
    };

   /*  this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 0, x: 2}
    ]; */
    this.dashboard = [
      { cols: 3, rows: 2, y: 0, x: 3, resizeEnabled: false,  },
      { cols: 3, rows: 2, y: 0, x: 0, resizeEnabled: false }
    //  { cols: 3, rows: 2, y: 0, x: 0 , resizeEnabled: false},
      //{ cols: 3, rows: 2, y: 0, x: 0 , resizeEnabled: false},
     // { cols: 2, rows: 8, y: 0, x: 6 , resizeEnabled: false}
    ];

    console.log(this.dashboard);

    this.loaded = false;

    this.posServ.getPositions().subscribe((positions) => {
    //  this.dashboard =  //positions;
      this.loaded = true;
    });
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    // this.dashboard.push({});
  }

}
