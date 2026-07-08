import type { PlaygroundConfig } from "./types";
import {
  alertConfig,
  badgeConfig,
  emptyConfig,
  progressConfig,
  spinnerConfig,
  tooltipConfig,
} from "./feedback";
import {
  checkboxConfig,
  inputConfig,
  radioConfig,
  selectConfig,
  sliderConfig,
  switchConfig,
  textareaConfig,
} from "./form";
import {
  avatarConfig,
  breadcrumbConfig,
  dividerConfig,
  kbdConfig,
  ratingConfig,
  spacerConfig,
  tabsConfig,
} from "./display-layout";
import { buttonConfig, buttonGroupConfig } from "./interactive";
import { dropdownConfig, modalConfig, popoverConfig } from "./overlay";
import {
  calendarConfig,
  fieldConfig,
  headerConfig,
  inputGroupConfig,
  itemConfig,
  notificationConfig,
  sonnerConfig,
  tagsConfig,
} from "./misc";
import { dataGridConfig, formConfig, tableTanstackConfig } from "./data";

const configs: PlaygroundConfig[] = [
  avatarConfig,
  badgeConfig,
  breadcrumbConfig,
  buttonConfig,
  buttonGroupConfig,
  checkboxConfig,
  dividerConfig,
  selectConfig,
  inputConfig,
  textareaConfig,
  progressConfig,
  radioConfig,
  sliderConfig,
  spinnerConfig,
  switchConfig,
  tabsConfig,
  tagsConfig,
  tooltipConfig,
  alertConfig,
  notificationConfig,
  dropdownConfig,
  inputGroupConfig,
  emptyConfig,
  fieldConfig,
  itemConfig,
  kbdConfig,
  spacerConfig,
  calendarConfig,
  popoverConfig,
  modalConfig,
  sonnerConfig,
  formConfig,
  headerConfig,
  ratingConfig,
  dataGridConfig,
  tableTanstackConfig,
];

const configMap = new Map(configs.map((c) => [c.slug, c]));

export function getPlaygroundConfig(slug: string): PlaygroundConfig | undefined {
  return configMap.get(slug);
}

export function getAllPlaygroundConfigs(): PlaygroundConfig[] {
  return configs;
}
