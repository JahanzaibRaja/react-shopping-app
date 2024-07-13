 import React, { useState } from "react";
//  import Table from 'react-bootstrap/Table';
// class Body extends React.Component {
//   constructor() {
//     super();

//     console.warn("hello constructor");
//     this.state = {
//       name: "Jahanzaib",
//       name2: "azeem",
//       updated: false, // Flag to track if update has occurred
//     };
//   }
//   shouldComponentUpdate() {
//     console.warn(`should component ${this.state.name}`);
//     console.warn(`should component ${this.state.name2}`);
//     return true;
//   }
//   componentDidUpdate(prevProps, prevState) {
//     // Check if the state update has not occurred yet and if the name is 'Ashraf'
//     if (!this.state.updated && this.state.name === "") {
//       console.warn("componentDidUpdate");
//       this.setState({ name: "Hamza", updated: true });
//     }
//   }

//   componentDidMount() {
//     console.warn("componentDidMount");
//   }

//   render() {
//     console.warn("hello render");
//     return (
//       <>
//         <h1>Constructor Lifecycle state1: {this.state.name}</h1>
//         <h1>Constructor Lifecycle state2: {this.state.name}</h1>
//         <a
//           className="btn btn-primary btn-sm"
//           role="button"
//           onClick={(e) => {
//             this.setState({ name: "" });
//           }}
//         >
//           State
//         </a>
//         <a
//           className="btn btn-primary btn-sm"
//           role="button"
//           onClick={(e) => {
//             this.setState({ name2: "J_rajah" });
//           }}
//         >
//           State2
//         </a>
//       </>
//     );
//   }
// }

// export default Body;
function Body()
{
 const [data,setproduct]=useState([]);
 fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setproduct(json))
  return(
    
    <>
<table>
  <tr>
 {data.map((item)=><h1>{item.description}</h1>)}
  </tr>
     
</table>
    </>
  )
}
export default Body;