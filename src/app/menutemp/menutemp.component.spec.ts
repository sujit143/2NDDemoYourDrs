import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutempComponent } from './menutemp.component';

describe('MenutempComponent', () => {
  let component: MenutempComponent;
  let fixture: ComponentFixture<MenutempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenutempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenutempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
