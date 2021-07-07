import { Questions } from "./QuestionBank"


const next1=(curr,choice)=>{
    if (Questions[curr].ans===choice){
        Questions[curr].sel=1
    }
    else{
        Questions[curr].sel=0
    }
   
   
}

export {next1}