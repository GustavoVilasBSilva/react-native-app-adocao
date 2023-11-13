# Projeto: App Adoção

Isso é um novo projeto [React Native](https://reactnative.dev), inicializado usando [`@react-native-community/cli`](https://github.com/react-native-community/cli).

> Optei por utilizar React Native por ser uma biblioteca que desenvolve para multiplataformas utilizando a mesma base de código e também pela capacidade de reutilização dos códigos, tornando mais rápido e fácil o desenvolvimento e manutenção dos projetos.
>
> **Note**: Por utilizar `windows` não tive acesso ao ambiente de teste para `IOS`.

# Primeiros Passos

> **Note**: Certifique-se de ter concluído as instruções de [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) até o passo 'Criando uma nova aplicação' antes de prosseguir.

## Step 1: Clonando e Instalando

Clone este repositório github e em seguida utilize o seguinte comando a partir da raiz do projeto para baixar todas a dependências:

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

## Step 2: Inicie o Servidor Metro

Execute o seguinte comando a partir da raiz do seu projeto React Native para inicializar o servidor Metro:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Inicie sua aplicação

Deixe o Metro Bundler rodar em seu próprio terminal. Abra um novo terminal a partir da raiz do seu projeto React Native. Execute o seguinte comando para iniciar seu aplicativo _Android_ ou _iOS_

### Para Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### Para IOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

---

# Sobre

## Biblioteca de Estilização: [Stitches-Native]('https://github.com/Temzasse/stitches-native')

É uma Implementação React Native da popular biblioteca [CSS-in-JS Stitches]('https://stitches.dev/')

> Um pouco diferente da versão original da Web do _Stitches_ devido às diferenças herdadas entre a Web e as plataformas nativas o _Stitches Native_ se comporta exatamente como a sua versão _"Original"_.
>
> **Suas vantaegns são:**
>
> - **Estilização Baseada em JavaScript:** Permite que você defina estilos diretamente em seu código JavaScript/TypeScript. Isso facilita a criação de componentes autocontidos que incluem seus estilos.
> - **Estilos Dinâmicos:** Permitindo que você crie estilos com base em propriedades ou estados dos componentes. Isso é especialmente útil para criar componentes reutilizáveis e responsivos.
> - **Facilidade de Tematização:** facilita a criação de temas personalizáveis para seus aplicativos, permitindo que você altere facilmente as variáveis de estilo para obter diferentes aparências.
>
> **Note:** Optei em utilizar _Stitches Native_ por ter grande familiaridade com ela em desenvolvimento de aplicações web e afim de testar essa lib para React Native e não utilizar a clássica `styled-components`.

Para acessar o arquivo de configurações acesse `src/config/stitchers.ts`.

## Informações

### Oque é essa aplicação:

A aplicação consiste em um dashboard que lista diferentes animais para adoção exibindo uma imagem e informações sobre o pet a ser adotado.

### APIs

Atualmente são listados apenas _Gatos_ e _Cachorros_ utilizando as seguintes APIs:

```bash
# Gato
https://thecatapi.com/

# Cachorro
https://www.thedogapi.com/

```

Caso queira adicionar novos animais siga o passo a passo a baixo:

Acesse `src/config/api-url.ts`

Em seguida adicione um _object_ no _array_ passando os seguintes itens `id`, `name` ,`url` e `apikey`:

Exemplo

```js
export const apiUrl = [
  {
    id: 0,
    name: 'Cat',
    url: 'https://api.thecatapi.com/',
    apikey:
      'live_lgqQLXMb4A6WYqtjk2JHgW0LZYxDRHqSHrCCq5qC5CIxzYzrwHfsNvx80bMThe3j'
  },
  {
    id: 1,
    name: 'Dog',
    url: 'https://api.thedogapi.com/',
    apikey:
      'live_q0w4Lrl8ukZ450RSzqPhLVjRF2HJHdstcgZpFF834lCfm9s0ITezIbhvFhOFSeTw'
  },
  {
    id: 2,
    name: '{NAME_ANIMAL}',
    url: '{URL_API}',
    apikey: '{KEY}'
  }
]
```

### Features

#### Sistema de Login:

O Login não é 100% funcional pois não faz uma verificação a um `banco de dados`, ele apenas verifica se o email existe dentro de um arquivo `.json`, se caso o email exista ele libera acesso ao dashboard caso ao contrário ele nega o acesso.

Por padrão o arquivo `.json` contém os seguintes email _fulano@gmail.com_, _siclano@gmail.com_ e _deutrano@gmail.com_. Para adicionar novos emails de acesso, basta acessar `src/config/email.json` e adicionar um novo email.

#### Persist Login

Foi utilizado as libs `react-redux`, `@reduxjs/toolkit`, `redux-persist` e `@react-native-async-storage/async-storage`. Porém não consegui deixar funcional, não apresenta nenhum erro no console referente ao `redux-persist` e o login não persiste na memória. [Documentação utilizada]('https://medium.com/@sisongqolosi/redux-persist-with-react-native-using-redux-toolkit-2908cbb9c870').

> **Note:** Mantive o código referente ao `redux-persist` porém o memso **não está funcionando**.

---
