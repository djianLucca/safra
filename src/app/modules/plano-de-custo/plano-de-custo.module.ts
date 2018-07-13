import { MatCardModule, MatDividerModule, MatTableModule, MatButton, MatButtonModule, MatIconModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanoDeCustoRoutingModule } from './plano-de-custo-routing.module';
import { PlanoDeCustoListaComponent } from './pages/plano-de-custo-lista/plano-de-custo-lista.component';
import { PlanoDeCustoTabelaComponent } from './pages/plano-de-custo-tabela/plano-de-custo-tabela.component';

@NgModule({
  imports: [
    CommonModule,
    PlanoDeCustoRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule
  ],
  declarations: [PlanoDeCustoListaComponent, PlanoDeCustoTabelaComponent]
})
export class PlanoDeCustoModule { }
