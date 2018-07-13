import { PlanoDeCustoTabelaComponent } from './pages/plano-de-custo-tabela/plano-de-custo-tabela.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanoDeCustoListaComponent } from './pages/plano-de-custo-lista/plano-de-custo-lista.component';

const routes: Routes = [
  {
    path: '',
    component: PlanoDeCustoListaComponent
  },{
    path: 'tabela',
    component: PlanoDeCustoTabelaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanoDeCustoRoutingModule { }
