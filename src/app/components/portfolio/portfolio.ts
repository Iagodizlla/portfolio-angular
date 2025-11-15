import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ItemPortfolio } from '../../models/item-portfolio';
import { ITENS_PORTFOLIO } from './itens-portfolio';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class Portfolio implements AfterViewInit {

  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;
  @ViewChild('contribuicoesChart', { static: false }) contribuicoesChart!: ElementRef<HTMLCanvasElement>;

  public itensPortfolio = ITENS_PORTFOLIO;
  public itemPortfolioSelecionado?: ItemPortfolio;
  private chartInstance?: Chart;

  ngAfterViewInit() {
    // Inicializa o gráfico se houver um projeto selecionado
    if (this.itemPortfolioSelecionado) {
      this.criarGrafico();
    }
  }

  rolar(direcao: number) {
    const container = this.container.nativeElement;
    const largura = 340;
    container.scrollBy({ left: direcao * largura, behavior: 'smooth' });
  }

  selecionarItem(item: ItemPortfolio) {
    this.itemPortfolioSelecionado = item;
    setTimeout(() => {
      this.criarGrafico();
    }, 0); // garante que o canvas já está no DOM
  }

  private criarGrafico() {
    if (!this.contribuicoesChart || !this.itemPortfolioSelecionado?.detalhesD?.frequenciaContribuicoes) return;

    const ctx = this.contribuicoesChart.nativeElement.getContext('2d');
    if (!ctx) return;

    // destrói o gráfico antigo se existir
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    const data = this.itemPortfolioSelecionado.detalhesD.frequenciaContribuicoes;

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Commits no dia',
          data: data.data,
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    this.chartInstance = new Chart(ctx, config);
  }
}
