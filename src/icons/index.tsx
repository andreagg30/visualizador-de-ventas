interface Props {
  className?: string;
}

export const CloseIcon = ({className}: Props) => {
	return<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="mdi-window-close" className={className} viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>;
};


export function MenuIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={90}
      height={90}
      className={className}
      viewBox="0 0 90 90"
    >
      <rect
        width={90}
        height={8}
        y={13.64}
        rx={0}
        ry={0}
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fillRule: 'nonzero',
          opacity: 1,
        }}
      />
      <rect
        width={90}
        height={8}
        y={41}
        rx={0}
        ry={0}
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fillRule: 'nonzero',
          opacity: 1,
        }}
      />
      <rect
        width={90}
        height={8}
        y={68.36}
        rx={0}
        ry={0}
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fillRule: 'nonzero',
          opacity: 1,
        }}
      />
    </svg>
  );
}

export function DoneAllIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      className={className}
      viewBox="0 -960 960 960"
    >
      <path d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z" />
    </svg>
  );
}

export function CopyIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      className={className}
      viewBox="0 -960 960 960"
    >
      <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
    </svg>
  );
}

export function ArrowOutwardIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      className={className}
      viewBox="0 -960 960 960"
    >
      <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
    </svg>
  );
}


export const TopIcon = ({ className }: Props): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={256}
    height={256}
    viewBox="0 0 256 256"
    className={className}
  >
    <path
      d="m89.028 68.045-4.264 3.93a3.015 3.015 0 0 1-4.261-.174l-34.473-37.4a1.4 1.4 0 0 0-2.06 0l-34.473 37.4a3.016 3.016 0 0 1-4.261.174l-4.263-3.93a3.016 3.016 0 0 1-.174-4.261l42.04-45.609a2.94 2.94 0 0 1 4.323 0l42.04 45.609a3.015 3.015 0 0 1-.174 4.261z"
      style={{
        stroke: 'none',
        strokeWidth: 1,
        strokeDasharray: 'none',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeMiterlimit: 10,
        fillRule: 'nonzero',
        opacity: 1,
      }}
      transform="matrix(2.81 0 0 2.81 1.407 1.407)"
    />
  </svg>
);
