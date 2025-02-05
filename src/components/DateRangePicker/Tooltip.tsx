/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SliderProps } from 'rc-slider';
import Slider from 'rc-slider';
import type { TooltipRef } from 'rc-tooltip';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import raf from 'rc-util/lib/raf';
import * as React from 'react';

interface HandleTooltipProps {
  value: number;
  children: React.ReactElement;
  visible?: boolean;
  tipFormatter?: (value: number) => React.ReactNode;
}

const HandleTooltip: React.FC<HandleTooltipProps> = (props) => {
  const {
    value,
    children,
    visible,
    tipFormatter = (val) => `${val} %`,
    ...restProps
  } = props;

  const tooltipRef = React.useRef<TooltipRef>();
  const rafRef = React.useRef<number | null>(null);

  function cancelKeepAlign() {
    raf.cancel(rafRef.current!);
  }

  function keepAlign() {
    rafRef.current = raf(() => {
      tooltipRef.current?.forceAlign();
    });
  }

  React.useEffect(() => {
    if (visible) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }

    return cancelKeepAlign;
  }, [value, visible]);

  return (
    <Tooltip
      placement="top"
      showArrow={false}
      styles={{
        body: {
          backgroundColor: '#FFFFFF',
          borderWidth: '1px',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          borderRadius: '2px',
          color: 'black',
          fontSize: '12px',
          fontFamily: '"Poppins", sans-serif',
        },
      }}
      overlay={tipFormatter(value)}
      {...restProps}
    >
      {children}
    </Tooltip>
  );
};

export const handleRender: SliderProps['handleRender'] = (node, props) => (
  <HandleTooltip value={props.value}>{node}</HandleTooltip>
);

interface TooltipSliderProps extends SliderProps {
  tipFormatter?: (value: number) => React.ReactNode;
  tipProps?: any;
}

const TooltipSlider: React.FC<TooltipSliderProps> = ({
  tipFormatter,
  tipProps,
  ...props
}) => {
  const tipHandleRender: SliderProps['handleRender'] = (node, handleProps) => (
    <HandleTooltip
      value={handleProps.value}
      visible={handleProps.dragging}
      tipFormatter={tipFormatter}
      {...tipProps}
    >
      {node}
    </HandleTooltip>
  );

  return <Slider {...props} handleRender={tipHandleRender} />;
};

export default TooltipSlider;
