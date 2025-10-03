import React from "react";
// import Greeting from "./components/Greetings";
// import Welcome from "./components/Welcome";
// import Product from "./components/Product";
// import Button from "./components/Button";
import GreetCard from "./components/GreetCard";
// import Card from './Card';

// function App() {
//   return (
//     <div>
//       <Greeting />
//       <p>ini adalah paragraf</p>
//     </div>
//   );
// }

// export default App

// function App() {
//   return (
//     <div>
//       <Welcome name="Rizqi" />
//       <Welcome name="Setiawan" />
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div>
//       <Product
//         productName="Laptop"
//         price="100000"
//         stock="10"
//         isAvailable={true}
//       />
//     </div>
//   );
// }

// export default App;

// function App() {
//   const handleClick = () => {
//     alert('Tombol diklik!');
//   };

//   return (
//     <div>
//       <Button onClick={handleClick} text="Klik Saya" color="blue" />
//       <Button onClick={() => console.log('Tombol kedua diklik')} text="Tombol Lain" color="green" />
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div>
      <GreetCard name="Siti" message="Selamat Pagi" />
      <GreetCard name="Budi" message="Halo"/>{" "}
      {/* message akan menggunakan nilai default "Halo" */}
      <GreetCard /> {/* name akan "Pengunjung", message akan "Halo" */}
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div>
//       <Card>
//         <h2>Judul Kartu Pertama</h2>
//         <p>Ini adalah konten di dalam kartu pertama.</p>
//         <button>Detail</button>
//       </Card>

//       <Card>
//         <h3>Kartu Kedua</h3>
//         <ul>
//           <li>Item 1</li>
//           <li>Item 2</li>
//         </ul>
//       </Card>
//     </div>
//   );
// }

// export default App;
