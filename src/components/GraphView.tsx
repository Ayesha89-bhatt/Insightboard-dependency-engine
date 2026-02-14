import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";
import { useEffect, useState } from "react";

interface Task {
  id: string;
  description: string;
  dependencies: string[];
  status?: string;
}

interface Props {
  tasks: Task[];
}

const GraphView = ({ tasks }: Props) => {
  const [completed, setCompleted] = useState<string[]>([]);
  const [nodes, setNodes] = useState<any[]>([]);
  const [edges, setEdges] = useState<any[]>([]);

  useEffect(() => {
    if (!tasks) return;

    const isReady = (task: Task) =>
      task.dependencies.every((dep) => completed.includes(dep));

    const newNodes = tasks.map((task, index) => ({
      id: task.id,
      position: { x: 200 * index, y: 100 },
      data: {
        label: (
          <div>
            <div>{task.description}</div>
            <button
              onClick={() => setCompleted([...completed, task.id])}
              style={{ marginTop: "5px" }}
            >
              Complete
            </button>
          </div>
        ),
      },
      style: {
        padding: 10,
        borderRadius: 6,
        background:
          task.status === "Blocked/Error"
            ? "#f87171" // red
            : isReady(task)
            ? "#4ade80" // green
            : "#facc15", // yellow
      },
    }));

    const newEdges = tasks.flatMap((task) =>
      task.dependencies.map((dep) => ({
        id: `${dep}-${task.id}`,
        source: dep,
        target: task.id,
      }))
    );

    setNodes(newNodes);
    setEdges(newEdges);
  }, [tasks, completed]);

  return (
    <div style={{ height: "500px" }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default GraphView;
