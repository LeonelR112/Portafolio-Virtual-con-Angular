import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPortafolioComponent } from './menu-portafolio.component';

describe('MenuPortafolioComponent', () => {
  let component: MenuPortafolioComponent;
  let fixture: ComponentFixture<MenuPortafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPortafolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
