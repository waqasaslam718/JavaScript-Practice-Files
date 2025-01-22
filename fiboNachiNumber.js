    function fibonacciNumber(num)
    {
        if(num<2)
        {
            return num;
        }
        let prve=0,current=1,next=0;
        for(let i=2;i<=num;i++)
        {
            next=prve+current;
            prve=current;
            current=next;
        }   
        return current;

    }
    console.log(fibonacciNumber(2));    