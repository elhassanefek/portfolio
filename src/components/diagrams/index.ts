// Maps a project's `architecture` key to its diagram component.

import type React from "react";
import type { DiagramKey } from "../../data/projects";
import { CamembertDiagram } from "./CamembertDiagram";
import { NounouDZDiagram } from "./NounouDZDiagram";
import { TransactaDiagram } from "./TransactaDiagram";

export const diagrams: Record<DiagramKey, React.FC> = {
  transacta: TransactaDiagram,
  nounoudz: NounouDZDiagram,
  camembert: CamembertDiagram,
};
