import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioCardComponent } from './portafolio-card.component';

describe('PortafolioCardComponent', () => {
  let component: PortafolioCardComponent;
  let fixture: ComponentFixture<PortafolioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
