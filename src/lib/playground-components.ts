export type PlaygroundComponent = {
  slug: string;
  name: string;
  description: string;
  category: PlaygroundCategory;
  badge?: string;
};

export type PlaygroundCategory =
  | "Layout"
  | "Form"
  | "Feedback"
  | "Navigation"
  | "Overlay"
  | "Data Display"
  | "Interactive";

export const playgroundCategories: PlaygroundCategory[] = [
  "Layout",
  "Form",
  "Feedback",
  "Navigation",
  "Overlay",
  "Data Display",
  "Interactive",
];

export const playgroundComponents: PlaygroundComponent[] = [
  {
    slug: "avatar",
    name: "Avatar",
    description: "Display user profile image or initials.",
    category: "Data Display",
    badge: "1",
  },
  {
    slug: "badges",
    name: "Badge",
    description: "Small status or count indicator.",
    category: "Data Display",
    badge: "2",
  },
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    description: "Navigation trail showing page hierarchy.",
    category: "Navigation",
    badge: "3",
  },
  {
    slug: "button",
    name: "Button",
    description: "Trigger an action or event.",
    category: "Interactive",
    badge: "4",
  },
  {
    slug: "buttongroup",
    name: "Button Group",
    description: "Group related buttons together.",
    category: "Interactive",
    badge: "5",
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    description: "Toggle a single boolean value.",
    category: "Form",
  },
  {
    slug: "divider",
    name: "Divider",
    description: "Visual separator between content sections.",
    category: "Layout",
  },
  {
    slug: "select",
    name: "Select",
    description: "Dropdown selection input.",
    category: "Form",
  },
  {
    slug: "input",
    name: "Input",
    description: "Text input field with variants and sizes.",
    category: "Form",
  },
  {
    slug: "textarea",
    name: "Text Area",
    description: "Multi-line text input control.",
    category: "Form",
  },
  {
    slug: "progress",
    name: "Progress Bar",
    description: "Visual indicator of task completion.",
    category: "Feedback",
  },
  {
    slug: "radio",
    name: "Radio Group",
    description: "Select one option from a set.",
    category: "Form",
  },
  {
    slug: "slider",
    name: "Slider",
    description: "Select a value from a continuous range.",
    category: "Form",
  },
  {
    slug: "spinner",
    name: "Spinner",
    description: "Loading indicator animation.",
    category: "Feedback",
  },
  {
    slug: "switch",
    name: "Switch",
    description: "Toggle between on and off states.",
    category: "Form",
  },
  {
    slug: "tabs",
    name: "Tabs",
    description: "Switch between related content panels.",
    category: "Navigation",
  },
  {
    slug: "tags",
    name: "Tags",
    description: "Removable label chips.",
    category: "Data Display",
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    description: "Contextual popup on hover or focus.",
    category: "Feedback",
  },
  {
    slug: "alert",
    name: "Alert",
    description:
      "Display a short, important message in a way that attracts the user's attention without interrupting their task.",
    category: "Feedback",
  },
  {
    slug: "notification",
    name: "Notification",
    description: "Inline notification messages.",
    category: "Feedback",
  },
  {
    slug: "dropdown",
    name: "Dropdown",
    description: "Menu of actions triggered by a button.",
    category: "Overlay",
  },
  {
    slug: "input-group",
    name: "Input Group",
    description: "Input with prefix and suffix addons.",
    category: "Form",
  },
  {
    slug: "empty",
    name: "Empty",
    description: "Empty state placeholder for lists.",
    category: "Feedback",
  },
  {
    slug: "field",
    name: "Field",
    description: "Form field wrapper with label and hint.",
    category: "Form",
  },
  {
    slug: "item",
    name: "Item",
    description: "List item with media and actions.",
    category: "Data Display",
  },
  {
    slug: "kbd",
    name: "Kbd",
    description: "Keyboard shortcut display.",
    category: "Data Display",
  },
  {
    slug: "spacer",
    name: "Spacer",
    description: "Flexible spacing utility for layouts.",
    category: "Layout",
  },
  {
    slug: "calendar",
    name: "Calendar",
    description: "Date picker calendar component.",
    category: "Form",
  },
  {
    slug: "popover",
    name: "Popover",
    description: "Floating content panel anchored to a trigger.",
    category: "Overlay",
  },
  {
    slug: "modal",
    name: "Modals",
    description: "Dialog overlay for focused interactions.",
    category: "Overlay",
  },
  {
    slug: "sonner",
    name: "Sonner",
    description: "Toast notifications powered by Sonner.",
    category: "Feedback",
  },
  {
    slug: "form",
    name: "Forms",
    description: "Form composition with validation via react-hook-form.",
    category: "Form",
    badge: "new",
  },
  {
    slug: "header",
    name: "Header",
    description: "Page header with breadcrumbs and actions.",
    category: "Layout",
    badge: "new",
  },
  {
    slug: "rating",
    name: "Rating",
    description: "Star rating input and display.",
    category: "Data Display",
    badge: "new",
  },
  {
    slug: "data-grid",
    name: "Data Grid Table",
    description: "Editable spreadsheet-style data grid with virtualization.",
    category: "Data Display",
    badge: "new",
  },
  {
    slug: "table-tanstack",
    name: "Data Table TanStack",
    description: "Sortable data table built with TanStack Table.",
    category: "Data Display",
    badge: "Table",
  },
];

export function getPlaygroundComponent(slug: string) {
  return playgroundComponents.find((c) => c.slug === slug);
}

export function getPlaygroundNeighbors(slug: string) {
  const index = playgroundComponents.findIndex((c) => c.slug === slug);
  return {
    prev: index > 0 ? playgroundComponents[index - 1] : null,
    next:
      index < playgroundComponents.length - 1
        ? playgroundComponents[index + 1]
        : null,
  };
}

export function getComponentsByCategory(category: PlaygroundCategory) {
  return playgroundComponents.filter((c) => c.category === category);
}
