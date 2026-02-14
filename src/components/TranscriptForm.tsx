import { useState } from "react";
import { generateGraph } from "../services/api";


interface Props {
  onData: (tasks: any[]) => void;
}

const TranscriptForm = ({ onData }: Props) => {
  const [transcript, setTranscript] = useState("");

  const handleSubmit = async () => {
    if (!transcript) return;
    const data = await generateGraph(transcript);
    onData(data.tasks);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <textarea
        rows={4}
        style={{ width: "100%", padding: "10px" }}
        placeholder="Paste meeting transcript..."
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
      />
      <button onClick={handleSubmit} style={{ marginTop: "10px" }}>
        Generate Graph
      </button>
    </div>
  );
};

export default TranscriptForm;
