import { Component } from '@angular/core';

interface ItemHabilidade {
  icone: string;
  titulo: string;
  descricao?: string;
}

interface ItemPortfolio {
  titulo: string;
  descricao: string;
  urlImagem: string;
  urlGif: string;
  urlRepositorio: string;
  stack: string[];
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
})
export class App {
  public itensHabilidades: ItemHabilidade[] = [
    {
      icone: 'bi-window-fullscreen',
      titulo: 'Web Design',
      descricao: `Design e desenvolvimento de sistemas web atraentes e responsivos.`,
    },
    {
      icone: 'bi-server',
      titulo: 'Aplicações Back-End',
      descricao: `Desenvolvimento de sistemas robustos para solucionar problemas simples ou complexos.`,
    },
    {
      icone: 'bi-graph-up',
      titulo: 'Testes Automatizados',
      descricao: `Criação de testes automatizados que facilitam a manutenção e melhoram as entregas das aplicações.`,
    },
    {
      icone: 'bi-wrench',
      titulo: 'Engenharia de Software',
      descricao: `Planejamento e execução de sistemas multi-camadas, integrando várias tecnologias de forma organizada e escalável.`,
    },
    {
      icone: 'bi-people',
      titulo: 'Colaboração',
      descricao: `Capacidade de trabalhar em equipe, contribuindo com ideias, código e resolução de problemas em conjunto.`,
    },
    {
      icone: 'bi-building-up',
      titulo: 'Implantação',
      descricao: `Implantação e manutenção de sistemas em servidores VPS e em nuvem.`,
    },
  ];

  public itensHabilidades2: ItemHabilidade[] = [
    // Linguagens
    { icone: 'https://skillicons.dev/icons?i=html&theme=dark', titulo: 'HTML' },
    { icone: 'https://skillicons.dev/icons?i=css&theme=dark', titulo: 'CSS' },
    { icone: 'https://skillicons.dev/icons?i=scss&theme=dark', titulo: 'SCSS' },
    { icone: 'https://skillicons.dev/icons?i=js&theme=dark', titulo: 'JavaScript' },
    { icone: 'https://skillicons.dev/icons?i=ts&theme=dark', titulo: 'TypeScript' },
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', titulo: 'Kotlin' },
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', titulo: 'Java' },
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', titulo: 'C++' },
    { icone: 'https://skillicons.dev/icons?i=cs&theme=dark', titulo: 'C#' },
    { icone: 'https://skillicons.dev/icons?i=nodejs&theme=dark', titulo: 'Node.js' },

    // Frameworks e ferramentas
    { icone: 'https://skillicons.dev/icons?i=bootstrap&theme=dark', titulo: 'Bootstrap' },
    { icone: 'https://skillicons.dev/icons?i=angular&theme=dark', titulo: 'Angular' },
    { icone: 'https://skillicons.dev/icons?i=net&theme=dark', titulo: '.NET' },
    { icone: 'https://skillicons.dev/icons?i=git&theme=dark', titulo: 'Git' },
    { icone: 'https://skillicons.dev/icons?i=github&theme=dark', titulo: 'GitHub' },
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg', titulo: 'Unity' },
    { icone: 'https://skillicons.dev/icons?i=docker&theme=dark', titulo: 'Docker' },
    { icone: 'https://skillicons.dev/icons?i=postman&theme=dark', titulo: 'Postman' },
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg', titulo: 'Swagger UI' },
    { icone: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/newrelic.svg', titulo: 'New Relic' },

    // Banco de Dados
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', titulo: 'MySQL' },
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', titulo: 'PostgreSQL' },
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', titulo: 'SQL Server' },
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', titulo: 'Redis' },
    { icone: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png', titulo: 'SQL' },

    // IDEs
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg', titulo: 'IntelliJ' },
    { icone: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Apache_NetBeans_Logo.svg', titulo: 'NetBeans' },
    { icone: 'https://skillicons.dev/icons?i=visualstudio&theme=dark', titulo: 'Visual Studio' },
    { icone: 'https://skillicons.dev/icons?i=vscode&theme=dark', titulo: 'VS Code' },
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dbeaver/dbeaver-original.svg', titulo: 'DBeaver' },

    // Hosts e cloud
    { icone: 'https://skillicons.dev/icons?i=azure&theme=dark', titulo: 'Azure' },
    { icone: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/render.svg', titulo: 'Render' },
    { icone: 'https://railway.app/brand/logo-light.svg', titulo: 'Railway' },

    // Testes
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg', titulo: 'Selenium' },
    { icone: 'https://avatars.githubusercontent.com/u/915046?s=200&v=4', titulo: 'Mock' },
  ];

  public itensPortfolio: ItemPortfolio[] = [
    {
      titulo: 'Controle de Bar',
      urlImagem: 'controle-de-bar.png',
      urlGif: 'https://i.imgur.com/kioD02O.gif',
      urlRepositorio:
        'https://github.com/Iagodizlla/controle-de-bar',
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
      urlImagem: 'gestao-de-equipamentos.png',
      urlGif: 'https://i.imgur.com/kxM2Bre.gif',
      urlRepositorio:
        'https://github.com/iagodizlla/gestao-de-equipamentos',
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
      urlImagem: 'e-agenda.png',
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
      descricao: `A e-Agenda é um sistema web para gerenciar tarefas, contatos, compromissos, categorias e despesas. Permite cadastrar, editar, excluir e visualizar registros, com suporte a itens de tarefa, prioridades e controle de conclusão. Ideal para organização pessoal e profissional.`
    },
    {
      titulo: 'E-Agenda-Orm',
      urlImagem: 'e-agenda.png',
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
          'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/render.svg'
      ],
      descricao: `A e-Agenda é um sistema web para gerenciar tarefas, contatos, compromissos, categorias e despesas. Permite cadastrar, editar, excluir e visualizar registros, com suporte a itens de tarefa, prioridades e controle de conclusão. Ideal para organização pessoal e profissional.`
    },
    {
      titulo: 'Controle de Cinema',
      urlImagem: 'controle-de-cinema.png',
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
      descricao: `O Controle de Cinema tem como objetivo gerenciar filmes, sessões e ingressos de forma prática e organizada, permitindo que empresas administrem filmes, salas e sessões, enquanto clientes podem visualizar opções, escolher lugares e comprar ingressos.`
    },
    {
      titulo: 'Site Pessoal',
      urlImagem: 'site-pessoal.png',
      urlGif: 'https://i.imgur.com/AEdcdKF.gif',
      urlRepositorio: 'https://github.com/Iagodizlla/Site_Prototipo',
      stack: [
          'https://skillicons.dev/icons?i=html&theme=light',
          'https://skillicons.dev/icons?i=css&theme=light',
          'https://skillicons.dev/icons?i=javascript&theme=light',
      ],
      descricao: `Este é o meu site pessoal, onde compartilho informações sobre mim, meu server de Minecraft e minigames, como torneios e batalhas em equipes.`
    },
  ];

  public itemPortfolioSelecionado?: ItemPortfolio;
}
