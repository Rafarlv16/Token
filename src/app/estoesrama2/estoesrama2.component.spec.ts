import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Estoesrama2Component } from './estoesrama2.component';

describe('Estoesrama2Component', () => {
  let component: Estoesrama2Component;
  let fixture: ComponentFixture<Estoesrama2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Estoesrama2Component]
    });
    fixture = TestBed.createComponent(Estoesrama2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
