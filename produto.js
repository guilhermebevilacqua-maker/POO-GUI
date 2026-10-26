// criar classe (molde)

class produto{
  id;
  nome;
  ativo;
  //metodo especial construtor
  constructor(id,nome,ativo){
    this.id =id;
    this.nome =nome;
    this.ativo =true;
  }
}
// instanciando = construir um objeto 
const p1 =new produto(1,"Carregador");
const p2 =new produto(2,"Capinha");

console.log(p1);
p1.nome = "Carregador Iphone";
console.log(p1);
console.log(p2);
p2.ativo= false
console.log(p2);
console.log("Nome produto" + p2.nome  +"  status"+ p2.ativo)
