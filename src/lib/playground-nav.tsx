import {
  AlertCircleIcon,
  BadgePercent,
  Blend,
  Calendar1Icon,
  CheckSquare,
  Component,
  DivideIcon,
  DropletIcon,
  EclipseIcon,
  FileSlidersIcon,
  FileText,
  FormInputIcon,
  Home,
  InboxIcon,
  IndentDecreaseIcon,
  LinkIcon,
  Megaphone,
  Newspaper,
  NotepadTextIcon,
  Projector,
  Radio,
  RegexIcon,
  Sliders,
  SpaceIcon,
  SplinePointer,
  SquareChevronRightIcon,
  Star,
  SwitchCameraIcon,
  Table,
  Table2,
  Tablet,
  Tags,
  TextCursorInput,
  TextSearch,
  TextSelect,
  ToolCase,
  type LucideIcon,
} from "lucide-react";

import { playgroundComponents } from "@/lib/playground-components";

const playgroundIconMap: Record<string, LucideIcon> = {
  avatar: Home,
  badges: BadgePercent,
  breadcrumb: LinkIcon,
  button: RegexIcon,
  buttongroup: InboxIcon,
  checkbox: CheckSquare,
  divider: DivideIcon,
  select: TextSelect,
  input: TextCursorInput,
  textarea: TextSearch,
  progress: Projector,
  radio: Radio,
  slider: Sliders,
  spinner: SplinePointer,
  switch: SwitchCameraIcon,
  tabs: Tablet,
  tags: Tags,
  tooltip: ToolCase,
  alert: AlertCircleIcon,
  notification: NotepadTextIcon,
  dropdown: DropletIcon,
  "input-group": FormInputIcon,
  empty: EclipseIcon,
  field: FileSlidersIcon,
  item: IndentDecreaseIcon,
  kbd: SquareChevronRightIcon,
  spacer: SpaceIcon,
  calendar: Calendar1Icon,
  popover: Blend,
  modal: Component,
  sonner: Megaphone,
  form: FileText,
  header: Newspaper,
  rating: Star,
  "data-grid": Table2,
  "table-tanstack": Table,
};

export type PlaygroundNavItem = {
  title: string;
  url: string;
  slug: string;
  icon?: LucideIcon;
  badge?: string;
};

export function getPlaygroundNavItems(): PlaygroundNavItem[] {
  return playgroundComponents.map((component) => ({
    title: component.name,
    slug: component.slug,
    url: `/playground/${component.slug}`,
    icon: playgroundIconMap[component.slug],
    badge: component.badge,
  }));
}

export const playgroundNavItems = getPlaygroundNavItems();
