import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plano-de-custo-tabela',
  templateUrl: './plano-de-custo-tabela.component.html',
  styleUrls: ['./plano-de-custo-tabela.component.scss']
})
export class PlanoDeCustoTabelaComponent implements OnInit {

  plano: Element[] = [
    { 
      componente: '1 - INSUMOS', 
      especificacao: null, 
      unidadeMedida: null, 
      quantidade: null, 
      valorUnitario: null, 
      valorTotal: 1348.53,
      nivel: 1
    },{ 
      componente: 'string', 
      especificacao: 'string', 
      unidadeMedida: 'string', 
      quantidade: 0, 
      valorUnitario: 0, 
      valorTotal: 0,
      nivel: 2
    },{ 
      componente: 'string', 
      especificacao: 'string', 
      unidadeMedida: 'string', 
      quantidade: 0, 
      valorUnitario: 0, 
      valorTotal: 0,
      nivel: 3
    },{ 
      componente: 'string', 
      especificacao: 'string', 
      unidadeMedida: 'string', 
      quantidade: 0, 
      valorUnitario: 0, 
      valorTotal: 0,
      nivel: 3
    },{ 
      componente: 'string', 
      especificacao: 'string', 
      unidadeMedida: 'string', 
      quantidade: 0, 
      valorUnitario: 0, 
      valorTotal: 0,
      nivel: 3
    },{ 
      componente: 'string', 
      especificacao: 'string', 
      unidadeMedida: 'string', 
      quantidade: 0, 
      valorUnitario: 0, 
      valorTotal: 0,
      nivel: 2
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

export interface Element {
  componente: string;
  especificacao: string;
  unidadeMedida: string;
  quantidade: number;
  valorUnitario: number;
  valorTotal: number;
  nivel: number;
  filhos?: any[]
}