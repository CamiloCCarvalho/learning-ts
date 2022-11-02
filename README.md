# TYPESCRIPT - PRIMEIROS PASSOS

## TYPESCRIPT - O QUE É:

• É uma linguagem de programação como qualquer outra, porem dizemos que é um SUPERSET do JavaScript, foi construida em cima do JavaScript , a relação de um para o outro é parecida com SASS para CSS.

**Todo codigo JavaScript é um arquivo TypeScript Valido**

• Fortemente tipada

## TYPESCRIPT - POR QUE USAR:

• Após se acostumar com ele melhora muito a sua produtividade.
• A propria IDE já consegue apresentar erros em tempo de compilação
• Tras opções de *Autocomplete*
• Tem como migrar os arquivos de **JS** para **TS** gradativamente
• Curva de aprendizagem bem acelerada por reaproveitar todo conhecimento de **JS**
• Também tras recusos que não são nativos do **JS** como: **Tuplas**, **Enuns** , **Suporte melhor a POO**, entre outros

## TYPESCRIPT - QUANDO USAR:

• Realmente vantajoso em projetos muito grandes.
• Importante ja conhecer JS para aprender TypeScript
• Importante saber quando usar as funcionalidades.
• Não é necessario ficar criando tipos para tudo

## TYPESCRIPT vs JAVASCRIPT:

**SEMELHANÇAS E DIFERENÇAS**

• Mesma sintaxe básica
     • Declaração de variaveis
     • Operadores Lógicios e Aritiméticos
     • Condicionais e Repetições
     • Funções
     • Objetos
     • Promises
     • etc

• Suporte ao ES6+
     • Classes
     • Arrow Functions
     • Async e Await
     • Etc

• Tipagem de varíaveis
     • JavaScript: fraca e dinâmica
     • TypeScript: forte e estática

• Funcionamento no navegador
     • TypeScript: Precisa ser compilado para ser lido no navegador

• Funcionamento com NodeJs
     • JavaScript: Suportado pelo Node
     • TypeScript: Não suportado, precisa ser transformado para JS

## TYPESCRIPT - PRINCIPAIS FEATURES :

• TIPAGEM
• CRIAÇÃO DOS PROPIOS TIPOS
• CRIÇÃO DAS PROPRIAS INTERFACES
• CHACAGEM DE ERRO VIA IDE
• AUTOCOMPLET DA IDE
• EXCELENTE DOCUMENTAÇÃO E SUPORTE DA COMUNIDADE

## TYPESCRIPT - TIPOS PRIMITIVOS:

• BASICOS IGUAL **JS**
• OS QUE NORMALMENTE RECEBE RECEBE DO **typeof** do **JS**
• 3 MAIS UTILIZADOS:
     • BOOLEAN:
         • let exemple: boolean = true
     • NUMBER:
         • let exemple: number = 10
     • STRING:
         • let exemple: string = 'Hellow World 
• ARRAY:
     • let exemple: number[] = [1,2,3]
     • let exemple: Array< number > = [1,2,3]
     • o segundo Exemplo é dos tipos genericos veremos mais adiante

## TYPESCRIPT - CURIOSIDADES NO VSCODE

• O VSCode usa o TS para arquivos JS para ajudar a inferir os tipos, e funciona principalmente quando você declara explicitamente o tipo atribuido a uma variavel.

## TYPESCRIPT - INSTALAÇÃO

• npm install typescript [-g | --save | -D]
     • -g: global na maquina
     • --save (ou vazio): dependencia de produção do projeto npm da pasta
     • -D: como dependencia de Desenvolvimento que não sobe para produção

## TYPESCRIPT - COMPILADOR

• comando:
     • tsc file.ts
     • a Compilação é feita para ES3 do JS

• Configurações do Compilador TSC
     • arquivo: tsconfig.json

• Ao criar o arquivo de config:
     • Não é mais necessario no script do package.json passar o nome do arquivo de entrada

• Criar um Objeto dentro do arquivo:
     {
        "compileOptions": {
            "outFile": "main.js",
            "target": "ES2015",
        }
     }

     • target: "ES3", "ES5", "ESNEXT"

• COMANDO PARA GERAR O TSCONFIG
     • tsc --init
     • ou: npx -p typescript tsc --init

     • ira gerar o arquivo tsconfig.json com a config basica e todas opções comentadas
