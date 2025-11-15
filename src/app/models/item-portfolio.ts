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
  quantidadeCommits?: number;
  frequenciaContribuicoes?: {
    labels: string[];
    data: number[];
  };
  statusProjeto?: string;
  tempoDesenvolvimento?: string;
}
