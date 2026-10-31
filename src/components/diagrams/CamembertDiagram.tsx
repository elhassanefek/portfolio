import React from "react";
import { useTheme } from "styled-components";
import { Arrow, Box, DiagramFrame, Region } from "./primitives";

/** The three-phase pipeline: data, modeling, evaluation. */
export const CamembertDiagram: React.FC = () => {
  const theme = useTheme();
  const accent = theme.colors.project.camembert;

  return (
    <DiagramFrame
      name="camembert-feedback/pipeline.svg"
      title="CamemBERT feedback classifier: data, modeling and evaluation pipeline"
      description="Data is validated, de-duplicated into groups and split 70/15/15 by group; camembert-base feeds a multi-label motivation head and a 3-way opinion head, keeping the best checkpoint by validation Macro-F1; the threshold is picked on validation and the test set is evaluated once."
      viewBox="0 0 1000 620"
      minWidth={760}
      steps={[
        <>
          Data: load &amp; validate → group duplicates → stats → grouped stratified split 70/15/15
          (seed 42).
        </>,
        <>
          Modeling: tokenize (128 tokens) → <code>camembert-base</code> → motivation head (4
          sigmoids + BCE) and opinion head (3-way softmax + CE) → keep the best checkpoint by
          validation Macro-F1.
        </>,
        <>
          Evaluation: pick the threshold on validation → evaluate once on test → controlled
          comparisons → logged run.
        </>,
      ]}
    >
      {/* 1 · Data */}
      <Region x={20} y={20} w={960} h={150} label="1 · DATA" chip={accent} />
      <Box x={40} y={60} w={170} h={80} title="Load & validate" />
      <Box x={250} y={60} w={170} h={80} title="Group" lines={["duplicates"]} />
      <Box x={460} y={60} w={120} h={80} title="Stats" />
      <Box x={620} y={60} w={340} h={80} title="Grouped stratified split" lines={["70 / 15 / 15 · seed 42"]} />
      <Arrow points={[[210, 100], [250, 100]]} />
      <Arrow points={[[420, 100], [460, 100]]} />
      <Arrow points={[[580, 100], [620, 100]]} />

      {/* 2 · Modeling */}
      <Arrow points={[[790, 144], [790, 190], [115, 190], [115, 275]]} />
      <Region x={20} y={210} w={960} h={200} label="2 · MODELING" chip={accent} />
      <Box x={40} y={275} w={150} h={80} title="Tokenize" lines={["128 tokens"]} />
      <Box x={230} y={275} w={170} h={80} title="camembert-base" fill={accent} />
      <Box x={440} y={245} w={230} h={60} title="Motivation head" lines={["4 sigmoids + BCE"]} />
      <Box x={440} y={330} w={230} h={60} title="Opinion head" lines={["3-way softmax + CE"]} />
      <Box x={710} y={275} w={250} h={80} title="Best checkpoint" lines={["by validation Macro-F1"]} />
      <Arrow points={[[190, 315], [230, 315]]} />
      <Arrow points={[[400, 300], [420, 300], [420, 275], [440, 275]]} />
      <Arrow points={[[400, 330], [420, 330], [420, 360], [440, 360]]} />
      <Arrow points={[[670, 275], [690, 275], [690, 300], [710, 300]]} />
      <Arrow points={[[670, 360], [690, 360], [690, 330], [710, 330]]} />

      {/* 3 · Evaluation */}
      <Arrow points={[[835, 359], [835, 430], [135, 430], [135, 490]]} />
      <Region x={20} y={450} w={960} h={150} label="3 · EVALUATION" chip={accent} />
      <Box x={40} y={490} w={190} h={80} title="Pick threshold" lines={["on validation"]} />
      <Box x={270} y={490} w={180} h={80} title="Evaluate once" lines={["on test"]} />
      <Box x={490} y={490} w={220} h={80} title="Controlled" lines={["comparisons"]} />
      <Box x={750} y={490} w={210} h={80} title="Logged run" lines={["config · history · metrics", "predictions · environment"]} />
      <Arrow points={[[230, 530], [270, 530]]} />
      <Arrow points={[[450, 530], [490, 530]]} />
      <Arrow points={[[710, 530], [750, 530]]} />
    </DiagramFrame>
  );
};

export default CamembertDiagram;
