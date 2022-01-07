class Restaurante{
    mesas=[];
    constructor(cantMozos, suc=0){
        this.suc=suc;
        this.cantMozos = cantMozos;
        this.cantMesas = cantMozos * 6;
        this.libre = false;
        this.pedido = false;
        this.pagar = false;
        this.crearMesas(this.cantMesas, this.libre, this.pedido, this.pagar, this.suc);
    }

    crearMesas(cantMesas, lib, ped, pag, numSuc){
        for(let i = 0; i < cantMesas; i++){
            let mozo=1;
            if(i < 6){
                mozo = mozo;
            }else if(i < 12){
                mozo = 2;
            }else if(i < 18){
                mozo = 3;
            }else if(i < 24){
                mozo = 4;
            }else if(i < 30){
                mozo = 5;
            }
            this.mesas.push({libre:lib, pedido:ped, pagar:pag, numSuc:numSuc, mozo:mozo})
        }
        this.dibujarMesas();
    }

    dibujarMesas(){
        let cantMesas = document.getElementById("cantMesas");
        this.mesas.forEach((mesa, index)=>{
            let idMesa = index + 1;
            let btnL = "btn"+idMesa;
            let lib = "estado"+idMesa;
            cantMesas.innerHTML += `
                <div id=${idMesa} class="bg-success col-3 m-3 text-light">
                    <h4 class="text-center">Mesa N°${idMesa}</h4>
                    <h5>Mozo N°${mesa.mozo}</h5>
                    <p id=${lib}>Libre</p>
                    <div>Pedido</div>
                    <input id=${btnL} type="submit" class="btn btn-primary m-2" value="Pedir">
                    <button class="btn btn-primary m-2" disable>Pagar</button>
                </div>
            `;
        }); 

        let todas = document.querySelectorAll("input");
        todas.forEach((toda) =>{
            toda.addEventListener("click",(e)=>{    
                console.log(e.target.id);
                console.log(e.target.parentNode);
                let fondoRojo = document.getElementById(e.target.parentNode.id);
                fondoRojo.classList.remove("bg-success");
                fondoRojo.classList.add("bg-danger");

                let ocupado = document.getElementById(e.target.parentNode.children[2].id);
                ocupado.innerHTML = "Mesa ocupada";

            });
        })

    }


}


let suc1 = new Restaurante(5, 1);
/*suc1.crearMesas(suc1.cantMesas, suc1.libre, suc1.pedido, suc1.pagar, 1);*/
console.log(suc1);