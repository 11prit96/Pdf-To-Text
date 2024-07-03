import useConvertPdf from "../Hooks/useConvertPdf";

const Homepage = () => {
  const { handleFileChange, handleSubmit, resultText } = useConvertPdf("/api/extract-text");
  return (
    <div>
      <h1>PDF to DOCX Converter</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} required />
        <button type="submit">Convert</button>
      </form>
      <div>
        <p
          style={{ width: "500px", height: "500px", border: "1px solid #444" }}
        >
          {resultText}
        </p>
      </div>
    </div>
  );
};

export default Homepage;
