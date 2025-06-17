import React from 'react'
import { useEffect } from 'react'

const ComoComprar: React.FC = () => {
   useEffect(() => {
  const scrollContainer = document.querySelector('.your-scroll-container-class')
  if (scrollContainer) {
    (scrollContainer as HTMLElement).style.scrollBehavior = 'smooth'
  } else {
    document.documentElement.style.scrollBehavior = 'smooth'
  }
}, [])

  return (
    <div className="vtex-flex-layout-0-x-flexCol vtex-flex-layout-0-x-flexCol--como-comprar__col ml0 mr0 pl0 pr0 flex flex-column h-100 w-100">
      {/* Título */}
      <div className="vtex-flex-layout-0-x-flexColChild vtex-flex-layout-0-x-flexColChild--como-comprar__col pb0" style={{ height: '100%' }}>
        <div className="vtex-rich-text-0-x-container vtex-rich-text-0-x-container--como-comprar__titulo flex tl items-start justify-start t-body c-on-base">
          <div className="vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--como-comprar__titulo">
            <h1 className="vtex-rich-text-0-x-heading vtex-rich-text-0-x-heading--como-comprar__titulo t-heading-1 vtex-rich-text-0-x-headingLevel1 vtex-rich-text-0-x-headingLevel1--como-comprar__titulo vtex-rich-text-0-x-heading-level-1">
              Como Comprar
            </h1>
          </div>
        </div>
      </div>

      {/* Introdução */}
      <div className="vtex-flex-layout-0-x-flexColChild vtex-flex-layout-0-x-flexColChild--como-comprar__col pb0" style={{ height: '100%' }}>
        <div className="vtex-rich-text-0-x-container vtex-rich-text-0-x-container--como-comprar__intro flex tl items-start justify-start t-body c-on-base">
          <div className="vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--como-comprar__intro">
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__intro">
              Fazer seu primeiro pedido na The Mini Forest é bem simples e você pode preencher seu cadastro apenas quando for finalizar sua compra.
            </p>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__intro">
              Aqui vão os passos para realizar seu pedido:
            </p>
          </div>
        </div>
      </div>

      {/* Índice com links */}
      <div className="vtex-flex-layout-0-x-flexColChild vtex-flex-layout-0-x-flexColChild--como-comprar__col pb0" style={{ height: '100%' }}>
        <div className="vtex-rich-text-0-x-container vtex-rich-text-0-x-container--como-comprar__passos flex tl items-start justify-start t-body c-on-base">
          <div className="vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--como-comprar__passos">
            <ul className="vtex-rich-text-0-x-list vtex-rich-text-0-x-list--como-comprar__passos">
              <li className="vtex-rich-text-0-x-listItem vtex-rich-text-0-x-listItem--como-comprar__passos">
                <a className="vtex-rich-text-0-x-link vtex-rich-text-0-x-link--como-comprar__passos" href="#passo-1">Faça o Login ou cadastre-se na loja</a>
              </li>
              <li className="vtex-rich-text-0-x-listItem vtex-rich-text-0-x-listItem--como-comprar__passos">
                <a className="vtex-rich-text-0-x-link vtex-rich-text-0-x-link--como-comprar__passos" href="#passo-2">Encontre os produtos desejados</a>
              </li>
              <li className="vtex-rich-text-0-x-listItem vtex-rich-text-0-x-listItem--como-comprar__passos">
                <a className="vtex-rich-text-0-x-link vtex-rich-text-0-x-link--como-comprar__passos" href="#passo-3">Adicione os itens em sua Sacola de Compras</a>
              </li>
              <li className="vtex-rich-text-0-x-listItem vtex-rich-text-0-x-listItem--como-comprar__passos">
                <a className="vtex-rich-text-0-x-link vtex-rich-text-0-x-link--como-comprar__passos" href="#passo-4">Finalize seu pedido</a>
              </li>
              <li className="vtex-rich-text-0-x-listItem vtex-rich-text-0-x-listItem--como-comprar__passos">
                <a className="vtex-rich-text-0-x-link vtex-rich-text-0-x-link--como-comprar__passos" href="#passo-5">Escolha a forma de entrega</a>
              </li>
              <li className="vtex-rich-text-0-x-listItem vtex-rich-text-0-x-listItem--como-comprar__passos">
                <a className="vtex-rich-text-0-x-link vtex-rich-text-0-x-link--como-comprar__passos" href="#passo-6">Insira os dados de pagamento</a>
              </li>
              <li className="vtex-rich-text-0-x-listItem vtex-rich-text-0-x-listItem--como-comprar__passos">
                <a className="vtex-rich-text-0-x-link vtex-rich-text-0-x-link--como-comprar__passos" href="#passo-7">Revise seu pedido</a>
              </li>
              <li className="vtex-rich-text-0-x-listItem vtex-rich-text-0-x-listItem--como-comprar__passos">
                <a className="vtex-rich-text-0-x-link vtex-rich-text-0-x-link--como-comprar__passos" href="#passo-8">Acompanhe o status do seu pedido</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Passo 1 */}
      <div id="passo-1" className="vtex-flex-layout-0-x-flexColChild vtex-flex-layout-0-x-flexColChild--como-comprar__col pb0" style={{ height: '100%' }}>
        <div className="vtex-rich-text-0-x-container vtex-rich-text-0-x-container--como-comprar__passo vtex-rich-text-0-x-container--como-comprar__passo--1 flex tl items-start justify-start t-body c-on-base">
          <div className="vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--como-comprar__passo vtex-rich-text-0-x-wrapper--como-comprar__passo--1">
            <h2 className="vtex-rich-text-0-x-heading vtex-rich-text-0-x-heading--como-comprar__passo vtex-rich-text-0-x-heading--como-comprar__passo--1 t-heading-2 vtex-rich-text-0-x-headingLevel2 vtex-rich-text-0-x-headingLevel2--como-comprar__passo vtex-rich-text-0-x-headingLevel2--como-comprar__passo--1 vtex-rich-text-0-x-heading-level-2">
              1. Faça o Login ou cadastre-se na loja
            </h2>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--1">
              Ao clicar em "Minha Conta", o sistema solicitará seu e-mail para cadastro ou Login. Preencha corretamente o formulário de cadastramento e clique em "Continuar".
            </p>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--1">
              <span className="i vtex-rich-text-0-x-italic vtex-rich-text-0-x-italic--como-comprar__passo vtex-rich-text-0-x-italic--como-comprar__passo--1">
                Ao colocar o CEP, o sistema automaticamente preencherá o campo de endereço, portanto aguarde alguns segundos até que a página atualize este dado.
              </span>
            </p>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--1">
              Se você já for cadastrado/a, basta efetuar o Login para iniciar a navegação.
            </p>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--1">
              <span className="b vtex-rich-text-0-x-strong vtex-rich-text-0-x-strong--como-comprar__passo vtex-rich-text-0-x-strong--como-comprar__passo--1">
                Caso os dados cadastrais do comprador sejam divergentes ou fraudulentos, a loja fará o bloqueio de acesso imediatamente após a confirmação da ilegitimidade.
              </span>
            </p>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--1">
              Ressaltamos que a The Mini Forest trabalha exclusivamente com varejo, ou seja, Cadastro de Pessoa Física, que se destina ao uso das pecinhas, sendo vetada a comercialização dos produtos adquiridos através de nosso site. Esta regra independe do valor do pedido ou quantidade de itens escolhidos pelo consumidor.
            </p>
          </div>
        </div>
      </div>

      {/* Passo 2 */}
      <div id="passo-2" className="vtex-flex-layout-0-x-flexColChild vtex-flex-layout-0-x-flexColChild--como-comprar__col pb0" style={{ height: '100%' }}>
        <div className="vtex-rich-text-0-x-container vtex-rich-text-0-x-container--como-comprar__passo vtex-rich-text-0-x-container--como-comprar__passo--2 flex tl items-start justify-start t-body c-on-base">
          <div className="vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--como-comprar__passo vtex-rich-text-0-x-wrapper--como-comprar__passo--2">
            <h2 className="vtex-rich-text-0-x-heading vtex-rich-text-0-x-heading--como-comprar__passo vtex-rich-text-0-x-heading--como-comprar__passo--2 t-heading-2 vtex-rich-text-0-x-headingLevel2 vtex-rich-text-0-x-headingLevel2--como-comprar__passo vtex-rich-text-0-x-headingLevel2--como-comprar__passo--2 vtex-rich-text-0-x-heading-level-2">
              2. Encontre os produtos desejados
            </h2>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--2">
              Primeiramente você deve navegar pelo site ou realizar uma busca pelos produtos que deseja comprar. Há um campo para busca no canto superior esquerdo da página. Digite o nome ou a referência que procura e clique em OK. Você também pode navegar pelas categorias utilizando os menus e submenus.
            </p>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--2">
              Quando encontrar um item de interesse, clique sobre o nome ou imagem para ver a página de detalhe deste produto. Nesta página você encontrará maiores informações como tamanhos disponíveis, cores, outras imagens e descrição detalhada.
            </p>
          </div>
        </div>
      </div>

      {/* Passo 3 */}
      <div id="passo-3" className="vtex-flex-layout-0-x-flexColChild vtex-flex-layout-0-x-flexColChild--como-comprar__col pb0" style={{ height: '100%' }}>
        <div className="vtex-rich-text-0-x-container vtex-rich-text-0-x-container--como-comprar__passo vtex-rich-text-0-x-container--como-comprar__passo--3 flex tl items-start justify-start t-body c-on-base">
          <div className="vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--como-comprar__passo vtex-rich-text-0-x-wrapper--como-comprar__passo--3">
            <h2 className="vtex-rich-text-0-x-heading vtex-rich-text-0-x-heading--como-comprar__passo vtex-rich-text-0-x-heading--como-comprar__passo--3 t-heading-2 vtex-rich-text-0-x-headingLevel2 vtex-rich-text-0-x-headingLevel2--como-comprar__passo vtex-rich-text-0-x-headingLevel2--como-comprar__passo--3 vtex-rich-text-0-x-heading-level-2">
              3. Adicione os itens em sua Sacola de Compras
            </h2>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--3">
              Após definir o tamanho adequado e a cor de um produto, clique no botão "Comprar" (este botão está na página do produto). O produto será colocado em sua sacola de compras e você será direcionado para uma página que mostrará o que você já incluiu nela.
            </p>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--3">
              Ressaltamos que a sacola/carrinho não garante a reserva de nenhum produto. Os produtos só estão reservados a partir da conclusão do pedido.
            </p>
          </div>
        </div>
      </div>

      {/* Passo 4 */}
      <div id="passo-4" className="vtex-flex-layout-0-x-flexColChild vtex-flex-layout-0-x-flexColChild--como-comprar__col pb0" style={{ height: '100%' }}>
        <div className="vtex-rich-text-0-x-container vtex-rich-text-0-x-container--como-comprar__passo vtex-rich-text-0-x-container--como-comprar__passo--4 flex tl items-start justify-start t-body c-on-base">
          <div className="vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--como-comprar__passo vtex-rich-text-0-x-wrapper--como-comprar__passo--4">
            <h2 className="vtex-rich-text-0-x-heading vtex-rich-text-0-x-heading--como-comprar__passo vtex-rich-text-0-x-heading--como-comprar__passo--4 t-heading-2 vtex-rich-text-0-x-headingLevel2 vtex-rich-text-0-x-headingLevel2--como-comprar__passo vtex-rich-text-0-x-headingLevel2--como-comprar__passo--4 vtex-rich-text-0-x-heading-level-2">
              4. Finalize seu pedido
            </h2>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--4">
              Verifique o que incluiu em sua sacola de compras. Se preferir, você pode modificar a quantidade simplesmente alterando o número 1 para a quantidade desejada. Caso decida remover um item, clique no X referente a este produto. Ele removerá o produto por completo da sacola. Quando estiver tudo correto, clique em "Concluir Compra".
            </p>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--4">
              É essencial que insira todos os itens desejados para a compra no pedido antes da conclusão, pois nenhum produto poderá ser incluído ou retirado de um pedido já finalizado. Neste caso é feito o cancelamento da compra e a devolução do valor (caso sejamos contatados antes do envio).
            </p>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--4">
              <span className="i vtex-rich-text-0-x-italic vtex-rich-text-0-x-italic--como-comprar__passo vtex-rich-text-0-x-italic--como-comprar__passo--4">
                Lembramos nesse ponto que acessórios que acompanharem o produto serão descritos no anúncio de venda. Caso não esteja explícito, não se trata de venda casada.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Passo 5 */}
      <div id="passo-5" className="vtex-flex-layout-0-x-flexColChild vtex-flex-layout-0-x-flexColChild--como-comprar__col pb0" style={{ height: '100%' }}>
        <div className="vtex-rich-text-0-x-container vtex-rich-text-0-x-container--como-comprar__passo vtex-rich-text-0-x-container--como-comprar__passo--5 flex tl items-start justify-start t-body c-on-base">
          <div className="vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--como-comprar__passo vtex-rich-text-0-x-wrapper--como-comprar__passo--5">
            <h2 className="vtex-rich-text-0-x-heading vtex-rich-text-0-x-heading--como-comprar__passo vtex-rich-text-0-x-heading--como-comprar__passo--5 t-heading-2 vtex-rich-text-0-x-headingLevel2 vtex-rich-text-0-x-headingLevel2--como-comprar__passo vtex-rich-text-0-x-headingLevel2--como-comprar__passo--5 vtex-rich-text-0-x-heading-level-2">
              5. Escolha a forma de entrega
            </h2>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--5">
              De acordo com a sua necessidade e disponibilidade, veja o quão rápido você quer receber sua compra e escolha a forma de entrega adequada. Os prazos são estimados e estes dados foram fornecidos pela empresa transportadora.
            </p>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--5">
              <span className="i vtex-rich-text-0-x-italic vtex-rich-text-0-x-italic--como-comprar__passo vtex-rich-text-0-x-italic--como-comprar__passo--5">
                Ao colocar o CEP para entrega, o sistema automaticamente preencherá o campo de endereço, portanto aguarde alguns segundos até que a página atualize este dado. Em alguns casos o CEP não carregará de maneira automática, neste caso pedimos que entre em contato com nosso SAC.
              </span>
            </p>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--5">
              <span className="b vtex-rich-text-0-x-strong vtex-rich-text-0-x-strong--como-comprar__passo vtex-rich-text-0-x-strong--como-comprar__passo--5">
                Ressaltamos que todos os prazos de entrega passam a contar após a postagem da encomenda, que demorará até 4 dias úteis da aprovação do pagamento.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Passo 6 */}
      <div id="passo-6" className="vtex-flex-layout-0-x-flexColChild vtex-flex-layout-0-x-flexColChild--como-comprar__col pb0" style={{ height: '100%' }}>
        <div className="vtex-rich-text-0-x-container vtex-rich-text-0-x-container--como-comprar__passo vtex-rich-text-0-x-container--como-comprar__passo--6 flex tl items-start justify-start t-body c-on-base">
          <div className="vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--como-comprar__passo vtex-rich-text-0-x-wrapper--como-comprar__passo--6">
            <h2 className="vtex-rich-text-0-x-heading vtex-rich-text-0-x-heading--como-comprar__passo vtex-rich-text-0-x-heading--como-comprar__passo--6 t-heading-2 vtex-rich-text-0-x-headingLevel2 vtex-rich-text-0-x-headingLevel2--como-comprar__passo vtex-rich-text-0-x-headingLevel2--como-comprar__passo--6 vtex-rich-text-0-x-heading-level-2">
              6. Insira os dados de pagamento
            </h2>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--6">
              Em seguida, escolha a forma como gostaria de pagar seu pedido. Preencha os dados que forem necessários e siga as instruções na tela.
            </p>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--6">
              <span className="i vtex-rich-text-0-x-italic vtex-rich-text-0-x-italic--como-comprar__passo vtex-rich-text-0-x-italic--como-comprar__passo--6">
                Em caso de compras por cartão, havendo divergência será necessária a confirmação de dados.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Passo 7 */}
      <div id="passo-7" className="vtex-flex-layout-0-x-flexColChild vtex-flex-layout-0-x-flexColChild--como-comprar__col pb0" style={{ height: '100%' }}>
        <div className="vtex-rich-text-0-x-container vtex-rich-text-0-x-container--como-comprar__passo vtex-rich-text-0-x-container--como-comprar__passo--7 flex tl items-start justify-start t-body c-on-base">
          <div className="vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--como-comprar__passo vtex-rich-text-0-x-wrapper--como-comprar__passo--7">
            <h2 className="vtex-rich-text-0-x-heading vtex-rich-text-0-x-heading--como-comprar__passo vtex-rich-text-0-x-heading--como-comprar__passo--7 t-heading-2 vtex-rich-text-0-x-headingLevel2 vtex-rich-text-0-x-headingLevel2--como-comprar__passo vtex-rich-text-0-x-headingLevel2--como-comprar__passo--7 vtex-rich-text-0-x-heading-level-2">
              7. Revise seu pedido
            </h2>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--7">
              Confira se todas as informações fornecidas estão corretas. Após enviar seu pedido, você receberá um e-mail de confirmação de sua compra.
            </p>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--7">
              NENHUM dado desse pedido pode ser alterado, portanto revise todos os detalhes da compra antes da confirmação. Ou seja, nenhum item poderá ser alterado, os endereços não serão alterados, tamanhos não serão alterados, itens não serão removidos ou adicionados, etc.
            </p>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--7">
              Em caso de dados incorretos (tais como os supracitados) o pedido será cancelado e não haverá reserva da peça. O/A cliente deverá iniciar então um novo processo de compra, de acordo com o estoque disponível na Loja Online.
            </p>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--7">
              O nome informado do destinatário precisa ser, obrigatoriamente, de alguém conhecido no local (principalmente em casos de entregas em condomínios, residenciais, empresas etc.), a fim de evitar devolução por desconhecido de pessoas responsáveis pelo recebimento de mercadorias (como porteiros, zeladores etc.).
            </p>
          </div>
        </div>
      </div>

      {/* Passo 8 */}
      <div id="passo-8" className="vtex-flex-layout-0-x-flexColChild vtex-flex-layout-0-x-flexColChild--como-comprar__col pb0" style={{ height: '100%' }}>
        <div className="vtex-rich-text-0-x-container vtex-rich-text-0-x-container--como-comprar__passo vtex-rich-text-0-x-container--como-comprar__passo--8 flex tl items-start justify-start t-body c-on-base">
          <div className="vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--como-comprar__passo vtex-rich-text-0-x-wrapper--como-comprar__passo--8">
            <h2 className="vtex-rich-text-0-x-heading vtex-rich-text-0-x-heading--como-comprar__passo vtex-rich-text-0-x-heading--como-comprar__passo--8 t-heading-2 vtex-rich-text-0-x-headingLevel2 vtex-rich-text-0-x-headingLevel2--como-comprar__passo vtex-rich-text-0-x-headingLevel2--como-comprar__passo--8 vtex-rich-text-0-x-heading-level-2">
              8. Acompanhe o status do seu pedido
            </h2>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--8">
              A qualquer momento você pode acessar seu cadastro e consultar o status do seu pedido. O status será atualizado conforme as etapas forem concluídas, desde a aprovação do pedido até a entrega final.
            </p>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--8">
              Na última etapa você receberá um e-mail com o código de rastreamento onde é possível acompanhar o passo a passo da entrega dos Correios.
            </p>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--8">
              <span className="i vtex-rich-text-0-x-italic vtex-rich-text-0-x-italic--como-comprar__passo vtex-rich-text-0-x-italic--como-comprar__passo--8">
                A The Mini Forest trabalha com diversos sistemas de segurança, visando a segurança de todos os dados cadastrados dos/as clientes na loja. Caso exista a necessidade de confirmação de dados, por qualquer tipo de bloqueio de nosso sistema de segurança, o acesso ao cadastro poderá ser bloqueado sem prévia comunicação.
              </span>
            </p>
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__passo vtex-rich-text-0-x-paragraph--como-comprar__passo--8">
              A The Mini Forest não se responsabilizará por erros no preenchimento (independentemente da natureza do erro) no endereço do/a cliente, portanto as informações devem ser preenchidas corretamente nos campos de identificação do endereço (casa, trabalho, consultório, comercial etc.), endereço, complemento, número, CEP e os demais itens indispensáveis para o cumprimento da entrega.
            </p>
          </div>
        </div>
      </div>

      {/* Final */}
      <div className="vtex-flex-layout-0-x-flexColChild vtex-flex-layout-0-x-flexColChild--como-comprar__col pb0" style={{ height: '100%' }}>
        <div className="vtex-rich-text-0-x-container vtex-rich-text-0-x-container--como-comprar__final flex tl items-start justify-start t-body c-on-base">
          <div className="vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--como-comprar__final">
            <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--como-comprar__final">
              A The Mini Forest se reserva o direito de cancelamento da compra caso haja suspeita de fraude, uso indevido de dados, caracterização de compras em atacado, revenda, e demais atos que descaracterizem a compra do consumidor final.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComoComprar