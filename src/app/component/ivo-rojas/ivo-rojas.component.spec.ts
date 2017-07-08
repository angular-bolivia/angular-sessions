import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvoRojasComponent } from './ivo-rojas.component';

describe('IvoRojasComponent', () => {
  let component: IvoRojasComponent;
  let fixture: ComponentFixture<IvoRojasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvoRojasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvoRojasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
