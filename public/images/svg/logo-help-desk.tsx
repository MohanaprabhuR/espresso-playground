import { Icon } from "@/components/BaseComponents/Icon/page";
import { JSX, SVGProps } from "react";

export const LogoHelpDesk = (
  props: JSX.IntrinsicAttributes &
    SVGProps<SVGSVGElement> & { ariaLabel?: string | false }
) => (
  <Icon fill="none" viewBox="0 0 18 15" {...props}>
    <path
      d="M17.46 5.51458V0H0V2.51234H14.9602V4.89906C13.9553 5.18798 13.2267 6.11754 13.2267 7.21041C13.2267 8.30328 13.9553 9.22028 14.9602 9.5092V11.8959H2.51234V5.33872H0V14.4083H17.4725V8.89367L15.9777 7.82593V6.59489L17.4725 5.52714L17.46 5.51458Z"
      fill="#EDF7FF"
    />
  </Icon>
);
