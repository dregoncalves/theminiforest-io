// react/components/Sitemap.tsx
import React from 'react'
import styles from './src/styles/sitemap.css'

const Sitemap = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mapa do site</h1>
      <ul className={styles.mapaDoSite}>
        <li className={styles.roupinhas}>
          <a href="https://www.theminiforest.com/roupinhas" title="Roupinhas Infantis para Meninos e Meninas"> Roupinhas </a>
          <ul>
            <li>
              <a href="#" className={styles.subtitulo}>Por idade</a>
              <ul>
                <li><a href="https://www.theminiforest.com/primeiros-meses" title="Primeiros Meses">Primeiros Meses</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/RN?map=c,specificationFilter_91&O=OrderByReleaseDateDESC" title="Roupinhas RN - The Mini Forest">Recém Nascido</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/1-3meses?map=c,specificationFilter_91&O=OrderByReleaseDateDESC" title="Roupinhas 1-3 meses - The Mini Forest">1 - 3 meses</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/3-6meses?map=c,specificationFilter_91&O=OrderByReleaseDateDESC" title="Roupinhas 3-6 meses - The Mini Forest">3 - 6 meses</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/6-9meses?map=c,specificationFilter_91&O=OrderByReleaseDateDESC" title="Roupinhas 6-9 meses - The Mini Forest">6 - 9 meses</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/9-12meses?map=c,specificationFilter_91&O=OrderByReleaseDateDESC" title="Roupinhas 9-12 meses - The Mini Forest">9 - 12 meses</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/12-18meses?map=c,specificationFilter_91&O=OrderByReleaseDateDESC" title="Roupinhas 12-18 meses - The Mini Forest">12 - 18 meses</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/18-24meses?map=c,specificationFilter_91&O=OrderByReleaseDateDESC" title="Roupinhas 18-24 meses - The Mini Forest">18 - 24 meses</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/2-3anos?map=c,specificationFilter_91&O=OrderByReleaseDateDESC" title="Roupinhas 2-3 anos - The Mini Forest">2 - 3 anos</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/3-4anos?map=c,specificationFilter_91&O=OrderByReleaseDateDESC" title="Roupinhas 3-4 anos - The Mini Forest">3 - 4 anos</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/4-5anos?map=c,specificationFilter_91&O=OrderByReleaseDateDESC" title="Roupinhas 4-5 anos - The Mini Forest">4 - 5 anos</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/5-6anos?map=c,specificationFilter_91&O=OrderByReleaseDateDESC" title="Roupinhas 5-6 anos - The Mini Forest">5 - 6 anos</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/6-7anos?map=c,specificationFilter_91&O=OrderByReleaseDateDESC" title="Roupinhas 6-7 anos - The Mini Forest">6 - 7 anos</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/7-8anos?map=c,specificationFilter_91&O=OrderByReleaseDateDESC" title="Roupinhas 7-8 anos - The Mini Forest">7 - 8 anos</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/8-9anos?map=c,specificationFilter_91&O=OrderByReleaseDateDESC" title="Roupinhas 8-9 anos - The Mini Forest">8 - 9 anos</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/9-10anos?map=c,specificationFilter_91&O=OrderByReleaseDateDESC" title="Roupinhas 9-10 anos - The Mini Forest">9 - 10 anos</a></li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className={styles.subtitulo}>Por tipo de peça</a>
              <ul>
                <li><a href="https://www.theminiforest.com/roupinhas/blusas-e-camisetas" title="Blusas e Camisetas para Meninos e Meninas">Blusas e Camisetas</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/blusas-e-camisetas/blusas-e-camistas-estampadas" title="Blusas e Camisetas Estampadas">Blusas e Camisetas Estampadas</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/bodies" title="Body infantil básicos, estampados e mais!">Bodies</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/bodies/bodies-estampados" title="Bodies Estampados">Bodies Estampados</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/calcas-e-shorts" title="Calças e Shorts">Calças e Shorts</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/calcas-e-shorts/calcas-e-shorts-estampados" title="Calças e Shorts Estampados">Calças e Shorts Estampados</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/macacoes" title="Macacão Infantil para Meninos e Meninas">Macacões</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/macacoes/macacao-estampado" title="Macacão Estampado">Macacões Estampados</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/pijamas" title="Pijamas Infantis Feminino e Masculino">Pijamas</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/pijamas/pijamas-estampados" title="Pijamas Estampados">Pijamas</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/vestidos-e-saias" title="Vestidos e Saias Infantis">Vestidos e Saias</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/vestidos-e-saias/vestidos-e-saias-estampados" title="Vestidos e Saias Estampados na The Mini Forest, sua loja infantil">Vestidos e Saias Estampados</a></li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <a className={styles.subtitulo} href="https://www.theminiforest.com/roupinhas/Lisos?map=c,specificationFilter_107&O=OrderByReleaseDateDESC">Lisos</a>
              <ul>
                <li><a href="https://www.theminiforest.com/roupinhas/blusas-e-camisetas/blusas-e-camisetas-lisas" title="Blusas e Camisetas Lisas">Blusas e Camisetas Lisas</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/bodies/bodies-lisos" title="Bodies Lisos">Bodies Lisos</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/calcas-e-shorts/calcas-e-shorts-lisos" title="Calças e Shorts Lisos">Calças e Shorts Lisos</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/macacoes/macacao-liso" title="Macacão Liso">Macacões Lisos</a></li>
                <li><a href="https://www.theminiforest.com/roupinhas/vestidos-e-saias/vestidos-e-saias-lisos" title="Vestidos e Saias Lisos na The Mini Forest, sua loja infnatil">Vestidos e Saias</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://www.theminiforest.com/acessorios">Acessórios</a>
          <ul>
            <li>
              <a href="https://www.theminiforest.com/acessorios/babadores" title="Babador Infantil: Liso, Estampado e Mais!">Babadores</a>
              <ul>
                <li><a href="https://www.theminiforest.com/acessorios/babadores/babadores-estampados" title="Babadores Estampados na The Mini Forest">Babadores Estampados</a></li>
                <li><a href="https://www.theminiforest.com/acessorios/babadores/babadores-lisos" title="Babadores Lisos na The Mini Forest">Babadores Lisos</a></li>
              </ul>
            </li>
            <li><a href="https://www.theminiforest.com/acessorios/bolsas" title="Bolsas para Crianças">Bolsas para Crianças</a></li>
            <li><a href="https://www.theminiforest.com/acessorios/calcinhas" title="Calcinha Infantil">Calcinha Infantil</a></li>
            <li><a href="https://www.theminiforest.com/acessorios/mantas" title="Mantas Infantis: com Estampas Exclusivas!">Mantas</a></li>
            <li><a href="https://www.theminiforest.com/acessorios/meias" title="Meias Infantis: Coloridas e Estilosas">Meias</a></li>
            <li><a href="https://www.theminiforest.com/acessorios/paninhos-de-boca" title="Paninhos de Boca: Macios e Estampados">Paninhos de Boca</a></li>
            <li><a href="https://www.theminiforest.com/acessorios/tattoo" title="Tatuagem Temporária Infantil">Tatuagem Temporária Infantil</a></li>
            <li><a href="https://www.theminiforest.com/acessorios/jogos" title="Jogos Infantis">Jogos Infantis</a></li>
          </ul>
        </li>
        <li>
          <a href="https://www.theminiforest.com/para-mamaes" title="Para Mamães: Kimonos, Pijamas e Mais">Para as Mamães</a>
          <ul>
            <li><a href="https://www.theminiforest.com/para-mamaes/acessorios" title="Acessórios para adultos">Acessórios</a></li>
            <li><a href="https://www.theminiforest.com/para-mamaes/roupas" title="Roupas para Mamães: Kimonos e Pijamas">Roupas</a></li>
          </ul>
        </li>
        <li>
          <a href="https://www.theminiforest.com/para-presentes" title="Embalagens para Presentes">Para Presente</a>
          <ul>
            <li><a href="https://www.theminiforest.com/para-presentes/cartoes" title="Cartões de Presente Fofos">Cartões</a></li>
            <li><a href="https://www.theminiforest.com/para-presentes/sacolinhas" title="Sacolinhas Personalizadas para Presente">Sacolinhas</a></li>
            <li><a href="https://www.theminiforest.com/para-presentes/kit" title="Kits: Macacões, Bodies, Babadores e mais">Kits</a></li>
          </ul>
        </li>
        <li>
          <a href="https://www.theminiforest.com/casa-e-decor" title="Casa e decoração: Temas exclusivos">Casa e Decor</a>
          <ul>
            <li><a href="https://www.theminiforest.com/casa-e-decor/alimentacao" title="Casa e decor: Alimentação infantil">Alimentação</a></li>
            <li><a href="https://www.theminiforest.com/casa-e-decor/edredons-e-mantas" title="Edredom Infantil e Mantas">Edredons e Mantas</a></li>
            <li><a href="https://www.theminiforest.com/casa-e-decor/painel-de-parede" title="Painel de Parede">Painel de Parede</a></li>
            <li><a href="https://www.theminiforest.com/casa-e-decor/quadros" title="Quadros de bichinhos, alfabeto e mais!">Quadros</a></li>
            <li><a href="https://www.theminiforest.com/casa-e-decor/tapetes" title="Tapetes para Quarto Infantil">Tapetes</a></li>
          </ul>
        </li>
        <li>
          <a href="https://www.theminiforest.com/higiene" title="Shampoo, Condicionador, Sabonete e demais itens de higiene para bebê!">Higiene</a>
          <ul>
            <li><a href="https://www.theminiforest.com/higiene/cremes" title="Cremes e pomadas para bebês">Cremes</a></li>
            <li><a href="https://www.theminiforest.com/higiene/dentinhos" title="Itens de higiene bucal para bebês">Dentinhos</a></li>
            <li><a href="https://www.theminiforest.com/higiene/locao">Loção</a></li>
            <li><a href="https://www.theminiforest.com/higiene/sabonetes" title="Sabonetes para bebês">Sabonetes</a></li>
            <li><a href="https://www.theminiforest.com/higiene/shampoo-e-condicionador" title="Shampoo e Condicionador de bebê">Shampoo e Condicionador</a></li>
          </ul>
        </li>
        <li></li>
        <li><a href="https://www.theminiforest.com/novidades" title="Novidades">Novidades</a></li>
        <li><a href="https://www.theminiforest.com/sale">Sale </a></li>
        <li><a href="https://www.theminiforest.com/estampas">Estampas</a></li>
        <li>
          <a href="#">Informações</a>
          <ul>
            <li><a href="https://www.theminiforest.com/institucional/comocomprar">Como Comprar</a></li>
            <li><a href="https://www.theminiforest.com/institucional/trocasedevolucoes">Trocas e Devoluções</a></li>
            <li><a href="https://www.theminiforest.com/institucional/frete">Frete</a></li>
            <li><a href="https://www.theminiforest.com/institucional/duvidas">Dúvidas</a></li>
            <li><a href="https://idec.org.br/consultas/codigo-de-defesa-do-consumidor/capitulo-vi" target="_blank">CDC</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Institucional</a>
          <ul>
            <li><a href="https://www.theminiforest.com/institucional/concurso-de-artes-da-florestinha">Promoção de Fim de Ano!</a></li>
            <li><a href="https://www.theminiforest.com/institucional/the-mini-forest">The Mini Forest</a></li>
            <li><a href="https://www.theminiforest.com/institucional/propriedade-industrial">Propriedade Industrial</a></li>
            <li><a href="https://blog.theminiforest.com/" target="_blank">Blog</a></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Sitemap