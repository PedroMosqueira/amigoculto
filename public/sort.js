


let nome_num=new Map();


function num(phoneInput){
  
const phoneNumber = phoneInput.getNumber();
//alert (phoneNumber);

const nome=document.getElementById('n').value;


nome_num.set(nome,phoneNumber);

//const num = nome_num.get(nome);

//nome_num.forEach((valor, chave) => 
//{alert(`${chave}: ${valor}`);
//});






//alert(`nome: `+nome+` número; `+num );

return(nome_num);

}


function num_excluir(nome){
nome_num.delete(nome);
alert(`nome ${nome} deletado!`);    

}


function sort(list){

var c=0;
var list2=list.slice();
const  result=new Map();

    while(list.length>0){

        
        
       var sorteante=list2[c]; // Defini quem vai sortear

       var ind= list.indexOf(sorteante);
       if(ind>-1){                //verifica se o sorteante esta na lista

       var listp=list.slice(0,ind).concat(list.slice(ind+1));                               // Exclui o sorteante da possibilidade de ser sorteado
       }else{
        listp=list.slice();
       }
       console.log(ind)
       console.log(list);
       console.log(listp);
      

        var sorteado = listp[Math.floor(Math.random()*listp.length)];   // sorteando
                                                                       
        
        var i=list.indexOf(sorteado);   // obtendo indice do sorteado na lista
                                      
        
        list.splice(i,1);                            // excluindo o sorteado da lista
                                             
        console.log(list);
        console.log(sorteante+` tirou `+sorteado);
        //alert(sorteante+` tirou `+sorteado);

        c=c+1;
        
        result.set(sorteante,sorteado);

        //if(sorteado==undefined){
            //alert(`Tivemos um problema, tente novamente`);
            //break
       // }



        
         var aa= result.get(sorteante);

         alert(sorteante+` tirou o(a)`+aa);
    


         

}
    //alert(`ok`);
   //alert(sorteante+` tirou o(aff)`+aa);
if([...result.values()].includes(undefined)){

    alert('algo deu errado, tente novamente !');
    window.stop();
    process.exit(0);
}else{
    alert(`tudo certo`);
    
}

return result;
}





function resp(){
const res = listar();
//const user=res[0];
//alert(user);
// r = sort(res);
//alert(res);

//alert(r.get(user));









return sort(res);

}


async function enviar(){


    

   var list_amig= resp();
   const chaves=[];
   nome_num.forEach((valor,chave)=>
    {
        chaves.push(chave);

   })


   
   for(let i=0; i<chaves.length;i++){
    const sorteante=chaves[i];
    const sorteado=list_amig.get(sorteante);
    const num_wats=nome_num.get(sorteante);

    alert(`${sorteante} você tirou ${sorteado} e foi enviado para ${num_wats}`);
    const texto= String(`${sorteante}, seu Amigo Oculto é: ${sorteado} `)

    const maxTentativas = 3;
    const tempoDeEspera = 5000; // 5 segundos

    let tentativas = 0;

    while (tentativas < maxTentativas) {
        try {
            const response=await fetch('https://9257-2804-14c-8337-8086-bb5e-e9a7-fb52-3319.ngrok-free.app/enviar-sms', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ numero: num_wats,mensagem:texto}),
            
        });

        const message = await response.text();
  
        console.log(message);
        return;
      } catch (error) {
        console.error(`Erro ao enviar mensagem para ${numero}: ${error}`);
        tentativas++;
        await new Promise((resolve) => setTimeout(resolve, tempoDeEspera));
      }
    }
  
    console.error(`Não foi possível enviar mensagem para ${numero} após ${maxTentativas} tentativas`);
    

   }

  
   


}


