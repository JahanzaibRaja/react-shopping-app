import { useState,useEffect } from "react";
function Footer() {
    const [data, change] = useState("Ali");
    const [number, change1] = useState(1);
    useEffect(()=>{alert(data)},[data]);
  return (
    <>

      {console.log(data)}
      {console.log(number)}
      <a
        class="btn btn-primary btn-sm "
        href="#"
        role="button"
        onClick={() => change("ahmad")}
      >
        
        Function
      </a>
      <a
        class="btn btn-primary btn-sm "
        href="#"
        role="button"
        onClick={() => change1("ahmad")}
      >
        
        Function
      </a>
    </>
  );
}
export default Footer;
