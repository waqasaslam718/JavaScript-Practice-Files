
function camelize(str) {
    const array= str.split('-')
    
    const res =array.map((word,index)=>{  
        if(index==0){
            return word;
        }
        else
        {
           return word[0].toUpperCase() + word.slice(1)
        }
    })
   
        return res.join('');


  }
 let str="background-color";
console.log(camelize(str)); 

