import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plano-de-custo-lista',
  templateUrl: './plano-de-custo-lista.component.html',
  styleUrls: ['./plano-de-custo-lista.component.scss']
})
export class PlanoDeCustoListaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns = ['safra', 'produto', 'sistemaCultivo', 'rendimentoMedio', 'receitaBruta', 'acoes'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  id?: number;
  safra: string;
  produto: string;
  sistemaCultivo: string;
  rendimentoMedio: string;
  receitaBruta: number;
}

const ELEMENT_DATA: Element[] = [
  { 
    id: 1,
    safra: 'Safra 2015-16 - Novembro/2015', 
    produto: 'Soja', 
    sistemaCultivo: 'Plantio direto e semente transgênica.', 
    rendimentoMedio: '60 kg/ha', 
    receitaBruta: 3129.50 
  },{ 
    id: 2,
    safra: 'Safra 2016 - Maio/2016', 
    produto: 'Milho', 
    sistemaCultivo: 'Plantio direto e semente transgênica.', 
    rendimentoMedio: '70 kg/ha', 
    receitaBruta: 3550.00 
  },
];
