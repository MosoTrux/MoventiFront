/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TrayContainer } from '../tray.container';

describe('TrayContainer', () => {
  let component: TrayContainer;
  let fixture: ComponentFixture<TrayContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrayContainer],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
