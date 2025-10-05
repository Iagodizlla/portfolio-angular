import { Component, ElementRef, ViewChild } from '@angular/core';
import { ItemPortfolio } from '../../models/item-portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class Portfolio {
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;

  public itensPortfolio: ItemPortfolio[] = [
    {
      titulo: 'Controle de Bar',
      urlImagem: 'projetos/controle-de-bar.png',
      urlGif: 'https://i.imgur.com/kioD02O.gif',
      urlRepositorio: 'https://github.com/Iagodizlla/controle-de-bar',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=bootstrap&theme=light',
        'https://skillicons.dev/icons?i=javascript&theme=light',
      ],
      descricao: `O sistema de Controle de Bar é um projeto que visa o gerenciamento de um bar, com o controle de estoque, funcionários, clientes e pedidos. O sistema permite a criação de pedidos, a atualização do estoque e a visualização dos dados dos clientes e funcionários.`,
    },
    {
      titulo: 'Gestão de Equipamentos',
      urlImagem: 'projetos/gestao-de-equipamentos.png',
      urlGif: 'https://i.imgur.com/kxM2Bre.gif',
      urlRepositorio: 'https://github.com/iagodizlla/gestao-de-equipamentos',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
      ],
      descricao: `O sistema de Gestão de Equipamentos controla o estoque de um almoxarifado, com a gestão de equipamentos e o registro de chamados de manutenção que eventualmente ocorrem durante o uso dos equipamentos. Também são inclusas informações sobre os fabricantes dos equipamentos para contato de suporte ou compras.`,
    },
    {
      titulo: 'E-Agenda',
      urlImagem: 'projetos/e-agenda.png',
      urlGif: 'https://i.imgur.com/cAuC5j0.gif',
      urlRepositorio: 'https://github.com/Iagodizlla/e-Agenda',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=bootstrap&theme=light',
        'https://skillicons.dev/icons?i=javascript&theme=light',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
        'https://skillicons.dev/icons?i=azure&theme=light',
      ],
      descricao: `A e-Agenda é um sistema web para gerenciar tarefas, contatos, compromissos, categorias e despesas. Permite cadastrar, editar, excluir e visualizar registros, com suporte a itens de tarefa, prioridades e controle de conclusão. Ideal para organização pessoal e profissional.`,
    },
    {
      titulo: 'E-Agenda-Orm',
      urlImagem: 'projetos/e-agenda.png',
      urlGif: 'https://i.imgur.com/cAuC5j0.gif',
      urlRepositorio: 'https://github.com/Iagodizlla/e-Agenda-ORM',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=bootstrap&theme=light',
        'https://skillicons.dev/icons?i=javascript&theme=light',
        'https://skillicons.dev/icons?i=postgresql&theme=light',
        'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/render.svg',
      ],
      descricao: `A e-Agenda é um sistema web para gerenciar tarefas, contatos, compromissos, categorias e despesas. Permite cadastrar, editar, excluir e visualizar registros, com suporte a itens de tarefa, prioridades e controle de conclusão. Ideal para organização pessoal e profissional.`,
    },
    {
      titulo: 'Controle de Cinema',
      urlImagem: 'projetos/controle-de-cinema.png',
      urlGif: 'https://i.imgur.com/K48XU9w.gif',
      urlRepositorio: 'https://github.com/runa-do-codigo/controle-de-cinema',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=bootstrap&theme=light',
        'https://skillicons.dev/icons?i=javascript&theme=light',
        'https://skillicons.dev/icons?i=postgresql&theme=light',
        'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/render.svg',
        'https://skillicons.dev/icons?i=azure&theme=light',
        'https://skillicons.dev/icons?i=docker&theme=light',
        'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/newrelic.svg',
        'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/selenium.svg',
        'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/moq.svg',
      ],
      descricao: `O Controle de Cinema tem como objetivo gerenciar filmes, sessões e ingressos de forma prática e organizada, permitindo que empresas administrem filmes, salas e sessões, enquanto clientes podem visualizar opções, escolher lugares e comprar ingressos.`,
    },
    {
      titulo: 'Site Pessoal',
      urlImagem: 'projetos/site-pessoal.png',
      urlGif: 'https://i.imgur.com/AEdcdKF.gif',
      urlRepositorio: 'https://github.com/Iagodizlla/Site_Prototipo',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=javascript&theme=light',
      ],
      descricao: `Este é o meu site pessoal, onde compartilho informações sobre mim, meu server de Minecraft e minigames, como torneios e batalhas em equipes.`,
    },
    {
      titulo: 'Pokédex',
      urlImagem: 'projetos/pokedex.png',
      urlGif: 'https://i.imgur.com/SEU_GIF.gif',
      urlRepositorio: 'https://github.com/Iagodizlla/pokedex',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=scss&theme=light',
        'https://skillicons.dev/icons?i=typescript&theme=light',
        'https://skillicons.dev/icons?i=angular&theme=light',
        'https://skillicons.dev/icons?i=nodejs&theme=light',
        'https://skillicons.dev/icons?i=bootstrap&theme=light',
        'https://cdn.simpleicons.org/prettier?viewbox=auto',
        'https://cdn.simpleicons.org/eslint/4B32C3',
      ],
      descricao: `Pokédex desenvolvida em Angular, com funcionalidades de favoritar Pokémon, exibição de detalhes como sprites, sons e tipos. Projeto com foco em consumo de API, interatividade e design responsivo.`,
    },
  ];
  public itemPortfolioSelecionado?: ItemPortfolio;

  rolar(direcao: number) {
    const container = this.container.nativeElement;
    const largura = 340;
    container.scrollBy({ left: direcao * largura, behavior: 'smooth' });
  }
}
