# Introdução
A aplicação contém duas telas: Home e Detalhes. 

A tela Home contém uma listagem de itens que vêm de uma API e esta listagem possui paginação. Ao clicar em um dos itens, o usuário é redirecionado para a tela de Detalhes.

A tela de Detalhes possui campos de texto e imagem retornados da API que está sendo utilizada na aplicação.

A API que está sendo utilizada nessa aplicação é a [PokéAPI](https://pokeapi.co).

# Índice
Aqui, um índice foi criado com o intuito de ajudar o leitor a navegar por esta documentação simplificada que contém o passo a passo do que foi feito durante o desenvolvimento desta simples aplicação:

[1. Chamando a API pela primeira vez](#chamando-a-api-pela-primeira-vez)
[2. Reestruturando as pastas do projeto](#reestruturando-as-pastas-do-projeto)
[3. Estilização de componentes](#estilização-de-componentes)
[4. Primeira imagem do projeto](#primeira-imagem-do-projeto)
[5. Listagem de objetos com Flatlist](#listagem-de-objetos-com-flatlist)
[6. Reusabilidade de código](#reusabilidade-de-código)
[7. Tela de detalhes](#tela-de-detalhes)
[8. Navegação](#navegação)
[9. Criando eventos de clique com TouchableOpacity](#criando-eventos-de-clique-com-touchableopacity)
[10. Parâmetros de navegação](#parâmetros-de-navegação)
[11. Refatoração de código](#refatoração-de-código)
[12. Paginação na lista](#paginação-na-lista)

# Chamando a API pela primeira vez
A API é chamada utilizando o `fetch`, que já vem embutido no próprio React. Assim, não é preciso adicionar nenhuma biblioteca para lidar com requisições HTTP, como o [Axios](https://axios-http.com/), por exemplo.

A chamada da API é feita dentro do `useEffect`, que é um Hook que é chamado toda vez que algo (que precise ser observado) acontece. Resumindo, o `useEffect` ouve alterações em tudo que é adicionado no array de dependências (o segundo parâmetro) e executa a função (primeiro parâmetro) toda vez que alguma dessas dependências sofre alguma alteração. 

É importante ressaltar que podemos entrar em um "loop infinito" caso alguma dependência indevida seja adicionada no array de dependências. Outra dica é deixar o array vazio quando for necessário chamar o `useEffect` apenas quando o componente está sendo montado (é o que está sendo feito aqui).

# Reestruturando as pastas do projeto
O código precisa ter uma estrutura um pouco mais robusta do que a inicial, pois os componentes precisam ser estilizados e novas telas serão adicionadas ao projeto em breve. Para isso, uma biblioteca será utilizada para lidar com a navegação dentro da aplicação, mas falaremos mais sobre isso daqui a pouco.

  
# Estilização de componentes
3. Os componentes da aplicação estão sendo estilizados utilizando o StyleSheet, do próprio React Native. Para isso, basta que um objeto do tipo `StyleSheet` seja criado (dentro do mesmo arquivo ou importado de outro arquivo, como fazemos nesse projeto) e chamado dentro da propriedade `style` dos componentes a serem estilizados. Muito parecido com CSS em desenvolvimento web.

# Primeira imagem do projeto
Uma imagem foi adicionada na tela inicial por questões estéticas, mas também para que o componente `<Image>` do React Native seja utilizado pela primeira vez por aqui. 

Foi adicionado também uma propriedade `key` para o item que contém as informações de cada Pokémon. A propriedade `key` é importante quando temos qualquer tipo de listagem dentro da aplicação, pois ajuda o React Native a identificar e renderizar cada elemento. Por isso, cada elemento de uma lista deve sempre possuir uma `key` única.

# Listagem de objetos com Flatlist
Para listagem de objetos dentro de um componente, é interessante, sempre que possível, fazer uso dos componentes do React Native próprios para esta funcionalidade. Como é o caso do `<Flatlist>`, um componente para listagem de objetos, sem a necessidade de se fazer um map em um array de objetos, por exemplo. 

O `<Flatlist>` consegue, sozinho, gerenciar seu uso de memória e, assim, renderizar apenas os items que estão sendo exibidos na tela naquele momento, tendo uma performance melhor do que simplesmente listar toda a lista de objetos na tela.

# Reusabilidade de código
Os componentes da aplicação agora foram quebrados em componentes menores e reutilizáveis. Assim, será possível adicionar alguma biblioteca que possa lidar com a navegação entre telas e adicionar um evento de clique quando um item da lista for selecionado (clicado). Além disso, ao colocar os componentes da tela em outro arquivo, esse componente pode ser utilizado em outras partes da aplicação, caso necessário.  

# Tela de detalhes
7. A estrutura base para a tela de detalhes do Pokémon foi criada, para que a biblioteca de navegação seja adicionada ([React Navigation](https://reactnavigation.org/)) e as rotas já possam ser criadas (Tela Home e Tela de Detalhes).

  
# Navegação
Para que possa existir uma tela com mais informações do Pokémon selecionado, é preciso utilizar alguma biblioteca para navegação entre telas, pois o React Native não faz isso por si só. No caso, será utilizada uma das bibliotecas mais populares para isso, a React Navigation. Abaixo, seguem os comandos necessários para adicionar a biblioteca e suas dependências ao projeto. Mas, caso, queira, [aqui](https://reactnavigation.org/docs/getting-started/) é possível ver o passo a passo com mais detalhes.

    yarn add @react-navigation/native 
    //ou npm install @react-navigation/native

    yarn add react-native-screens react-native-safe-area-context 
    //ou npm install react-native-screens react-native-safe-area-context

    yarn add @react-navigation/native-stack 
    //ou npm install @react-navigation/native-stack

	cd ios
	pod install

  
De acordo com o passo a passo citado acima, da documentação da própria biblioteca, é preciso realizar algumas pequenas alterações no código nativo da plataforma Android:

> react-native-screens package requires one additional configuration step to properly work on Android devices. Edit MainActivity.java file which is located in android/app/src/main/java/nome-do-pacote/MainActivity.java.

  Portanto, adicione o código abaixo dentro do arquivo MainActivity.java:  

    @Override
    protected void onCreate(Bundle savedInstanceState) {
    	super.onCreate(null);
    }

E não se esqueça de adicionar a linha abaixo junto aos outros imports no topo do mesmo arquivo:

    import android.os.Bundle;

Após as dependências serem adicionadas ao projeto, é possível criar uma Pilha de Navegação.

No projeto, foi criada uma pilha de navegação do tipo `NativeStack`, que é o tipo mais comum de pilha para aplicações móveis. Mas é possível utilizar pilhas do tipo `BottomTab` (utilizada com uma barra no rodapé da página, para navegar entre as diferentes abas), `Drawer` (utilizada com o famoso "hamburguer menu"), entre outras.

# Criando eventos de clique com TouchableOpacity
É preciso criar um evento de clique para que o usuário da aplicação possa navegar entre telas. Uma das maneiras de se fazer isso é utilizando o Hook `useNavigation`. Para que cada item da lista de Pokémons possa ser clicável, é preciso que sua `View` mais externa seja substituída de `View` para uma `TouchableOpacity`. `TouchableOpacity` é um componente do próprio React Native que consegue exibir uma resposta visual ao ser clicado e também lidar com o evento de clique e clique longo. 

Assim, ao ser clicado, o item da lista irá disparar o método criado na própria tela inicial, o qual irá chamar o evento de navegação para que o usuário seja redirecionado para a tela de detalhes do Pokémon.

Na tela de detalhes, foi adicionado um botão apenas para exemplo, que chama uma função de navegação chamada `.goBack()`, que volta para o estado anterior da pilha de navegação. Ou seja, redireciona o usuário de volta para a tela em que se encontrava anteriormente.

  
# Parâmetros de navegação
10. Ao navegar para uma nova tela, é possível de se enviar informações via parâmetros. Os parâmetros são opcionais e podem ser de diferentes tipos.

No caso, a tela de detalhes precisa, principalmente, da URL que vem na listagem de Pokémons da tela inicial. Assim, é possível de se realizar uma nova requisição à API para trazer os detalhes do Pokémon selecionado.

Na tela de detalhes, foi criada uma função (praticamente igual à da tela inicial) para ler o parâmetro de navegação enviado, além de utilizar esse parâmetro para realizar uma nova requisição à API. O retorno dessa requisição é salvo no estado do componente da tela de detalhes. 

Aqui, é preciso ressaltar um ponto importante: a função foi criada utilizando um outro Hook do React Native: `useCallback`. Isso foi feito dessa forma porque essa função depende de outros parâmetros (no caso, de navegação), e o `useEffect` depende dessa função. Se não for utilizado o `useCallback`, a cada renderização da tela, uma nova função será criada e o `useEffect` será disparado todas as vezes que isso acontecer. Outro Hook muito utilizado nessas situações é o `useMemo`. 

> O useMemo está para valores assim como o useCallback está para funções.

Além de todos os componentes visuais, foi criada também uma função para deixar a primeira letra do nome do Pokémon maiúscula, apenas por questões estéticas e para praticar um pouco mais as possibilidades que o JavaScript oferece. 

O botão "voltar" foi transferido para o cabeçalho da tela, utilizando um ícone de seta, intuitivo e próximo ao visual já popular nas plataformas mobile.

# Refatoração de código
Foi feita uma refatoração de código por questões de usabilidade e legibilidade do código. Itens de listas foram extraídos para componentes externos. A função de formatação de nomes foi extraída para um arquivo "utils" na raíz do projeto, assim outros componentes e telas podem usar a mesma função quando necessário.  

# Paginação na lista
Para uma melhor usabilidade, e para a aplicação ficar mais divertida, uma paginação básica é implementada na listagem de Pokémons, aproveitando que a própria API já fornece uma paginação para todas as listagens disponíveis.

Assim, no próprio retorno da requisição à API que contém a lista de Pokémons, dois outros valores são fornecidos: `previous` e `next`. Estes dois campos contêm uma URL cada um, quando existe a página anterior (campo previous) ou a próxima página (campo next), e quando a página não existe, o campo irá retornar um valor nulo. 

Portanto, basta que estes campos sejam armazenados no estado da tela inicial da aplicação e, caso o campo não seja nulo, seu botão correspondente será exibido no rodapé da tela. O componente do botão foi criado como um componente geral da aplicação a partir de uma `TouchableOpacity` e um `Text`.