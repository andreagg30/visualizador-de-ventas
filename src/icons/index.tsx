import { cn } from "@/utils/helpers";

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

export const ChevronLeft = ({className}: Props) => {
	return<svg xmlns="http://www.w3.org/2000/svg" className={className}><path d="m12.9 17.7-4.6-4.6q-.225-.225-.337-.513Q7.85 12.3 7.85 12t.113-.588q.112-.287.337-.512l4.6-4.6q.45-.45 1.1-.45.65 0 1.1.45.45.45.45 1.1 0 .65-.45 1.1L11.6 12l3.5 3.5q.45.45.45 1.1 0 .65-.45 1.1-.45.45-1.1.45-.65 0-1.1-.45Z"/></svg>;
	
};

export const ChevronRight = ({className}: Props) => {
	return <svg xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.3 17.7q-.45-.45-.45-1.1 0-.65.45-1.1l3.5-3.5-3.5-3.5q-.45-.45-.45-1.1 0-.65.45-1.1.45-.45 1.1-.45.65 0 1.1.45l4.6 4.6q.225.225.338.512.112.288.112.588t-.112.587q-.113.288-.338.513l-4.6 4.6q-.45.45-1.1.45-.65 0-1.1-.45Z"/></svg>;

};

export const ExpandMoreIcon = ({className}: Props) => {
	return <svg id="chevron_abajo_24px" className={className} data-name="chevron abajo 24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<rect id="Rectángulo_526" data-name="Rectángulo 526" fill="none"/>
		<path id="CREVRON_HACIA_ABAJO" data-name="CREVRON HACIA ABAJO" d="M12,15.65a1.7,1.7,0,0,1-.637-.125,1.426,1.426,0,0,1-.538-.375l-4.65-4.625a1.619,1.619,0,0,1-.462-1.188A1.711,1.711,0,0,1,6.2,8.15a1.681,1.681,0,0,1,1.2-.475,1.6,1.6,0,0,1,1.175.475L12,11.575,15.45,8.15a1.517,1.517,0,0,1,1.175-.488A1.687,1.687,0,0,1,18.3,9.35a1.556,1.556,0,0,1-.5,1.175L13.175,15.15a1.427,1.427,0,0,1-.537.375A1.706,1.706,0,0,1,12,15.65Z" transform="translate(0.287 0.338)"/>
	</svg>;
};