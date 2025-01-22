    try{
        console.log(age)
    }
    catch(e){
        console.log(e.name)
        console.log(e.message)
        console.log(e.stack)
    }

    const name= "waqas";
    console.log(name.toUpperCase());


    // try {
    //     let age =17;
    //     if (age<18) {
    //         throw new Error("error found")
    //     } 
        
    // } catch (error) {
    //     console.log(error.name, error.message )
    // }  
    // finally{
    //     console.log("this will always run")
    // } 