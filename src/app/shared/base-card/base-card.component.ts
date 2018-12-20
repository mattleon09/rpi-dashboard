import { Component, OnInit, ChangeDetectionStrategy, Injectable,
  Inject, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';
import {InjectionToken} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseCardComponent implements OnInit {


  static metadata: any = {
    TITLE: new InjectionToken<string>('name'),
    COLS: new InjectionToken<number>('cols'),
    ROWS: new InjectionToken<number>('rows')
  };

  constructor() { }

  ngOnInit() {
  }

}
