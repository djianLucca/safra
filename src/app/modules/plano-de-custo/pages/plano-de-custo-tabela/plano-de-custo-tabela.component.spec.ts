import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoDeCustoTabelaComponent } from './plano-de-custo-tabela.component';

describe('PlanoDeCustoTabelaComponent', () => {
  let component: PlanoDeCustoTabelaComponent;
  let fixture: ComponentFixture<PlanoDeCustoTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoDeCustoTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoDeCustoTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
