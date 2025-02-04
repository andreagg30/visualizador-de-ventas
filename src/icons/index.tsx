import { cn } from '@/utils/helpers';

interface Props {
  className?: string;
}

export const CloseIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="mdi-window-close"
      className={className}
      viewBox="0 0 24 24"
    >
      <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
    </svg>
  );
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

export const BackIcon = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    viewBox="0 0 16 17"
    fill="currentColor"
    className={cn('text-black', className)}
  >
    <path d="m3.825 9.5 5.6 5.6L8 16.5l-8-8 8-8 1.425 1.4-5.6 5.6H16v2H3.825Z" />
  </svg>
);

export const NextIcon = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    viewBox="0 0 16 17"
    fill="currentColor"
    className={cn('text-black', className)}
  >
    <path d="m12.175 7.5-5.6-5.6L8 .5l8 8-8 8-1.425-1.4 5.6-5.6H0v-2h12.175Z" />
  </svg>
);

export const CalendarIcon = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="currentColor"
    className={cn('text-black', className)}
  >
    <path d="M5 22.864c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 20.864v-14c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 5 4.864h1v-2h2v2h8v-2h2v2h1c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v14c0 .55-.196 1.021-.587 1.413a1.926 1.926 0 0 1-1.413.587H5Zm0-2h14v-10H5v10Zm0-12h14v-2H5v2Zm7 6a.968.968 0 0 1-.713-.287.968.968 0 0 1-.287-.713c0-.283.096-.52.287-.712a.968.968 0 0 1 .713-.288c.283 0 .52.096.713.288.191.191.287.429.287.712 0 .284-.096.521-.287.713a.968.968 0 0 1-.713.287Zm-4 0a.968.968 0 0 1-.713-.287.968.968 0 0 1-.287-.713c0-.283.096-.52.287-.712A.967.967 0 0 1 8 12.864c.283 0 .52.096.713.288.191.191.287.429.287.712 0 .284-.096.521-.287.713a.968.968 0 0 1-.713.287Zm8 0a.968.968 0 0 1-.713-.287.968.968 0 0 1-.287-.713c0-.283.096-.52.287-.712a.968.968 0 0 1 .713-.288c.283 0 .52.096.712.288.192.191.288.429.288.712 0 .284-.096.521-.288.713a.968.968 0 0 1-.712.287Zm-4 4a.968.968 0 0 1-.713-.287.968.968 0 0 1-.287-.713c0-.283.096-.52.287-.712a.968.968 0 0 1 .713-.288c.283 0 .52.096.713.288.191.191.287.429.287.712 0 .284-.096.521-.287.713a.968.968 0 0 1-.713.287Zm-4 0a.968.968 0 0 1-.713-.287.968.968 0 0 1-.287-.713c0-.283.096-.52.287-.712A.967.967 0 0 1 8 16.864c.283 0 .52.096.713.288.191.191.287.429.287.712 0 .284-.096.521-.287.713a.968.968 0 0 1-.713.287Zm8 0a.968.968 0 0 1-.713-.287.968.968 0 0 1-.287-.713c0-.283.096-.52.287-.712a.968.968 0 0 1 .713-.288c.283 0 .52.096.712.288.192.191.288.429.288.712 0 .284-.096.521-.288.713a.968.968 0 0 1-.712.287Z" />
  </svg>
);

export const ChevronLeft = ({ className }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="m12.9 17.7-4.6-4.6q-.225-.225-.337-.513Q7.85 12.3 7.85 12t.113-.588q.112-.287.337-.512l4.6-4.6q.45-.45 1.1-.45.65 0 1.1.45.45.45.45 1.1 0 .65-.45 1.1L11.6 12l3.5 3.5q.45.45.45 1.1 0 .65-.45 1.1-.45.45-1.1.45-.65 0-1.1-.45Z" />
    </svg>
  );
};

export const ChevronRight = ({ className }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8.3 17.7q-.45-.45-.45-1.1 0-.65.45-1.1l3.5-3.5-3.5-3.5q-.45-.45-.45-1.1 0-.65.45-1.1.45-.45 1.1-.45.65 0 1.1.45l4.6 4.6q.225.225.338.512.112.288.112.588t-.112.587q-.113.288-.338.513l-4.6 4.6q-.45.45-1.1.45-.65 0-1.1-.45Z" />
    </svg>
  );
};

export const ExpandMoreIcon = ({ className }: Props) => {
  return (
    <svg
      id="chevron_abajo_24px"
      className={className}
      data-name="chevron abajo 24px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <rect id="Rectángulo_526" data-name="Rectángulo 526" fill="none" />
      <path
        id="CREVRON_HACIA_ABAJO"
        data-name="CREVRON HACIA ABAJO"
        d="M12,15.65a1.7,1.7,0,0,1-.637-.125,1.426,1.426,0,0,1-.538-.375l-4.65-4.625a1.619,1.619,0,0,1-.462-1.188A1.711,1.711,0,0,1,6.2,8.15a1.681,1.681,0,0,1,1.2-.475,1.6,1.6,0,0,1,1.175.475L12,11.575,15.45,8.15a1.517,1.517,0,0,1,1.175-.488A1.687,1.687,0,0,1,18.3,9.35a1.556,1.556,0,0,1-.5,1.175L13.175,15.15a1.427,1.427,0,0,1-.537.375A1.706,1.706,0,0,1,12,15.65Z"
        transform="translate(0.287 0.338)"
      />
    </svg>
  );
};

export const CheckIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 96 960 960"
      className={cn('h-6 w-6', className)}
    >
      <path d="M382 829q-13 0-25.5-5T335 809L160 635q-19-20-18.5-48.5T161 539q20-20 49-20t48 20l124 124 320-321q20-19 48.5-19.5T799 342q20 20 20 49t-20 48L429 809q-9 10-21.5 15t-25.5 5Z" />
    </svg>
  );
};

export const PriorityHighIcon = ({ className }: Props) => {
  return (
    <svg
      className={cn('h-6 w-6', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 96 960 960"
    >
      <path d="M479.655 1008q-50.055 0-85.355-35.562-35.3-35.562-35.3-85.5t35.645-85.438q35.645-35.5 85.7-35.5t85.355 35.77q35.3 35.77 35.3 86T565.355 973q-35.645 35-85.7 35Zm.478-324Q436 684 404.5 652.594 373 621.188 373 577V260q0-45.35 31.367-76.675Q435.735 152 479.867 152 524 152 555.5 183.325 587 214.65 587 260v317q0 44.188-31.367 75.594Q524.266 684 480.133 684Z" />
    </svg>
  );
};

export const EyeIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-6 w-6', className)}
      viewBox="0 0 24 24"
    >
      <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
    </svg>
  );
};

export const EyeOffIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-6 w-6', className)}
      viewBox="0 0 24 24"
    >
      <path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z" />
    </svg>
  );
};

export const CircleUpIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 -960 960 960"
      className={cn('fill-black', className)}
    >
      <path d="m357-384 123-123 123 123 57-56-180-180-180 180 57 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
    </svg>
  );
};

export const CircleDownIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 -960 960 960"
      className={cn('fill-black', className)}
    >
      <path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
    </svg>
  );
};
