### https://pokeapi.co/

1. A API é chamada utilizando o fetch, que já vem embutido no próprio react. Assim não é preciso adicionar nenhuma biblioteca para lidar com requisições HTTP, como o Axios, por exemplo.

A chamada da API é feita dentro do useEffect(), que é um Hook que é chamado toda vez que algo (que você queira observar) acontece. Resumindo, o useEffect ouve alterações em tudo que é adicionado no array de dependências (o segundo parâmetro) e executa a função (primeiro parâmetro) toda vez que alguma dessas dependências sofre alguma alteração. É importante ressaltar que podemos entrar em um loop infinito caso não alguma dependência indevida seja adicionada no array de dependências. Outra dica é deixar o array vazio for necessário chamar o useEffect apenas quando o componente está sendo montado (é o que está sendo feito aqui).

2. O código precisa ter uma estrutura um pouco mais robusta, pois os componentes serão estilizados e novas telas serão adicionadas ao projeto em breve. Para isso, uma biblioteca será utilizada para lidar com a navegação dentro do app, mas falaremos mais sobre isso daqui a pouco.

3. Os componentes da aplicação estão sendo estilizados utilizando o StyleSheet, do próprio React Native. Uma imagem foi adicionada na tela inicial por questões estéticas, mas também para que o componente <Image> do React Native seja utilizado. Foi adicionado também uma propriedade key para o item que contém as informações de cada pokemon. A propriedade key é importante quando temos qualquer tipo de listagem dentro da aplicação, pois ajuda o react native a identificar e renderizar cada elemento. Por isso, cada elemento de uma lista deve possuir uma key única.

4. 