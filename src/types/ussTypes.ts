export interface USSBreakdown {
  id: string;
  bannerText: string|null;
  comments: string;
  created: string;
  description: string|null;
  elements: string[];
  pages: number|null;
  scene: string|null;
  scriptPage: string|null;
  duration: number|null;
  type: 'scene'|'banner';
}
export interface USSCategory {
  id: string;
  ucid: number;
  created: string;
  name: string;
}
export interface USSElement {
  id: string;
  category: string;
  created: string;
  daysOff: number[];
  isDrop: boolean;
  dropDayCount: number;
  isHold: boolean;
  isDood: boolean;
  elementId: string|null;
  isIdLock: boolean;
  linkedElements: string[]|null; 
  events: USSEvent[]|null;
  name: string;
}
export interface USSEvent {
  id: string;
  type: string;
  name: string|null;
  date: string;
}
export interface USSBoard {
  id: string;
  name: string;
  breakdownIds: any[]; // should be string[]|string[][]
}
export interface USSStripboard {
  id: string;
  boards: USSBoard[];
  calendar: string|null;
  name: string;
}
export interface USSCalendar {
  id: string;
  events: USSEvent[];
  daysOff: number[];
  name: string;
}
export interface USSBody {
  id: string;
  author: string|null;
  company: string|null;
  created: string;
  description: string;
  episode: string|null;
  episodeName: string|null;
  name: string;
  project: string|null;
  schedColor: string|null;
  schedDate: string|null;
  scriptColor: string|null;
  scriptDate: string|null;
  season: string|null;
  source: string;
  ussVersion: string|number;
  breakdowns: USSBreakdown[];
  categories: USSCategory[];
  elements: USSElement[];
  stripboards: USSStripboard[]|null;
  calendars: USSCalendar[]|null;
}
export interface USSObject {
  universalScheduleStandard: USSBody;
}