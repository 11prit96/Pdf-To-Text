import { useState } from "react";

function App() {
  const [file, setFile] = useState(null);
  const [resultText, setResultText] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pdfFile", file);

    const response = await fetch("/api/extract-text", {
      method: "POST",
      body: formData,
    });
    const data = await response.text();

    setResultText(data.trim());
  };

  console.log(resultText);

  return (
    <div>
      <h1>PDF to DOCX Converter</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} required />
        <button type="submit">Convert</button>
      </form>
      <div>
        <p style={{width: '500px', height: '500px', border: '1px solid #444'}}>
          {resultText}
        </p>
      </div>
    </div>
  );
}

export default App;
