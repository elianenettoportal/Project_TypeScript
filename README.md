# Project_TypeScript

TypeScript is a strongly typed, object-oriented, compiled programming language that builds on JavaScript. 
It is a superset of the JavaScript language, designed to give you better tooling at any scale.

Typescript is a compiled language. The compiler TCS(Transcript compiler script) will transcript the code to javascript to be able to run in NodeJS or Web Browser
The TypeScript compiler is written in TypeScript.<br>
As a result, it can be compiled into regular JavaScript and can then be executed in any JavaScript engine (e.g. a browser).<br> 
The compiler package comes bundled with a script host that can execute the compiler.

_____________________________________________________________________________________________________________________________________________________
install npm ^9.5 <br>
intall latest nodejs ^18.2 <br>
Create a package folder<br>
Open it from VSCode code . <br>

1- run package manager  - Will simply generate an empty npm project without going through an interactive process. The -y stands for yes
>npm init -y

2- Install bascic dependencies for typescript and node-dev
>npm i typescript @types/node ts-node-dev -D

3- Create a file wit the typescript configuration -> tsconfig.json
>npx tsc --init

4- Create src in the root of the project 

5- Create inside src a file index.ts

6- Go to tsconfig and change: <br>
a) 'target' -> "target": "es2016",   -> "target": "es2020",  <br>
b) 'rootDir' -> uncomment if so and add src as your root diretory "rootDir": "./src", <br>
c) 'outDir' -> uncomment if so and add  "outDir": "./dist" (emitted files, after run to deploy)<br>
	
7- Create a acript file to run th project in localmachine. Edit "package.json" 
  > inside scripts add -> "dev": "ts-node-dev src/server.ts"
  
8- Install Express JS
>npm i express

9- Install the expressJS typtes These are dev dependencies, no need to publish, install using -D command
>npm i -D @types/express

10- Database
>npm install sqlite3<br>
>npm install --save-dev @types/sqlite3

To run o to the terninal and run the file that is in the package json test scripts
> npm run index
