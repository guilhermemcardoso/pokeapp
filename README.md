### https://pokeapi.co/

1. A API é chamada utilizando o fetch, que já vem embutido no próprio react. Assim não é preciso adicionar nenhuma biblioteca para lidar com requisições HTTP, como o Axios, por exemplo.

A chamada da API é feita dentro do useEffect(), que é um Hook que é chamado toda vez que algo (que você queira observar) acontece. Resumindo, o useEffect ouve alterações em tudo que é adicionado no array de dependências (o segundo parâmetro) e executa a função (primeiro parâmetro) toda vez que alguma dessas dependências sofre alguma alteração. É importante ressaltar que podemos entrar em um loop infinito caso não alguma dependência indevida seja adicionada no array de dependências. Outra dica é deixar o array vazio for necessário chamar o useEffect apenas quando o componente está sendo montado (é o que está sendo feito aqui).

2. O código precisa ter uma estrutura um pouco mais robusta, pois os componentes serão estilizados e novas telas serão adicionadas ao projeto em breve. Para isso, uma biblioteca será utilizada para lidar com a navegação dentro do app, mas falaremos mais sobre isso daqui a pouco.

3. Os componentes da aplicação estão sendo estilizados utilizando o StyleSheet, do próprio React Native. 

4. Uma imagem foi adicionada na tela inicial por questões estéticas, mas também para que o componente <Image> do React Native seja utilizado. Foi adicionado também uma propriedade key para o item que contém as informações de cada pokemon. A propriedade key é importante quando temos qualquer tipo de listagem dentro da aplicação, pois ajuda o react native a identificar e renderizar cada elemento. Por isso, cada elemento de uma lista deve possuir uma key única.

5. Para listagem de items dentro de um componente, é interessante, sempre que possível, fazer uso dos componentes do React Native próprios para esta funcionalidade. Como é o caso do <Flatlist>, um componente para listagem de items, sem a necessidade de se fazer um map em um array de objetos. O Flatlist consegue, sozinho, gerenciar seu uso de memória e, assim, renderizar apenas os items que estão sendo exibidos na tela naquele momento.

6. Os componentes da aplicação agora foram quebrados em componentes menores e reutilizáveis. Assim, será possível adicionar alguma biblioteca que possa lidar com a navegação entre telas e adicionar um evento de clique quando um item da lista for selecionado (clicado).

7. A estrutura base para a tela de detalhes do Pokemon foi criada, para que a biblioteca de navegação seja adicionada (React Navigation) e as rotas já possam ser criadas (Tela Home e Tela de Detalhes).

8. Para que possa existir uma tela com mais informações do Pokemon selecionado, é preciso utilizar alguma biblioteca para navegação entre telas, pois o React Native não faz isso por si só. No caso, será utilizada uma das bibliotecas mais populares para isso, a React Navigation. Abaixo, seguem os comandos necessários para adicionar a biblioteca e suas dependências ao projeto.

https://reactnavigation.org/docs/getting-started/
yarn add @react-navigation/native ou npm install @react-navigation/native

yarn add react-native-screens react-native-safe-area-context ou npm install react-native-screens react-native-safe-area-context

yarn add @react-navigation/native-stack ou npm install @react-navigation/native-stack

cd ios
pod install

react-native-screens package requires one additional configuration step to properly work on Android devices. Edit MainActivity.java file which is located in android/app/src/main/java/<your package name>/MainActivity.java.

Add the following code to the body of MainActivity class:

@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
and make sure to add an import statement at the top of this file:

import android.os.Bundle;

Após as dependências serem adicionadas ao projeto, é possível criar uma Pilha de Navegação.

9. É preciso criar um evento de clique para que o usuário do app possa navegar entre telas. Uma das maneiras de se fazer isso é utilizando o hook useNavigation. Para que cada item da lista de pokemons possa ser clicável, é preciso que sua View mais externa seja substituída de View para uma TouchableOpacity. TouchableOpacity é um componente do próprio React Native que consegue exibir uma resposta visual ao ser clicado e também lidar com o evento de clique e clique longo. Assim, ao ser clicado, o item da lista irá disparar o método criado na própria tela inicial, o qual irá chamar o evento de navegação para que o usuário seja redirecionado para a tela de detalhes do pokemon. 

Na tela de detalhes, foi adicionado um botão apenas para exemplo, que chama uma função de navegação chamada goBack, que volta para o estado anterior da pilha de navegação. Ou seja, redirecionada o usuário de volta para a tela anterior.

10. Ao navegar para uma nova tela, é possível de se enviar informações via parâmetros. Os parâmetros são opcionais e podem ser de diferentes tipos. 

No caso, a tela de detalhes precisa, principalmente, da URL que vem na listagem de pokemons da tela inicial. Assim é possível de se realizar uma nova requisição à API para trazer os detalhes do pokemon selecionado.

Na tela de detalhes, foi criada uma função (praticamente igual à da tela inicial) para ler o parâmetro de navegação enviado, além de utilizar esse parâmetro para realizar a requisição à API. O retorno dessa requisição é salvo no estado do componente da tela de detalhes. Aqui, é preciso ressaltar um ponto importante: a função foi criada utilizando um outro hook do React Native: useCallback. Isso foi feito dessa forma porque essa função depende de outros parâmetros (no caso, de navegação), e o useEffect depende dessa função. Se não for utilizado o useCallback, a cada renderização da tela, uma nova função será criada e o useEffect será disparado todas as vezes que isso acontecer. Outro hook muito utilizado nessas situações é o useMemo. O useMemo está para valores assim como o useCallback está para funções.

Além de todos os componentes visuais, foi criada uma função para deixar a primeira letra do nome do Pokemon maiúscula, apenas por questões estéticas. E o botão de "voltar" foi transferido para o cabeçalho da tela, utilizando um ícone de seta, intuitivo e próximo ao visual já padrãos das plataformas mobile.

11. Refatoração de código por questões de usabilidade e legibilidade do código. Itens de listas foram extraídos para componentes externos, funções de formatação extraídas para um arquivo "utils" na raíz do projeto, assim outros componentes e telas podem usar a mesma função quando necessário.