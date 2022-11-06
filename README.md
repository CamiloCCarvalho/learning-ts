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
         • let exemple: string = 'Hellow World'
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

## TYPESCRIPT - TUPLAS

• Tuplas são Arrays
      • Porem diferente do JS você declara o tipo dos valores e a quantidade
      • Tornando isso um padrão
      • EXEMPLO:
           • let crew: [string, number]
           • dessa maneira crew é uma tupla (Arra especifico)
           • só recebe 2 valores (Obrigatório)
           • sendo o primeiro string o segundo number (obrigatório)

## TYPESCRIPT - ENUMS

• Uma especie de Array de Constantes
• Porem o index é o nome da constante
• O valor atribuido é o numero que seria o index
• tem como mudar o comportamento inicial para começar de 1
      • EXEMPLO:
           • enum Planets {
               MERCURIO = 1,
               VENUS,
               TERRA,
               MARTE
           }
           Planets.TERRA  //return 3 (number)

• Padrão normal trabalha com numeros
• Desta maneira ele incrementa sozinho
• Pode atribuir valores especificos em cada um

## TYPESCRIPT - EVITANDO TIPAGEM

• É possivel evitar a tipagem de alguams formas veja:

• 1 exemplo:
      • function sendSpacechip(spaceship: { pilot: string, copilot?: string }) {
          //...
      }
      • a **?** no **copilot** indica que pode não não existir este atributo permitindo instanciar o objeto passando apenas os parametros obrigatórios


• 2 exemplo:
      • let input: unknown
      • o tipo **unknown** é desconhecido aceitando qualquer tipo, e podendo ser alterado depois
      • *outra variavel não pode receber esta variavel*
      • porem **unknown** recebe qualquer variavel e qualquer tipo


• 3 exemplo:
      • let input: **any**
      • desta maneira para de funcionar o TypeScript e vale o JS
      • *Evitar ao maximo usar ele*

• 4 exemplo:
      • let _check: **never**
      • *indica que o valor esta errado, nunca deveria existir esta variavel*
      • outra variavel pode receber o tipo **never**
      • *é mais comum enquanto desenvolve do que usar no proprio codigo.*

## TYPESCRIPT - CRIANDO TIPOS

• 1 Utilizando PipeLine para significar OU:
      • let option: "Yes" | "No"
      • let option: string | bolean 

• 2 Utilizando Allias:
      • type Planet = "Mercúrio" | "Vênus" | "Terra"
      • referenciando o tipo:
           • function x(param: Planet) {/*code here*/} 

• 3 Utilizando Allias para Funções:
      • type GreetingCallback = (name: string) => void {/*code here*/}
      • referenciando o tipo função:
           • function x(param: GreetingCallback) {/*code here*/}


## TYPESCRIPT - Criando Interfaces

• Interfaces é muito parecido com Allias (type) usado anteriormente
• Interfaces é mais apropriado para trabalhar com Objetos e Classes
• É possivel usar extends para herdar de outra **Interface**

      • USANDO INTERFACE:
      interface CelestialBody {
          name: string
          mass: number
      }
      interface Star extends CelestialBody {
          age: number
          planets: Planet[]
      }
      interface Planet extends CelestialBody {
          population: number
          createSatellite: (name: string) => void
      }

      • INSTANCIANDO
      let sun: Star

      sun.name = "exemple"
      sun.mass = 1.899
      sun.planets = []

• Para trabalhar com classes usar da seguinte forma:
      • class MyClass implements Planet {
          //contrato obrigado a implementar o que vem herdado de planet (interface)
      }

• É possivel declarar as interfaces mais de uma vez para para adicionar coisas a ela. E na parte de Classes automaticamente no VSCode vai apresentar que precisa corrigir a implementação da classe para adicionar o conteudo novo.