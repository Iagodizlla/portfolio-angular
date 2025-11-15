export interface ItemPortfolio {
  titulo: string;
  descricao: string;
  urlImagem: string;
  urlGif: string;
  urlRepositorio: string;
  stack: string[];
  detalhesD?: DetalhesD;
}

export interface DetalhesD{
  quantidadeCommits?: number;         // Total de commits
  frequenciaContribuicoes?: {         // Para gráfico de commits por período
    labels: string[];                 // Ex: ['Semana 1', 'Semana 2', ...] ou ['Jan', 'Feb']
    data: number[];                   // Quantidade de commits correspondente
  };
  statusProjeto?: string;             // Ex: 'Em desenvolvimento', 'Concluído'
  tempoDesenvolvimento?: string;      // Ex: '2 meses', 'Jan 2024 - Mar 2024'
}
