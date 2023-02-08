// notas
const note1 = document.getElementById("note1")
const note2 = document.getElementById("note2")
const note3 = document.getElementById("note3")
//resultados
const FinalNote = document.getElementById("FinalNote")
const Details = document.getElementById("Details")
//boton
const btnCalculate = document.getElementById("btnCalculate")
//acomulado
let accumulated =0
//verificador de numeros
let calculo =0

btnCalculate.addEventListener("click", (()=>{

    if(note1.value=="" || note2.value==""){

        Details.textContent="something missing"
        accumulated.textContent=""
    }else{
        
        if (note3.value ==""){
            
            calculo = ((2.1 - accumulated)/0.40).toFixed(2);

            Details.textContent="the third note should be "+calculo;
            
        }else{

            accumulated = ((note1.value*0.3)+(note2.value*0.3)+(note3.value*0.4))

            FinalNote.textContent= accumulated.toFixed(2);

            if(accumulated>=3.5){

                if(accumulated>=4.6 &&accumulated<=5){
                    Details.textContent="Passed and will be recognized with honors"
                }else{
                    Details.textContent="approved the matter"
                }
            }else if(accumulated<3.5){

                if(accumulated>=2.1 && accumulated<=3.4){
                    Details.textContent="Failed the subject but can recover"
                }else{
                    Details.textContent="failed the subject"
                }
            }
        }
        

    }
}))