import { Icon } from "@/components/BaseComponents/Icon/page";
import { JSX, SVGProps } from "react";

export const LogoIcon = (
  props: JSX.IntrinsicAttributes &
    SVGProps<SVGSVGElement> & { ariaLabel?: string | false }
) => (
  <Icon fill="none" viewBox="0 0 20 17" {...props}>
    <path
      d="M19.0076 1.06236C18.3329 0.387618 17.4141 0 16.4522 0H0V2.87124H17.1844V12.0305H13.3226L12.4612 13.1359L10.4083 15.7488V17.6294H12.576L14.7151 14.9018H16.4522C17.4141 14.9018 18.3329 14.5285 19.0076 13.8394C19.6824 13.1646 20.07 12.2458 20.07 11.284V3.60341C20.07 2.64154 19.6824 1.72275 19.0076 1.048V1.06236Z"
      fill="#FBF8D0"
    />
    <path
      d="M2.87124 12.0447V6.1156H0V11.3125C0 12.2744 0.373262 13.1932 1.06236 13.868C1.7371 14.5427 2.6559 14.9303 3.61777 14.9303H10.2934V12.0591H2.87124V12.0447Z"
      fill="#FBF8D0"
    />
  </Icon>
);
