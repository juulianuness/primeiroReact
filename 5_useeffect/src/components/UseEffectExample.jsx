import { useState, useEffect } from 'react'

const UseEffectExample = () => {
// sem dependencias
    useEffect(() => {
        console.log("Rodou UE1");
    }); 

    // com dependencias zazias (array dep. vazio)(bom para chamar API)
    useEffect(()=>{
        console.log("Rodou UE2");
    },[]);


    const [count, setCount] = useState(0);

     // com dependencias 
     useEffect(()=> {
        console.log("Rodou UE3");
    }, [count] );

  return (
    <div>
        <p>{count}</p>
        <button onClick={() => setCount(count +1)}>Aumentar contagem</button>


    </div>
  )
}

export default UseEffectExample
