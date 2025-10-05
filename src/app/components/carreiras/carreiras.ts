import { Component, ElementRef, ViewChild } from '@angular/core';
import { ItemCarreira } from '../../models/item-carreira';

@Component({
  selector: 'app-carreiras',
  templateUrl: './carreiras.html',
  styleUrls: ['./carreiras.scss']
})
export class Carreiras {
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;

  abaSelecionada: 'formacao' | 'experiencia' = 'formacao';

  public itensFormacao: ItemCarreira[] = [
  {
    titulo: 'Técnico em Informática',
    instituicao: 'CEDUP',
    periodo: '2020 – 2023',
    descricao: 'Formação voltada para fundamentos de hardware, redes e programação, com foco em lógica, manutenção de sistemas e desenvolvimento de aplicações básicas.',
    logo: 'formacoes/logo_TI.png',
    stacks: [
      'https://skillicons.dev/icons?i=cs&theme=light',
      'https://skillicons.dev/icons?i=java&theme=light',
      'https://upload.wikimedia.org/wikipedia/commons/9/98/Apache_NetBeans_Logo.svg',
      'https://skillicons.dev/icons?i=visualstudio&theme=light',
      'https://skillicons.dev/icons?i=cpp&theme=light',
      'https://skillicons.dev/icons?i=dotnet&theme=light',
      'https://skillicons.dev/icons?i=unity&theme=light',
    ],
  },
  {
    titulo: 'Sistemas de Informação',
    instituicao: 'UNIPLAC',
    periodo: '2024 – Atualmente',
    descricao: 'Curso superior com ênfase em análise, projeto e gestão de sistemas de informação, integrando tecnologia e negócios para soluções corporativas.',
    logo: 'formacoes/logo_SI.png',
    stacks: [
      'https://skillicons.dev/icons?i=cpp&theme=light',
      'https://skillicons.dev/icons?i=html&theme=light',
      'https://skillicons.dev/icons?i=css&theme=light',
      'https://skillicons.dev/icons?i=javascript&theme=light',
      'https://skillicons.dev/icons?i=kotlin&theme=light',
      'https://skillicons.dev/icons?i=vscode&theme=light',
      'https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg',
      'https://skillicons.dev/icons?i=cs&theme=light',
      'https://skillicons.dev/icons?i=dotnet&theme=light',
      'https://skillicons.dev/icons?i=visualstudio&theme=light',
      'https://skillicons.dev/icons?i=mysql&theme=light',
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-original.svg', // ✅ Microsoft SQL Server (funciona)
      'https://skillicons.dev/icons?i=docker&theme=light',
      'https://skillicons.dev/icons?i=github&theme=light',
      'https://skillicons.dev/icons?i=git&theme=light',
    ],
  },
  {
    titulo: 'Curso Full Stack',
    instituicao: 'Academia do Programador',
    periodo: '2025 – Atualmente',
    descricao: 'Capacitação prática em desenvolvimento web Full Stack, abrangendo front-end, back-end, bancos de dados e boas práticas de arquitetura de software.',
    logo: 'formacoes/logo_AP.svg',
   stacks: [
      'https://skillicons.dev/icons?i=cs&theme=light',
      'https://skillicons.dev/icons?i=dotnet&theme=light',
      'https://skillicons.dev/icons?i=visualstudio&theme=light',
      'https://skillicons.dev/icons?i=html&theme=light',
      'https://skillicons.dev/icons?i=css&theme=light',
      'https://skillicons.dev/icons?i=javascript&theme=light',
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-original.svg',        // Microsoft SQL Server
      'https://skillicons.dev/icons?i=mysql&theme=light',
      'https://skillicons.dev/icons?i=postgres&theme=light',
      'https://skillicons.dev/icons?i=redis&theme=light',
      'https://skillicons.dev/icons?i=bootstrap&theme=light',
      'https://skillicons.dev/icons?i=git&theme=light',
      'https://skillicons.dev/icons?i=github&theme=light',
      'https://skillicons.dev/icons?i=selenium&theme=light',
      'https://skillicons.dev/icons?i=azure&theme=light',
      'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/render.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dbeaver/dbeaver-original.svg',
      'https://skillicons.dev/icons?i=docker&theme=light',
      'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/newrelic.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg',
      'https://skillicons.dev/icons?i=postman&theme=light',
      'https://skillicons.dev/icons?i=typescript&theme=light',
      'https://skillicons.dev/icons?i=sass&theme=light',
      'https://skillicons.dev/icons?i=angular&theme=light',
      'https://skillicons.dev/icons?i=nodejs&theme=light',
      'https://skillicons.dev/icons?i=vscode&theme=light',
      'https://cdn.simpleicons.org/prettier?viewbox=auto',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
    ],
  },
  ];

// Cards de outra aba
  public itensOutros: ItemCarreira[] = [
    /*{
      titulo: 'Desenvolvedor Júnior',
      instituicao: 'NDD Tech',
      periodo: '2024 – Atualmente',
      descricao: 'Atuação no desenvolvimento de soluções SaaS com foco em back-end .NET e integração com ferramentas de IA generativa.',
      logo: 'https://media.licdn.com/dms/image/C4D0BAQFLDxYBCHSzdA/company-logo_200_200/0/1630618395013.png',
      stacks: [],
    },*/
  ];

  public itemFormacaoSelecionado?: ItemCarreira;

  // Retorna os cards da aba atual
  get itensCarreira(): ItemCarreira[] {
    return this.abaSelecionada === 'formacao' ? this.itensFormacao : this.itensOutros;
  }

  // Alternar abas
  selecionarAba(aba: 'formacao' | 'experiencia') {
    this.abaSelecionada = aba;

    // Resetar rolagem para início
    setTimeout(() => {
      this.container.nativeElement.scrollLeft = 0;
    }, 0);
  }

  rolar(direcao: number) {
    const container = this.container.nativeElement;
    const largura = 340;
    container.scrollBy({ left: direcao * largura, behavior: 'smooth' });
  }
}
