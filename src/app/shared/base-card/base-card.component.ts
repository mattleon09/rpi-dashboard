import { Component, OnInit, ChangeDetectionStrategy, Injectable,
  Inject, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';
import {InjectionToken} from '@angular/core';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseCardComponent implements OnInit {


  static metadata: any = {
    NAME: new InjectionToken<string>('name'),
    ROUTERLINK: new InjectionToken<string>('routerLink'),
    ICONCLASS: new InjectionToken<string>('icon'),
    COLOR: new InjectionToken<string>('color'),
    COLS: new InjectionToken<number>('cols'),
    ROWS: new InjectionToken<number>('rows')
  };

  constructor(private _input: {
    name: {
      key: InjectionToken<string>,
      value: string
    },
    routerLink: {
      key: InjectionToken<string>,
      value: string
    },
    iconClass: {
      key: InjectionToken<string>,
      value: string
    },
    color: {
      key: InjectionToken<string>,
      value: string
    },
  }, private _component: any) { }

  ngOnInit() {
  }

  get inputs(): any {
    return this._input;
  }


  get component(): any {
    return this._component;
  }
}
