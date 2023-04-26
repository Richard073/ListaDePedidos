
let itens=[
["Pilsen"],
["Red"],,
["Ipa "]
] 

 const quantidadeDeMesas= []
 let menu= ""


  do {
    menu = prompt(` lista de mesa:
    ${quantidadeDeMesas.length}
    1- Abrir mesa
    2- mostrar itens
    3- sair do programa`)

    switch(menu){
        case"1":
        const mesa={}

        mesa.numeroMesa= Number(prompt(`Numero da mesa`))
        mesa.pessoas= Number(prompt(`Número de pessoas`))
        // mesa.pedido= prompt("Faça seu pedido aqui")
        const pedido=prompt(`estes são os produtos ${itens}`)
        const confirmarPedido = confirm(
          `Lista do seu pedido:
          ${pedido}`
        )
       if(confirmarPedido){
        quantidadeDeMesas.push(mesa)
        alert("Pedido Confirmado")
       }
        break;
        case"2":
        for(let i =0; i <quantidadeDeMesas.length;i++){
          alert(`mesa ${(i + 1)}
                Numero da mesa: ${quantidadeDeMesas[i].numeroMesa}
                Quantidade de pessoas: ${quantidadeDeMesas[i].pessoas}
                pedido: ${quantidadeDeMesas[i].pedido}`
            )
        }
        break;
        case"3":
        alert("saindo do programa")
        break;
        default:
            alert("Opção invalida")

    }
  } while (menu !=="3");
