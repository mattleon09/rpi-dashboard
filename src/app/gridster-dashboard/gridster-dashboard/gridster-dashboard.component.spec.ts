import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsterDashboardComponent } from './gridster-dashboard.component';

describe('GridsterDashboardComponent', () => {
  let component: GridsterDashboardComponent;
  let fixture: ComponentFixture<GridsterDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridsterDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
