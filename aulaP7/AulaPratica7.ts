const somaFunction = (x: number, y: number): number => x + y;

let valor:number = somaFunction(2, 3);

let funcao = (sobrenome:string) => `Marcelo ${sobrenome}`;

let funcaoDefaultParams = (first_name:string, last_name:string = 'Antonio') => {} ;

funcaoDefaultParams("Marcelo");

let funcaoOptionalParams = (first_name:string, last_name?:string) => {} ;

funcaoOptionalParams("Marcelo");