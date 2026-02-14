import { useState } from "react";
import TranscriptForm from "./components/TranscriptForm";
import GraphView from "./components/GraphView";


function App() {
  const [tasks, setTasks] = useState<any[]>([]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>InsightBoard Dependency Engine</h2>
      <TranscriptForm onData={setTasks} />
      {tasks.length > 0 && <GraphView tasks={tasks} />}
    </div>
  );
}

export default App;
