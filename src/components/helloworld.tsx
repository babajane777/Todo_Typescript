type Nametype = {
   name:string;
}



export function Helloworld({name}:Nametype){
   const handleclick = ({name}:Nametype): void => {
      console.log("hello" + " " + name);
   }
   return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={ () => handleclick({name})}> click </button>
    </div>
   )
}

