import { isFunction, isString } from 'lodash';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TooltipItem {
  label: string;
  key: ((item?: any) => void) | string;
}
export interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  items: TooltipItem[];
}
export default function CustomTooltip({
  active,
  payload,
  items,
  ...props
}: CustomTooltipProps) {
  console.log(props, 'props');
  if (active && payload && payload.length) {
    return (
      <div className="flex p-1 flex-col rounded-sm border bg-white shadow-sm">
        <table className="w-full">
          {/* <thead>
    <tr className="bg-gray-100">
      <th className="p-2 text-left">Columna 1</th>
      <th className="p-2 text-left">Columna 2</th>
      <th className="p-2 text-left">Columna 3</th>
    </tr>
  </thead> */}
          <tbody>
            {items.map((item, i) => (
              <tr key={i} className="text-xs">
                <td className="p-0.5">
                  <div className="flex font-bold w-full justify-end">{item.label}</div>
                </td>
                <td className="p-0.5">
                  {isString(item.key)
                    ? payload?.[0]?.[item.key]
                    : isFunction(item.key)
                      ? item.key(payload?.[0])
                      : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
}
