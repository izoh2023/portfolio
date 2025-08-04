export const DebugOverlay: React.FC<{ position: number[]; target: number[] }> = ({ position, target }) => (
  <div
    style={{
      position: "absolute",
      top: 10,
      left: 10,
      background: "rgba(0,0,0,0.7)",
      color: "#fff",
      padding: "10px",
      fontSize: "12px",
      fontFamily: "monospace",
      borderRadius: "6px",
      zIndex: 1000,
    }}
  >
    <div><strong>Camera Position:</strong></div>
    <div>x: {position[0]}</div>
    <div>y: {position[1]}</div>
    <div>z: {position[2]}</div>
    <br />
    <div><strong>Target:</strong></div>
    <div>x: {target[0]}</div>
    <div>y: {target[1]}</div>
    <div>z: {target[2]}</div>
  </div>
);