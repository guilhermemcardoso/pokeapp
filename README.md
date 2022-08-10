### https://pokeapi.co/

1. A API é chamada utilizando o fetch, que já vem embutido no próprio react. Assim não é preciso adicionar nenhuma biblioteca para lidar com requisições HTTP, como o Axios, por exemplo.

A chamada da API é feita dentro do useEffect(), que é um Hook que é chamado toda vez que algo (que você queira observar) acontece. Resumindo, o useEffect ouve alterações em tudo que é adicionado no array de dependências (o segundo parâmetro) e executa a função (primeiro parâmetro) toda vez que alguma dessas dependências sofre alguma alteração. É importante ressaltar que podemos entrar em um loop infinito caso não alguma dependência indevida seja adicionada no array de dependências. Outra dica é deixar o array vazio for necessário chamar o useEffect apenas quando o componente está sendo montado (é o que está sendo feito aqui).

2. O código precisa ter uma estrutura um pouco mais robusta, pois os componentes serão estilizados e novas telas serão adicionadas ao projeto em breve. Para isso, uma biblioteca será utilizada para lidar com a navegação dentro do app, mas falaremos mais sobre isso daqui a pouco.

3. Os componentes da aplicação estão sendo estilizados utilizando o StyleSheet, do próprio React Native. Uma imagem foi adicionada na tela inicial por questões estéticas, mas também para que o componente <Image> do React Native seja utilizado. Foi adicionado também uma propriedade key para o item que contém as informações de cada pokemon. A propriedade key é importante quando temos qualquer tipo de listagem dentro da aplicação, pois ajuda o react native a identificar e renderizar cada elemento. Por isso, cada elemento de uma lista deve possuir uma key única.

4. Para listagem de items dentro de um componente, é interessante, sempre que possível, fazer uso dos componentes do React Native próprios para esta funcionalidade. Como é o caso do <Flatlist>, um componente para listagem de items, sem a necessidade de se fazer um map em um array de objetos. O Flatlist consegue, sozinho, gerenciar seu uso de memória e, assim, renderizar apenas os items que estão sendo exibidos na tela naquele momento.

5. Os componentes da aplicação agora foram quebrados em componentes menores e reutilizáveis. Assim, será possível adicionar alguma biblioteca que possa lidar com a navegação entre telas e adicionar um evento de clique quando um item da lista for selecionado (clicado).

6. A estrutura base para a tela de detalhes do Pokemon foi criada, para que a biblioteca de navegação seja adicionada (React Navigation) e as rotas já possam ser criadas (Tela Home e Tela de Detalhes).