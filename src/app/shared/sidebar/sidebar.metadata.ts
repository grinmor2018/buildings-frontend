// Sidebar route metadata
export interface RouteInfo {
  path: string;
  title: string;
  category?: string;
  icon: string;
  class: string;
  extralink: boolean;
  submenu: RouteInfo[];
}
