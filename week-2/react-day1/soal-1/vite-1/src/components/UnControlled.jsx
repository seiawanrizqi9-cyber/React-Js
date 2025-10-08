  import React, { useRef } from "react";

  function Uncontrolled() {
    const nameInputRef = useRef(null); 

    const handleSubmit = (event) => {
      event.preventDefault(); 

      alert("Nama kamu (uncontrolled): " + nameInputRef.current.value);

      nameInputRef.current.value = "";
    };

    return (
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <h2>Uncontrolled Component (Soal 4)</h2>

        <label>
          Nama:{" "}
          <input
            type="text"
            ref={nameInputRef}
            defaultValue="Tidak ada nama" 
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }

  export default Uncontrolled;
