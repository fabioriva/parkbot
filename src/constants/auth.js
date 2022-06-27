// role
// export const ADMIN = 0
// export const SERVICE = 1
// export const VALET = 2
// export const USER = 3

// roles (page access)
export const OVERVIEW = "overview";
export const MAP = "map";
export const RACKS = "racks";
export const CARDS = "cards";
export const HISTORY = "history";
export const STATISTICS = "statistics";
export const ALARMS = "alarms";
export const NOTIFICATIONS = "notifications";
export const DASHBOARD = "dashboard";
export const DEVICE = "device";
export const DSS = "dss";

// rights (actions)
export const ACTIONS = "actions"; // deprecated
export const DIAGNOSTIC = "diagnostic";
export const EDIT_CARD = "edit-card";
export const EDIT_STALL = "edit-stall";
export const ENTRY = "entry";
export const EXIT = "exit";
export const ROLLBACK = "rollback";

export const hasRole = (user, roles) =>
  roles.some((role) =>
    user.roles !== undefined ? user.roles.includes(role) : false
  );

export const isAllowed = (user, rights) =>
  rights.some((right) =>
    user.rights !== undefined ? user.rights.includes(right) : false
  );
