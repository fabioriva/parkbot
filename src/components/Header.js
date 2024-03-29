import Link from "next/link";
// import { useTheme } from "@mui/material";
// import { withStyles } from '@mui/styles'
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// icons
// import RouterIcon from "@mui/icons-material/Router";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
// import Active from "src/components/Active";
import Tooltip from "src/components/Tooltip";
import useTranslation from "next-translate/useTranslation";

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   "& .MuiBadge-badge": {
//     backgroundColor: "#44b700",
//     color: "#44b700",
//     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//     "&::after": {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       borderRadius: "50%",
//       animation: "ripple 1.2s infinite ease-in-out",
//       border: "1px solid currentColor",
//       content: '""',
//     },
//   },
//   "@keyframes ripple": {
//     "0%": {
//       transform: "scale(.8)",
//       opacity: 1,
//     },
//     "100%": {
//       transform: "scale(2.4)",
//       opacity: 0,
//     },
//   },
// }));

// const StyledBadge = withStyles({
//   badge: {
//     backgroundColor: '#44b700',
//     color: '#44b700',
//     '&::after': {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       borderRadius: '50%',
//       animation: '$ripple 1.2s infinite ease-in-out',
//       border: '1px solid currentColor',
//       content: '""'
//     }
//   },
//   '@keyframes ripple': {
//     '0%': {
//       transform: 'scale(.8)',
//       opacity: 1
//     },
//     '100%': {
//       transform: 'scale(2.4)',
//       opacity: 0
//     }
//   }
// })(Badge)

export default function AppHeader({
  aps,
  apsName,
  pageTitle,
  comm,
  diag,
  map,
  loading,
}) {
  // const theme = useTheme();
  const { t } = useTranslation("common");

  // const online = (
  //   <StyledBadge variant="dot">
  //     <Tooltip title="ONLINE" aria-label="online">
  //       <RouterIcon />
  //     </Tooltip>
  //   </StyledBadge>
  // );

  // const offline = (
  //   <Badge variant="dot" color="error">
  //     <Tooltip title="OFFLINE" aria-label="offline">
  //       <RouterIcon />
  //     </Tooltip>
  //   </Badge>
  // );

  // const cars = (
  //   <Tooltip
  //     title={t("header-cars", { count: map[0]?.value || 0 })}
  //     aria-label="occupancy"
  //   >
  //     <IconButton
  //       aria-label="occupancy"
  //       size="small"
  //       href={`/${aps}/map`}
  //       sx={{ color: "black" }}
  //     >
  //       <Badge badgeContent={map[0]?.value} color="primary" max={999} showZero>
  //         <DirectionsCarIcon />
  //       </Badge>
  //     </IconButton>
  //   </Tooltip>
  // );

  const online = (
    <Tooltip title="ONLINE" aria-label="online">
      <Chip label="PLC" color="success" size="small" sx={{ marginLeft: 0.5 }} />
    </Tooltip>
  );

  const offline = (
    <Tooltip title="OFFLINE" aria-label="offline">
      <Chip label="PLC" color="error" size="small" sx={{ marginLeft: 0.5 }} />
    </Tooltip>
  );

  const cars = (
    <Tooltip
      title={t("header-cars", { count: map[0]?.value || 0 })}
      aria-label="occupancy"
    >
      <Chip
        icon={<DirectionsCarIcon />}
        label={map[0]?.value}
        size="small"
        sx={{ marginLeft: 0.5 }}
      />
    </Tooltip>
  );

  const notifications = (
    <Tooltip
      title={t("header-alarms", { count: diag })}
      aria-label="notifications active"
    >
      <Chip
        icon={<NotificationsActiveIcon />}
        label={diag}
        size="small"
        color="error"
      />
    </Tooltip>
  );

  return (
    <>
      <Box display="flex" flexDirection="row" alignItems="center" p={0} mt={2}>
        <Box p={0} flexGrow={1}>
          <Box p={0}>
            <Typography display="inline" variant="h6">
              {pageTitle}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              sx={{ display: { xs: "none", sm: "inline" }, marginLeft: 1 }}
              // sx={{
              //   [theme.breakpoints.down("sm")]: {
              //     // fontSize: 12,
              //     display: "none",
              //   },
              // }}
            >
              {apsName}
            </Typography>
          </Box>
        </Box>

        {!loading && (
          <Box sx={{ "& button": { m: 0 } }}>
            {/* {diag > 0 && <Active active={diag} href={`/${aps}/overview`} />} */}
            {diag > 0 && <Link href={`/${aps}/overview`}>{notifications}</Link>}
            <Link href={`/${aps}/map`}>{cars}</Link>
            {comm ? online : offline}
          </Box>
        )}
      </Box>
      <Divider sx={{ mb: 2 }} />
    </>
  );
}
