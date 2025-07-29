// react/components/Sitemap.tsx
import React from 'react'
import styles from './src/styles/sitemap.css'

const Sitemap = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mapa do site</h1>
      <ul className={styles.sitemapList}>
        <li className={styles.sitemapItem}>
          <a href="/roupinhas" title="Produtos">PRODUTOS</a>
          <ul>
            <li>
              <a href="/roupinhas" className={styles.subCategoryTitle}>POR IDADE</a>
              <ul>
                <li><a href="/roupinhas/rn?initialMap=c&initialQuery=roupinhas&map=category-1,tamanho" title="RN">RN</a></li>
                <li><a href="/roupinhas/1-3meses?initialMap=c&initialQuery=roupinhas&map=category-1,tamanho" title="1 - 3 meses">1 - 3 meses</a></li>
                <li><a href="/roupinhas/3-6meses?initialMap=c&initialQuery=roupinhas&map=category-1,tamanho" title="3 - 6 meses">3 - 6 meses</a></li>
                <li><a href="/roupinhas/6-9meses?initialMap=c&initialQuery=roupinhas&map=category-1,tamanho" title="6 - 9 meses">6 - 9 meses</a></li>
                <li><a href="/roupinhas/9-12meses?initialMap=c&initialQuery=roupinhas&map=category-1,tamanho" title="9 - 12 meses">9 - 12 meses</a></li>
                <li><a href="/roupinhas/12-18meses?initialMap=c&initialQuery=roupinhas&map=category-1,tamanho" title="12 - 18 meses">12 - 18 meses</a></li>
                <li><a href="/roupinhas/18-24meses?initialMap=c&initialQuery=roupinhas&map=category-1,tamanho" title="18 - 24 meses">18 - 24 meses</a></li>
                <li><a href="/roupinhas/2-3anos?initialMap=c&initialQuery=roupinhas&map=category-1,tamanho" title="2 - 3 anos">2 - 3 anos</a></li>
                <li><a href="/roupinhas/3-4anos?initialMap=c&initialQuery=roupinhas&map=category-1,tamanho" title="3 - 4 anos">3 - 4 anos</a></li>
                <li><a href="/roupinhas/4-5anos?initialMap=c&initialQuery=roupinhas&map=category-1,tamanho" title="4 - 5 anos">4 - 5 anos</a></li>
                <li><a href="/roupinhas/5-6anos?initialMap=c&initialQuery=roupinhas&map=category-1,tamanho" title="5 - 6 anos">5 - 6 anos</a></li>
                <li><a href="/roupinhas/6-7anos?initialMap=c&initialQuery=roupinhas&map=category-1,tamanho" title="6 - 7 anos">6 - 7 anos</a></li>
                <li><a href="/roupinhas/7-8anos?initialMap=c&initialQuery=roupinhas&map=category-1,tamanho" title="7 - 8 anos">7 - 8 anos</a></li>
                <li><a href="/roupinhas/8-9anos?initialMap=c&initialQuery=roupinhas&map=category-1,tamanho" title="8 - 9 anos">8 - 9 anos</a></li>
                <li><a href="/roupinhas/9-10anos?initialMap=c&initialQuery=roupinhas&map=category-1,tamanho" title="9 - 10 anos">9 - 10 anos</a></li>
              </ul>
            </li>
            <li>
              <a href="/roupinhas" className={styles.subCategoryTitle}>POR TIPO DE PEÇA</a>
              <ul>
                <li><a href="/roupinhas/blusas-e-camisetas?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca" title="Blusas e Camisetas">Blusas e Camisetas</a></li>
                <li><a href="/roupinhas/bodies?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca" title="Bodies">Bodies</a></li>
                <li><a href="/roupinhas/calcas-e-shorts?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca" title="Calças e Shorts">Calças e Shorts</a></li>
                <li><a href="/roupinhas/macacoes?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca" title="Macacões">Macacões</a></li>
                <li><a href="/roupinhas/pijamas?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca" title="Pijamas">Pijamas</a></li>
                <li><a href="/roupinhas/vestidos-e-saias?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca" title="Vestidos e Saias">Vestidos e Saias</a></li>
                <li><a href="/roupinhas/praia?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca" title="Praia">Praia</a></li>
              </ul>
            </li>
            <li>
              <a className={styles.subCategoryTitle} href="/roupinhas/liso?initialMap=c&initialQuery=roupinhas&map=category-1,cor">LISOS</a>
              <ul>
                <li><a href="/roupinhas/blusas-e-camisetas/liso?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca,cor" title="Blusas e Camisetas Lisas">Blusas e Camisetas</a></li>
                <li><a href="/roupinhas/bodies/liso?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca,cor" title="Bodies Lisos">Bodies</a></li>
                <li><a href="/roupinhas/calcas-e-shorts/liso?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca,cor" title="Calças e Shorts Lisos">Calças e Shorts</a></li>
                <li><a href="/roupinhas/macacoes/liso?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca,cor" title="Macacões Lisos">Macacões</a></li>
                <li><a href="/roupinhas/vestidos-e-saias/liso?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca,cor" title="Vestidos e Saias">Vestidos e Saias</a></li>
              </ul>
            </li>
            <li>
                <a href="/produtos/primeiros-meses" title="Primeiros Meses">PRIMEIROS MESES</a>
            </li>
          </ul>
        </li>
        <li className={styles.sitemapItem}>
          <a href="/casa-e-decor" title="Casa e Decor">CASA E DECOR</a>
          <ul>
            <li><a href="/casa-e-decor/alimentacao" title="Alimentação">Alimentação</a></li>
            <li><a href="/casa-e-decor/edredons-e-mantas" title="Edredons e Mantas">Edredons e Mantas</a></li>
            <li><a href="/casa-e-decor/painel-de-parede" title="Painel de Parede">Painel de Parede</a></li>
            <li><a href="/casa-e-decor/quadros" title="Quadros">Quadros</a></li>
            <li><a href="/casa-e-decor/tapetes" title="Tapetes">Tapetes</a></li>
          </ul>
        </li>
        <li className={styles.sitemapItem}>
          <a href="/higiene" title="Higiene">HIGIENE</a>
          <ul>
            <li><a href="/higiene/cremes" title="Cremes">Cremes</a></li>
            <li><a href="/higiene/dentinhos" title="Dentinhos">Dentinhos</a></li>
            <li><a href="/higiene/locao" title="Loção">Loção</a></li>
            <li><a href="/higiene/sabonetes" title="Sabonetes">Sabonetes</a></li>
            <li><a href="/higiene/shampoo-e-condicionador" title="Shampoo e Condicionador">Shampoo e Condicionador</a></li>
          </ul>
        </li>
        <li className={styles.sitemapItem}>
            <a href="/acessorios" title="Acessórios">ACESSÓRIOS</a>
            <ul>
                <li><a href="/acessorios/babadores" title="Babadores">Babadores</a></li>
                <li><a href="/acessorios/bolsas" title="Bolsas">Bolsas</a></li>
                <li><a href="/acessorios/calcinhas" title="Calcinhas">Calcinhas</a></li>
                <li><a href="/acessorios/mantas" title="Mantas">Mantas</a></li>
                <li><a href="/acessorios/meias" title="Meias">Meias</a></li>
                <li><a href="/acessorios/paninhos-de-boca" title="Paninhos de Boca">Paninhos de Boca</a></li>
                <li><a href="/acessorios/tattoo" title="Tattoo">Tattoo</a></li>
                <li><a href="/acessorios/jogos" title="Jogos">Jogos</a></li>
            </ul>
        </li>
        <li className={styles.sitemapItem}>
            <a href="/para-mamaes" title="Para as Mamães">PARA AS MAMÃES</a>
            <ul>
                <li><a href="/para-mamaes/acessorios" title="Acessórios">Acessórios</a></li>
                <li><a href="/para-mamaes/roupas" title="Roupas">Roupas</a></li>
            </ul>
        </li>
        <li className={styles.sitemapItem}>
            <a href="/para-presentes" title="Para Presente">PARA PRESENTE</a>
            <ul>
                <li><a href="/para-presentes/cartoes" title="Cartões">Cartões</a></li>
                <li><a href="/para-presentes/sacolinhas" title="Sacolinhas">Sacolinhas</a></li>
                <li><a href="/para-presentes/kit" title="Kits">Kits</a></li>
            </ul>
        </li>
        <li className={styles.sitemapItem}><a href="/novidades" title="Novidades">NOVIDADES</a></li>
        <li className={styles.sitemapItem}><a href="/estampas" title="Estampas">ESTAMPAS</a></li>
        <li className={styles.sitemapItem}><a href="/sale" title="Sale">SALE</a></li>
        <li className={styles.sitemapItem}>
          <a href="#">Informações</a>
          <ul>
            <li><a href="/institucional/como-comprar">Como Comprar</a></li>
            <li><a href="/institucional/trocas-e-devolucoes">Trocas e Devoluções</a></li>
            <li><a href="/institucional/frete">Frete</a></li>
            <li><a href="/institucional/duvidas">Dúvidas</a></li>
            <li><a href="https://idec.org.br/consultas/codigo-de-defesa-do-consumidor/capitulo-vi" target="_blank">CDC</a></li>
          </ul>
        </li>
        <li className={styles.sitemapItem}>
          <a href="#">Institucional</a>
          <ul>
            <li><a href="https://www.theminiforest.com/institucional/concurso-de-artes-da-florestinha">Promoção de Fim de Ano!</a></li>
            <li><a href="/institucional/the-mini-forest">The Mini Forest</a></li>
            <li><a href="/institucional/propriedade-industrial">Propriedade Industrial</a></li>
            <li><a href="https://blog.theminiforest.com/" target="_blank">Blog</a></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Sitemap