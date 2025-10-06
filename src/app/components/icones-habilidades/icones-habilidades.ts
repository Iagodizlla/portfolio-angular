import { Component } from '@angular/core';
import { IconeHabilidade } from '../../models/icone-habilidade';

@Component({
  selector: 'app-icones-habilidades',
  imports: [],
  templateUrl: './icones-habilidades.html',
  styleUrls: ['./icones-habilidades.scss']
})

export class IconesHabilidades {
  public itensHabilidades2: IconeHabilidade[] = [
    // Linguagens
    { icone: 'https://skillicons.dev/icons?i=html&theme=dark', titulo: 'HTML' },
    { icone: 'https://skillicons.dev/icons?i=css&theme=dark', titulo: 'CSS' },
    { icone: 'https://skillicons.dev/icons?i=scss&theme=dark', titulo: 'SCSS' },
    { icone: 'https://skillicons.dev/icons?i=js&theme=dark', titulo: 'JavaScript' },
    { icone: 'https://skillicons.dev/icons?i=ts&theme=dark', titulo: 'TypeScript' },
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', titulo: 'Kotlin', },
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', titulo: 'Java',},
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', titulo: 'C++',},
    { icone: 'https://skillicons.dev/icons?i=cs&theme=dark', titulo: 'C#' },
    { icone: 'https://skillicons.dev/icons?i=nodejs&theme=dark', titulo: 'Node.js' },
    // Frameworks e ferramentas
    { icone: 'https://skillicons.dev/icons?i=bootstrap&theme=dark', titulo: 'Bootstrap' },
    { icone: 'https://skillicons.dev/icons?i=angular&theme=dark', titulo: 'Angular' },
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg', titulo: 'RxJS' },
    { icone: 'https://skillicons.dev/icons?i=net&theme=dark', titulo: '.NET' },
    { icone: 'https://skillicons.dev/icons?i=git&theme=dark', titulo: 'Git' },
    { icone: 'https://skillicons.dev/icons?i=github&theme=dark', titulo: 'GitHub' },
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg', titulo: 'Unity',},
    { icone: 'https://skillicons.dev/icons?i=docker&theme=dark', titulo: 'Docker' },
    { icone: 'https://skillicons.dev/icons?i=postman&theme=dark', titulo: 'Postman' },
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg', titulo: 'Swagger UI',},
    { icone: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/newrelic.svg', titulo: 'New Relic',},
    { icone: 'https://cdn.simpleicons.org/prettier?viewbox=auto', titulo: 'Prettier' },
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg', titulo: 'ESLint' },
    // Banco de Dados
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', titulo: 'MySQL', },
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', titulo: 'PostgreSQL', },
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', titulo: 'SQL Server', },
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', titulo: 'Redis', },
    { icone: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png', titulo: 'SQL', },
    // IDEs
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg', titulo: 'IntelliJ', },
    { icone: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Apache_NetBeans_Logo.svg', titulo: 'NetBeans', },
    { icone: 'https://skillicons.dev/icons?i=visualstudio&theme=dark', titulo: 'Visual Studio' },
    { icone: 'https://skillicons.dev/icons?i=vscode&theme=dark', titulo: 'VS Code' },
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dbeaver/dbeaver-original.svg', titulo: 'DBeaver', },
    // Hosts e cloud
    { icone: 'https://skillicons.dev/icons?i=azure&theme=dark', titulo: 'Azure' },
    { icone: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/render.svg', titulo: 'Render', },
    { icone: 'https://railway.app/brand/logo-light.svg', titulo: 'Railway' },
    // Testes
    { icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg', titulo: 'Selenium', },
    { icone: 'https://avatars.githubusercontent.com/u/915046?s=200&v=4', titulo: 'Moq' },
  ];
}
