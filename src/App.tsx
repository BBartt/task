import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "./components/Button";
import Input from "./components/Input";
// import { RootState, useAppDispatch, useAppSelector } from "./redux/store";
import { RootState, useAppSelector } from "./redux/store";
import { fetchProjectRequest } from "./redux/actions";
import { instance } from "./axiosConfig";

import { noOp } from "./utils";
import { Item } from "./interfaces";

interface IInit {
  id: string;
  modified: number;
  name: string;
}

function App() {
  const dispatch = useDispatch();
  const state = useAppSelector((state: RootState) => state.app);

  const { error, loading, projectData } = state;

  const [id, setId] = useState<string>("");

  const handleFetch = async () => {
    if (id === "") {
      const data: { data: IInit } = await instance.get("init");

      dispatch(fetchProjectRequest(data.data.id));
      return;
    }

    dispatch(fetchProjectRequest(id));
  };

  return (
    <div className="App">
      <span>
        <span>Project ID: </span>
        <Input value={id} onChange={(e) => setId(e.target.value)} />
      </span>

      <Button onClick={handleFetch}>Fetch</Button>

      {loading && <div>Loading...</div>}

      {error && <div className="error-msg">{error.response.data.message}</div>}

      {!!projectData && Object.keys(projectData)?.length > 0 && (
        <div>
          <hr />
          <div>
            Name: <b>{projectData.project.name}</b>
          </div>
          <div>
            ID: <Input value={projectData.id} readOnly onChange={noOp} />
          </div>
        </div>
      )}

      <div className="content">
        {!!projectData && Object.keys(projectData)?.length > 0 ? (
          <svg width="100%" height="100%">
            <svg width="100%" height="100%" viewBox="0 0 902 977">
              {projectData?.project.items.map((element) => {
                return <>{renderSvgContent(element)}</>;
              })}
            </svg>
          </svg>
        ) : (
          <div>Empty</div>
        )}
      </div>
    </div>
  );
}

export default App;

const renderSvgContent = (element: Item) => {
  const centerX = element.x;
  const centerY = element.y;

  let shape;

  switch (element.type) {
    case "rectangle":
      shape = (
        <rect
          x={centerX - element.width / 2}
          y={centerY - element.height / 2}
          width={element.width}
          height={element.height}
          transform={`rotate(${element.rotation} ${centerX} ${centerY})`}
          fill={element.color}
        />
      );
      break;
    case "ellipse":
      shape = (
        <ellipse
          cx={centerX}
          cy={centerY}
          rx={element.width / 2}
          ry={element.height / 2}
          transform={`rotate(${element.rotation} ${centerX} ${centerY})`}
          fill={element.color}
        />
      );
      break;
    default:
      shape = null;
  }

  return (
    <g key={element.id} style={{ border: "1px solid red" }}>
      <rect
        x={centerX - element.width / 2}
        y={centerY - element.height / 2}
        width={element.width}
        height={element.height}
        transform={`rotate(${element.rotation} ${centerX} ${centerY})`}
        fill="none"
      />

      {shape}

      <circle
        data-mono="0.4306666666666667"
        fill="#FFFFFF"
        cx={centerX}
        cy={centerY}
        r="4"
      />

      <text
        x={centerX + 20}
        y={centerY}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#fff"
      >
        {element.rotation}°
      </text>
    </g>
  );
};

{
  /* <rect
fill="none"
stroke-width="2"
stroke-opacity="0.4"
stroke="#FF0000"
width="228.09752768574646"
height="333.6667698812196"
transform="translate(55.95123615712677, 55.16661505939021)"
/> */
}
