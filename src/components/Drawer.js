import Link from "next/link";
import packageInfo from "package.json";
import useTranslation from "next-translate/useTranslation";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// icons
import BarChartIcon from "@mui/icons-material/BarChart";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import HistoryIcon from "@mui/icons-material/History";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import VisibilityIcon from "@mui/icons-material/Visibility";
import * as roles from "src/constants/auth";

const drawerWidth = 240;

export default function AppDrawer(props) {
  const { t } = useTranslation("common");

  const { aps, locale, user } = props;

  const items = (
    <List>
      <Link href={`/${aps}/dashboard`} locale={locale}>
        <ListItem button disabled={!roles.hasRole(user, [roles.DASHBOARD])}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={t("drawer-dashboard")} />
        </ListItem>
      </Link>
      <Link href={`/${aps}/overview`} locale={locale}>
        <ListItem button disabled={!roles.hasRole(user, [roles.OVERVIEW])}>
          <ListItemIcon>
            <VisibilityIcon />
          </ListItemIcon>
          <ListItemText primary={t("drawer-overview")} />
        </ListItem>
      </Link>
      <Link href={`/${aps}/map`} locale={locale}>
        <ListItem button disabled={!roles.hasRole(user, [roles.MAP])}>
          <ListItemIcon>
            <DirectionsCarIcon />
          </ListItemIcon>
          <ListItemText primary={t("drawer-map")} />
        </ListItem>
      </Link>
      <Link href={`/${aps}/cards`} locale={locale}>
        <ListItem button disabled={!roles.hasRole(user, [roles.CARDS])}>
          <ListItemIcon>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText primary={t("drawer-cards")} />
        </ListItem>
      </Link>
      <Link href={`/${aps}/racks`} locale={locale}>
        <ListItem button disabled={!roles.hasRole(user, [roles.RACKS])}>
          <ListItemIcon>
            <ViewComfyIcon />
          </ListItemIcon>
          <ListItemText primary={t("drawer-racks")} />
        </ListItem>
      </Link>
      <Link href={`/${aps}/history`} locale={locale}>
        <ListItem button disabled={!roles.hasRole(user, [roles.HISTORY])}>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary={t("drawer-history")} />
        </ListItem>
      </Link>
      <Link href={`/${aps}/statistics`} locale={locale}>
        <ListItem button disabled={!roles.hasRole(user, [roles.STATISTICS])}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary={t("drawer-statistics")} />
        </ListItem>
      </Link>
      <Link href={`/${aps}/mailingList`} locale={locale}>
        <ListItem button disabled={!roles.hasRole(user, [roles.NOTIFICATIONS])}>
          <ListItemIcon>
            <EditNotificationsIcon />
          </ListItemIcon>
          <ListItemText primary={t("drawer-notifications")} />
        </ListItem>
      </Link>
      <Link href={`/${aps}/dss`} locale={locale}>
        <ListItem button disabled={!roles.hasRole(user, [roles.DSS])}>
          <ListItemIcon>
            <ConnectedTvIcon />
          </ListItemIcon>
          <ListItemText primary={"DSS"} />
          <FiberNewIcon color="secondary" fontSize="large" />
        </ListItem>
      </Link>
    </List>
  );

  const drawer = (
    <div>
      <Toolbar disableGutters={true}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box sx={{ flexGrow: 1, px: 1 }}>
            <Avatar
              alt="Parkbot"
              src="/bot.svg"
              // src='https://avatars.dicebear.com/api/bottts/bottts.svg'
            />
          </Box>
          <Box sx={{ px: 3 }}>
            <Typography variant="caption" noWrap>
              version {packageInfo.version}
            </Typography>
          </Box>
        </Box>
      </Toolbar>
      <Divider />
      {items}
    </div>
  );

  const container =
    typeof window === "undefined" ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { lg: drawerWidth }, flexShrink: { sm: 0 } }} // drawer responsive
      aria-label="folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", lg: "none" }, // drawer responsive
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", lg: "block" }, // drawer responsive
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
