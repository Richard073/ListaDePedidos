let namesItens=""
let itens=""
let itensTable= 0

let quantidadeDeMesa = []

function abrirMesa(){
  let mesa={}

  mesa.numeroMesa=Number(prompt("Numero da mesa"))
  mesa.pessoas= Number(prompt(`Quantas pessoas tem na mesa`))
  

  const order= prompt(`Estes são os produtos${itens}`)
  const confirmOrder= confirm(`Deseja confirmar o pedido? ${order}`)

  if(confirmOrder){
    quantidadeDeMesa.push(mesa)
    alert(`Confirm order `)
  }
}

function showTable(){
  for(let i=0; i <quantidadeDeMesa.length; i++){
    alert(`Mesa ${i+1} 
    numero da mesa ${quantidadeDeMesa[i].numeroMesa}
    quantidade de pessoas ${quantidadeDeMesa[i].pessoas}
    quantidade de  pedido ${quantidadeDeMesa[i].itens}`)
    
  }

}
 function closeProgram(){
  alert(`Close program`)
 }

 function invalidoption(){
  alert(`Invalid option`)
 }
 
 function menu(){
  let choice= ""
  do{
    choice = prompt(`Choice Option :${quantidadeDeMesa.length}
     1. Abrir mesa
     2. Mostrar Mesa
     3. Sair da mesa
    `)
    // switch(choice){
      
    //   case "1":
    //     let choiceItens=prompt(`choice option:
    //     1. Chop
    //     2. Food
    //     3. Drink`)
    //       switch(choiceItens){
    //         case "1":
    //           namesItens+=`Itens:
    //           1. Pilsen
    //           2. Red
    //           3. Ipa
    //           4. Summer`
    //           itens+=`${namesItens}` 
    //           itensTable++
    //         break;
    //         case "2":
    //           choiceItens=prompt(`choice option:
    //           1. Ancho
    //           2. Joelho
    //           3. Pastel
    //           4. Sertão`)
    //           itens+=`${namesItens}`
    //           itensTable++
    //           break;
    //           case"3":
    //            choiceItens=prompt(`choice option:
    //           1. Ice Lemonade
    //           2. Caipe
    //           3. start Irish Coffe`)
    //           itens+=`${nameItens}`
    //           itensTable++
    //           break;
    //           default:
    //             alert("invakid Option")
    //             break;
    //       }
    // }
    switch (choice){
      case "1":
        abrirMesa();
        break;
        case "2":
          showTable();
          break;
          case"3":
          closeProgram();
          break;
          default:
            invalidoption();
            break;
    }
  }while(choice!=="3")
 }
 menu();
