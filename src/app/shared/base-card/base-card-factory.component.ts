import { BaseCardComponent } from './base-card.component';
import {Component, ComponentFactoryResolver, Injector, Input, ViewChild, ViewContainerRef, OnInit} from '@angular/core';


@Component({
  selector: 'app-base-card-spawner',
  template: '<div #spawn></div>',
  styles: [':host { height: 100%; width: 100%;}']
})
export class BaseCardSpawnerComponent implements OnInit {
  @ViewChild('spawn', {read: ViewContainerRef}) container;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  @Input() set card(data: BaseCardComponent) {
    if (!data) {
      return;
    }
    const inputProviders = Object.keys(data.inputs).map((inputName) => {
      return {provide: data.inputs[inputName].key,
              useValue: data.inputs[inputName].value,
              deps: []};
    });
    const injector = Injector.create(inputProviders, this.container.parentInjector);
    const factory = this.resolver.resolveComponentFactory(data.component);
    const component = factory.create(injector);
    this.container.insert(component.hostView);
  }

  ngOnInit(): void {
  }
}
