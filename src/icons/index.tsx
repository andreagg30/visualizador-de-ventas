interface Props {
  className?: string;
}

export function PhoneIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={256}
      height={256}
      viewBox="0 0 256 256"
      className={className}
    >
      <path
        d="m38.789 51.211 10.876 10.876a3.122 3.122 0 0 0 3.684.543l13.034-6.997a3.12 3.12 0 0 1 3.07.066L88.47 66.984a3.113 3.113 0 0 1 1.268 3.933c-1.625 3.698-4.583 10.476-5.758 13.473-.247.631-.615 1.209-1.127 1.652-12.674 10.986-37.89-2.4-57.191-21.701C6.358 45.039-7.028 19.823 3.958 7.149c.444-.512 1.022-.88 1.652-1.127C8.606 4.847 15.385 1.889 19.083.264a3.113 3.113 0 0 1 3.933 1.268l11.285 19.017c.558.941.583 2.106.066 3.07L27.37 36.651a3.122 3.122 0 0 0 .543 3.684l10.876 10.876z"
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
}

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

export function CodeIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      className={className}
      viewBox="0 -960 960 960"
    >
      <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
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

export function LinkedinIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={90}
      height={80}
      viewBox="0 0 90 80"
      className={className}
    >
      <path d="M1.48 29.91h18.657v60.01H1.48V29.91zM10.809.08c5.963 0 10.809 4.846 10.809 10.819 0 5.967-4.846 10.813-10.809 10.813C4.832 21.712 0 16.866 0 10.899 0 4.926 4.832.08 10.809.08M31.835 29.91h17.89v8.206h.255c2.49-4.72 8.576-9.692 17.647-9.692C86.514 28.424 90 40.849 90 57.007V89.92H71.357V60.737c0-6.961-.121-15.912-9.692-15.912-9.706 0-11.187 7.587-11.187 15.412V89.92H31.835V29.91z" />
    </svg>
  );
}

export function GitHubIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={90}
      height={80}
      viewBox="0 0 90 80"
      className={className}
    >
      <path d="M5.46 63.31s3.998 1.875 6.773 8.925c0 0 3.581 10.887 20.55 7.197.017 3.237.046 6.354.064 8.571A2.015 2.015 0 0 0 34.867 90h26.238c1.11 0 2.012-.89 2.019-2 .02-3.124.056-8.131.056-13.951 0-5.691-1.949-9.403-4.137-11.296 13.583-1.51 27.853-6.668 27.853-30.097 0-6.659-2.366-12.101-6.278-16.373.633-1.537 2.722-7.741-.599-16.143 0 0-5.115-1.638-16.757 6.253-4.875-1.352-10.097-2.029-15.281-2.053-5.183.025-10.401.703-15.267 2.054C21.058-1.497 15.936.141 15.936.141c-3.312 8.402-1.224 14.606-.591 16.143-3.902 4.272-6.286 9.713-6.286 16.373 0 23.372 14.243 28.603 27.792 30.145-1.745 1.523-3.325 4.215-3.873 8.157-3.481 1.559-12.311 4.254-17.751-5.07 0 0-3.226-5.856-9.35-6.287 0 0-5.952-.078-.417 3.708z" />
    </svg>
  );
}

export function PeopleIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      className={className}
      viewBox="0 -960 960 960"
    >
      <path d="M360-80v-529q-91-24-145.5-100.5T160-880h80q0 83 53.5 141.5T430-680h100q30 0 56 11t47 32l181 181-56 56-158-158v478h-80v-240h-80v240h-80Zm120-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z" />
    </svg>
  );
}

export const IPhoneIcon = ({ className }: Props): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={256}
    height={256}
    viewBox="0 0 256 256"
    className={className}
  >
    <path
      d="M64.533 0H25.467a6.952 6.952 0 0 0-6.944 6.944v76.112A6.952 6.952 0 0 0 25.467 90h39.065a6.952 6.952 0 0 0 6.944-6.944V6.944A6.95 6.95 0 0 0 64.533 0zm-24.94 7.097h10.814a1.957 1.957 0 1 1 0 3.913H39.593a1.957 1.957 0 1 1 0-3.913zM45 83.684a3.424 3.424 0 1 1 0-6.848 3.424 3.424 0 0 1 0 6.848zM67.564 70.52H22.436V18.017h45.128V70.52z"
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

export const BrushIcon = ({ className }: Props): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={256}
    height={256}
    viewBox="0 0 256 256"
    className={className}
  >
    <path
      d="M0 78.514c12.106 6.914 20.778 8.441 29.153.069 3.396-3.396 3.396-8.922 0-12.318-3.396-3.395-8.922-3.394-12.318 0C10.045 73.054 5.72 76.869 0 78.514zM27.65 59.958a13.294 13.294 0 0 1 7.97 8.235L89.377 9.664a2.358 2.358 0 0 0-.07-3.267 2.358 2.358 0 0 0-3.268-.069L27.65 59.958z"
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

export const CartIcon = ({ className }: Props): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={100}
    height={100}
    className={className}
    viewBox="0 0 100 100"
  >
    <path
      d="M73.713 65.44H27.689c-3.566 0-6.377-2.578-6.686-6.13-.21-2.426.807-4.605 2.592-5.939L16.381 21.07a3 3 0 0 1 2.927-3.654H87a3 3 0 0 1 2.832 3.988l-7.798 22.344a9.153 9.153 0 0 1-7.063 5.999l-47.389 8.281-.032.005c-.228.04-.623.126-.568.759.056.648.48.648.708.648h46.024a3 3 0 1 1-.001 6zm-50.66-42.024 6.301 28.211 44.583-7.79a3.153 3.153 0 0 0 2.432-2.065l6.406-18.356H23.053z"
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
    <circle
      cx={28.25}
      cy={75.8}
      r={6.5}
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
    <circle
      cx={68.29}
      cy={75.8}
      r={6.5}
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
    <path
      d="M19.306 23.417a3.001 3.001 0 0 1-2.925-2.347l-1.375-6.155a5.356 5.356 0 0 0-5.258-4.212H3a3 3 0 1 1 0-6h6.749c5.372 0 9.942 3.662 11.113 8.904l1.375 6.155a3 3 0 0 1-2.931 3.655z"
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

export const EmailIcon = ({ className }: Props): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={256}
    height={256}
    viewBox="0 0 256 256"
    className={className}
  >
    <path
      d="m45 51.815 45-33.87v-1.967a3.676 3.676 0 0 0-3.676-3.676H3.676A3.676 3.676 0 0 0 0 15.978v1.967l45 33.87z"
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
    <path
      d="M47.405 60.019a3.994 3.994 0 0 1-4.81 0L0 27.958v46.064a3.676 3.676 0 0 0 3.676 3.676h82.648A3.676 3.676 0 0 0 90 74.022V27.958L47.405 60.019z"
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

export const LogoIcon = ({ className }: Props): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Logo"
    viewBox="0 0 390.21 278.03"
    className={className}
  >
    <path d="M258.99 203.47h-16.37l-.13.25-.12.25-5.18 10.36a19.609 19.609 0 0 1-8.73 8.73 19.495 19.495 0 0 1-22.53-3.65l-3.13-3.14v-11.73l19.1-9.74v-13.56c0-9.43-7.68-17.11-17.12-17.11h-19.35c-9.44 0-17.12 7.68-17.12 17.11v13.56l19.1 9.74v11.73l-3.13 3.14c-5.95 5.95-15 7.41-22.53 3.65a19.609 19.609 0 0 1-8.73-8.73l-5.18-10.36-.12-.25-.13-.25h-16.37l-.32.16.05.09.12.25 8.54 17.07c3.32 6.64 8.8 12.12 15.43 15.44a34.501 34.501 0 0 0 15.45 3.65c8.79 0 17.46-3.36 24.05-9.79.07-.06.15-.13.22-.2v-.53l.27.27.08-.07.07.07.27-.27v.53c.07.07.15.14.22.2a34.393 34.393 0 0 0 24.05 9.79c5.24 0 10.53-1.19 15.45-3.65 6.63-3.32 12.11-8.8 15.43-15.44l8.54-17.07.12-.25.05-.09-.32-.16Zm-63.68-11.95h-.01l-.39.01h-.01l-.36-.19-11.23-5.73v-4.37c0-1.16.95-2.11 2.12-2.11h19.35c1.17 0 2.12.95 2.12 2.11v4.37l-11.23 5.73-.36.18Z" />
    <path d="m195.03 229.88-.12.11-.02.02-.13.13v-.53l.27.27ZM46.34 197.53h-35.5L0 182.53h37.49l-.8 5.35 4.87 4.88 4.78 4.77zM66.7 217.9l-30.38 12.58a208.28 208.28 0 0 1-10.16-12.03l29.07-12.04 5.41 5.42 5.54 5.55.52.52ZM86.27 236.05l-20.96 20.97c-4.02-3.03-7.91-6.22-11.69-9.53l21.42-21.42c.62.61 1.25 1.2 1.88 1.78 3.05 2.82 6.16 5.55 9.35 8.2ZM80.54 33.37c-16.67 0-30.23 13.57-30.23 30.24 0 10.76 5.65 20.23 14.15 25.58l9.95-11.64c-5.35-2.36-9.1-7.72-9.1-13.94 0-8.4 6.83-15.24 15.23-15.24 5.37 0 10.1 2.8 12.81 7.01l9.95-11.64c-5.53-6.35-13.68-10.37-22.76-10.37Z" />
    <path d="m369.1 58.2-1.23-8.74C364.31 24.24 344.2 4.13 318.97.57c-20.03-2.82-39.91 5.01-52.59 20.58-11.73-9.81-26.65-15.31-42.11-15.31h-58.33c-15.46 0-30.38 5.5-42.11 15.31C111.15 5.58 91.27-2.25 71.24.57 46.01 4.13 25.9 24.24 22.34 49.46l-1.23 8.74c-2.17 15.31 2.04 31.09 11.53 43.31l14.23 18.31-8.66 57.94-.72 4.77-.8 5.35 4.87 4.88 4.78 4.77 2.87 2.86 6.02 6.02 5.41 5.42 5.54 5.55.52.52 3.77 3.75c1.5 1.5 3.03 2.99 4.57 4.42.62.61 1.25 1.2 1.88 1.78 3.05 2.82 6.16 5.55 9.35 8.2a228.65 228.65 0 0 0 45.69 29.48l.69.35c16.52 8.07 34.15 12.15 52.42 12.15h20.07c18.27 0 35.9-4.08 52.42-12.15l.69-.35a228.65 228.65 0 0 0 45.69-29.48c3.19-2.65 6.3-5.38 9.35-8.2.63-.58 1.26-1.17 1.88-1.78 1.54-1.43 3.07-2.92 4.57-4.42l3.77-3.75.52-.52 5.54-5.55 5.41-5.42 6.02-6.02 2.87-2.86 4.78-4.77 4.87-4.88-.8-5.35-.72-4.77-8.66-57.94 14.23-18.31c9.49-12.22 13.7-28 11.53-43.31Zm-23.37 34.11-18.17 23.39 10.01 66.93-28.44 28.41a214.23 214.23 0 0 1-57.47 41.03l-.69.32c-14.44 7.06-29.86 10.64-45.83 10.64h-20.07c-15.97 0-31.39-3.58-45.83-10.64l-.69-.32a214.23 214.23 0 0 1-57.47-41.03l-28.44-28.41 10.01-66.93-18.17-23.39c-7.01-9.04-10.12-20.71-8.52-32.03l1.23-8.72c2.63-18.65 17.5-33.52 36.15-36.15 15.56-2.2 30.99 4.34 40.26 17.04l8.67 11.87 6.18-6.83a50.6 50.6 0 0 1 37.49-16.65h58.33a50.6 50.6 0 0 1 37.49 16.65l6.18 6.83 8.67-11.87c9.27-12.7 24.7-19.24 40.26-17.04 18.65 2.63 33.52 17.5 36.15 36.15l1.23 8.72c1.6 11.32-1.51 22.99-8.52 32.03Z" />
    <path d="M195.45 229.61v.53l-.13-.13-.02-.02-.12-.11.27-.27ZM320.32 137.74 284.31 90.1c-5.8-7.66-14.99-12.24-24.61-12.24H130.51c-9.62 0-18.81 4.58-24.61 12.24l-36.01 47.64c-10.38 13.73-9.03 33.26 3.14 45.44l18.39 18.38c2.23 2.24 5.21 3.47 8.37 3.47s6.14-1.23 8.37-3.47l37.18-37.18a19.78 19.78 0 0 1 14.08-5.83h71.37c5.32 0 10.32 2.07 14.08 5.83l37.18 37.18c2.23 2.24 5.21 3.47 8.37 3.47s6.14-1.23 8.37-3.47l18.39-18.38c12.17-12.18 13.52-31.71 3.14-45.44Zm-170.18 7.05c-.39.49-.83.95-1.3 1.39-.3-.24-.59-.48-.9-.71-6.86-5.35-15.53-8.29-24.51-8.29H96.84v-10.21l-.01-1.32c-.01-3.71 2.85-6.79 6.64-7.46.5-.08 1.01-.13 1.53-.13h25.37c4.88 0 9.55 1.79 13 4.99l5.47 5.08c2.69 2.49 4.03 5.76 4.03 9.02 0 2.69-.91 5.39-2.73 7.64Zm143.24-17.82v10.21h-26.6c-8.98 0-17.65 2.94-24.51 8.29-.31.23-.6.47-.9.71-.47-.44-.91-.9-1.3-1.39-1.82-2.25-2.73-4.95-2.73-7.64 0-3.26 1.34-6.53 4.03-9.02l5.47-5.08c3.45-3.2 8.12-4.99 13-4.99h25.37c.52 0 1.03.05 1.53.13 3.79.67 6.65 3.75 6.64 7.46v1.32ZM390.21 182.53l-10.84 15h-35.5l4.78-4.77 4.87-4.88-.8-5.35h37.49zM364.05 218.45a208.28 208.28 0 0 1-10.16 12.03l-30.38-12.58.52-.52 5.54-5.55 5.41-5.42 29.07 12.04ZM336.59 247.49c-3.78 3.31-7.67 6.5-11.69 9.53l-20.96-20.97c3.19-2.65 6.3-5.38 9.35-8.2.63-.58 1.26-1.17 1.88-1.78l21.42 21.42ZM286.91 43.74l9.95 11.64c2.71-4.21 7.44-7.01 12.81-7.01 8.4 0 15.23 6.84 15.23 15.24 0 6.22-3.75 11.58-9.1 13.94l9.95 11.64c8.5-5.35 14.15-14.82 14.15-25.58 0-16.67-13.56-30.24-30.23-30.24-9.08 0-17.23 4.02-22.76 10.37Z" />
  </svg>
);
