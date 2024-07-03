import { useState } from "react";

export default function useConvertPdf(url) {
  const [file, setFile] = useState(null);
  const [resultText, setResultText] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pdfFile", file);

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const data = await response.text();

    setResultText(data.trim());
  };

  return { file, resultText, handleSubmit, handleFileChange };
}
