/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface CustomBarLabelProps {
  x?: any;
  y?: any;
  value?: any;
  bgColor?: string;
  top?: boolean;
  color?: string;
}

const CustomBarLabel: React.FC<CustomBarLabelProps> = ({
  x = 0,
  y = 0,
  value,
  bgColor = 'rgba(18, 35, 158, 0.5)',
  color = '#FFFFFF',
}) => {
  if (!value) return null; // Evita etiquetas vacías

  const textWidth = value.toString().length * 8; // Ancho estimado del texto
  const padding = 8; // Espaciado interno
  const rectWidth = textWidth + padding * 2; // Ancho del rectángulo
  const rectHeight = 20; // Alto del rectángulo

  return (
    <g
      transform={
        top
          ? `translate(${x- 8},${y - 20})`
          : `translate(${x - rectWidth / 2},${y - 25})`
      }
    >
      <rect
        width={rectWidth}
        height={rectHeight}
        fill={bgColor}
        rx={4} // Bordes redondeados
      />
      <text
        x={rectWidth / 2} // Centra el texto dentro del rectángulo
        y={rectHeight / 2}
        dy=".35em"
        textAnchor="middle"
        fill={color}
        fontSize={12}
      >
        {value}
      </text>
    </g>
  );
};

export default CustomBarLabel;
