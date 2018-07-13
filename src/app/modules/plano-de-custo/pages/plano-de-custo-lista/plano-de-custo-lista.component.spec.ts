import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoDeCustoListaComponent } from './plano-de-custo-lista.component';

describe('PlanoDeCustoListaComponent', () => {
  let component: PlanoDeCustoListaComponent;
  let fixture: ComponentFixture<PlanoDeCustoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoDeCustoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoDeCustoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
