### https://pokeapi.co/

1. Chamaremos a API utilizando o fetch, que já vem embutido no próprio react. Assim não precisamos adicionar nenhuma biblioteca para lidar com requisições HTTP, como o Axios, por exemplo.

A chamada da API é feita dentro do useEffect(), que é um Hook que é chamado toda vez que algo (que você queira observar) acontece. Resumindo, o useEffect ouve alterações em tudo que você adiciona no array de dependências dele (o segundo parâmetro) e executa a função (primeiro parâmetro) toda vez que alguma dessas dependências sofre alguma alteração. É importante ressaltar que você pode entrar em um loop infinito caso não tome cuidado com o que adiciona no array de dependências. Outra dica é deixar o array vazio, assim o useEffect é chamado apenas quando o componente está sendo montado (é o que estamos fazendo aqui).

2. Estruturaremos um pouco melhor o código, pois começaremos a estilizar nossos componentes e adicionar novas telas em breve. Para isso, iremos adicionar uma biblioteca para lidar com a navegação dentro do app, mas falaremos mais sobre isso daqui a pouco.

