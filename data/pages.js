import { servicePages } from './services';
import { guidePages } from './guides';
export const pages = [...servicePages, ...guidePages];
export const getPage = (slug) => pages.find((p) => p.slug === slug) || null;
