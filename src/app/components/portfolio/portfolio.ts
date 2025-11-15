import { Component, ElementRef, ViewChild } from '@angular/core';
import { ITENS_PORTFOLIO } from './itens-portifolio';
import { ItemPortfolio } from '../../models/item-portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class Portfolio {

  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;

  public itensPortfolio = ITENS_PORTFOLIO;
  public itemPortfolioSelecionado?: ItemPortfolio;

  rolar(direcao: number) {
    const container = this.container.nativeElement;
    const largura = 340;
    container.scrollBy({ left: direcao * largura, behavior: 'smooth' });
  }
}
