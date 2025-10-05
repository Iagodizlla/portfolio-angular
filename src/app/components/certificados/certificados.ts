import { Component, ElementRef, ViewChild } from '@angular/core';
import { ItemCertificado } from '../../models/item-certificado';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.html',
  styleUrls: ['./certificados.scss']
})

export class Certificados {
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;

  public certificados: ItemCertificado[] = [
    {
      titulo: 'Lógica de Programação com C#',
      emissor: 'Academia do Programador',
      cargaHoraria: '80h',
      urlImagem: 'certificados/certificado-logica-cs.png',
      urlCertificado: 'https://i.imgur.com/dCTyzwO.jpeg',
    },
    {
      titulo: 'Orientação a objetos em C#',
      emissor: 'Academia do Programador',
      cargaHoraria: '100h',
      urlImagem: 'certificados/certificado-objetos-cs.png',
      urlCertificado: 'https://i.imgur.com/OipSYTx.jpeg',
    },
    {
      titulo: 'Desenvolvimento Web com ASP.NET MVC',
      emissor: 'Academia do Programador',
      cargaHoraria: '120h',
      urlImagem: 'certificados/certificado-web-mvc.png',
      urlCertificado: 'https://imgur.com/a/ltzhyZx',
    },
    {
      titulo: 'Acesso a Dados com plataformas .NET',
      emissor: 'Academia do Programador',
      cargaHoraria: '100h',
      urlImagem: 'certificados/certificado-dados-plataforma.net.png',
      urlCertificado: 'https://imgur.com/a/jRYxas1',
    },
    {
      titulo: 'Testes Automatizados na Plataforma .NET',
      emissor: 'Academia do Programador',
      cargaHoraria: '70h',
      urlImagem: 'certificados/certificado-testes.png',
      urlCertificado: 'https://imgur.com/a/Bb7b8fm',
    },
    {
      titulo: 'Lógica de Programação',
      emissor: 'Trybe',
      cargaHoraria: '10h',
      urlImagem: 'certificados/certificado-logica.png',
      urlCertificado: 'https://imgur.com/a/u2jNfdc',
    },
    {
      titulo: 'JavaScript do Zero',
      emissor: 'Trybe',
      cargaHoraria: '10h',
      urlImagem: 'certificados/certificado-javascript-zero.png',
      urlCertificado: 'https://imgur.com/a/P4D6NIt',
    },
  ];

  rolar(direcao: number) {
    const container = this.container.nativeElement;
    const largura = 340;
    container.scrollBy({ left: direcao * largura, behavior: 'smooth' });
  }
}
