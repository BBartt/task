export interface ProjectData {
  id: string;
  project: {
    id: string;
    name: string;
    width: number;
    height: number;
    items: Item[];
  };
}

interface Item {
  id: string;
  type: string;
  color: string;
  rotation: number;
  x: number;
  y: number;
  width: number;
  height: number;
}
