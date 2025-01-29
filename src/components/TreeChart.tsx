/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ResponsiveContainer, Treemap } from 'recharts';

interface Props {
  data?: unknown[];
}

const dataDef = [
  { name: 'Axis', size: 24593 },
  { name: 'Axes', size: 1302 },
  { name: 'AxisGridLine', size: 652 },
  { name: 'AxisLabel', size: 636 },
  { name: 'CartesianAxes', size: 6703 },
];

interface CustomizedContentProps {
  root: { children: any[] };
  depth: number;
  x: number;
  y: number;
  width: number;
  height: number;
  index: number;
  colors: string[];
  rank: number;
  name: string;
  size: number | string;
}

// ✅ Función corregida con el tipo `JSX.Element`
const CustomizedContent = ({
  root,
  depth,
  x,
  y,
  width,
  height,
  index,
  colors,
  name,
  size,
}: CustomizedContentProps): JSX.Element => {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill:
            depth < 2
              ? colors[Math.floor((index / root.children.length) * 6)]
              : '#ffffff00',
          stroke: '#fff',
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {depth === 1 && height > 40 ? (
        <>
          {width > size.toString().length * 9 && ( // Aproximadamente 8px por caracter
            <text x={x + 4} y={y + height - 10} fill="#fff" fontSize={14}>
              {size}
            </text>
          )}
        </>
      ) : null}
      {depth === 1 && height > 40 ? (
        <text
          ref={(el) => {
            if (el) {
              const maxWidth = width - 10; // Ajusta el padding
              let truncatedText = name;
              while (
                el.getComputedTextLength() > maxWidth &&
                truncatedText.length > 0
              ) {
                truncatedText = truncatedText.slice(0, -1);
                el.textContent = truncatedText ? truncatedText + '...' : '';
              }
            }
          }}
          x={x + 4}
          y={y + 18}
          fill="#fff"
          fontSize={16}
          fillOpacity={0.9}
        >
          {name}
        </text>
      ) : null}
    </g>
  );
};

const renderCustomizedContent: any = (props: any) => {
  return (
    <CustomizedContent {...props} colors={['#9690fd', '#82ca9d', '#ffc658']} />
  );
};

export default function TreeChart({ data = dataDef }: Props): JSX.Element {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <Treemap
        width={400}
        height={200}
        data={data}
        dataKey="size"
        stroke="#fff"
        fill="#8884d8"
        content={renderCustomizedContent}
      />
    </ResponsiveContainer>
  );
}
