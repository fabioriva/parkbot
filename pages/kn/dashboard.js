import React from "react";
import fetch from "src/lib/fetch";
import authSSR from "src/lib/authSSR";
import { DASHBOARD } from "/src/constants/auth";
// import Dashboard from 'src/components/dashboard/Dashboard'
import withAuthSync from "src/hocs/withAuthSync";

import useSWR from "swr";
import useTranslation from "next-translate/useTranslation";
import Divider from "@mui/material//Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Error from "src/components/Error";
import Layout from "src/components/Layout";
import HistoryListItem from "src/components/history/HistoryListItem";
import Devices from "src/components/dashboard/Devices";
import Widget from "src/components/dashboard/Widget";
import Occupancy from "src/components/charts/Occupancy";
import Operations from "src/components/charts/Operations";

const fetcher = (url) => global.fetch(url).then((r) => r.json());

function Dashboard(props) {
  const { t } = useTranslation("dashboard");

  if (props.json.err) return <Error {...props} pageTitle={t("page-title")} />;

  const [dashboard, setDashboard] = React.useState(props.json);

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/dashboard`;
  const { data, error } = useSWR(url, fetcher, {
    fallbackData: dashboard,
    refreshInterval: 1000,
  });

  React.useEffect(() => {
    if (data) setDashboard(data);
  }, [data]);

  const { activity, occupancy, operations, left, right } = dashboard;

  const locale = props.user.locale !== undefined ? props.user.locale : "en";

  return (
    <Layout {...props} pageTitle={t("page-title")}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-around"
        spacing={2}
      >
        <Grid item xs={12} lg>
          <Widget
            href={`/${locale}/${props.aps}/overview`}
            title={'Elevators'}
          >
            <Devices
              aps={props.aps}
              devices={[
                ...left.devices.slice(0, 3),
                ...right.devices.slice(0, 3),
              ]}
              user={props.user}
            />
          </Widget>
        </Grid>
        <Grid item xs={12} lg>
          <Widget
            href={`/${locale}/${props.aps}/overview`}
            title={'Shuttles (Left)'}
          >
            <Devices
              aps={props.aps}
              devices={left.devices.slice(3, 15)}
              user={props.user}
            />
          </Widget>
        </Grid>
        <Grid item xs={12} lg>
          <Widget
            href={`/${locale}/${props.aps}/history`}
            title={t("activity-title")}
          >
            <List dense>
              {activity.documents.map((item, key) => (
                <React.Fragment key={key}>
                  <HistoryListItem item={item} />
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              ))}
            </List>
            {/* <Activity activity={activity} /> */}
          </Widget>
        </Grid>
        <Grid item xs={12} lg>
          <Widget
            href={`/${locale}/${props.aps}/overview`}
            title={'Shuttles (Right)'}
          >
            <Devices
              aps={props.aps}
              devices={right.devices.slice(3, 15)}
              user={props.user}
            />
          </Widget>
        </Grid>
        {/* <Grid item xs={12} lg>
          <Widget
            href={`/${locale}/${props.aps}/map`}
            title={t("occupancy-title", { count: left.definitions.stalls })}
          >
            <Occupancy
              // animation
              data={[
                occupancy[0].value,
                occupancy[1].value,
                occupancy[2].value,
              ]}
              labels={[t("busy"), t("free"), t("lock")]}
              height={315}
              width={315}
            />
          </Widget>
        </Grid> */}
        {/* <Grid item sx={{ display: 'flex' }} xs={12} lg>
          <Widget href={`/${locale}/${props.aps}/overview`} title={t('occupancy-title')}>
            <QueueList
              queue={system.exitQueue.queueList}
              onDelete={props.onDelete}
            />
          </Widget>
        </Grid> */}
        {operations[1].data.length > 0 && (
          <Grid item xs={12} sx={{ display: { xs: "none", md: "block" } }}>
            <Widget
              href={`/${locale}/${props.aps}/statistics`}
              title={t("operations-title")}
            >
              <Operations
                // animation
                data={operations[1].data}
                labels={[t("entries"), t("exits"), t("total")]}
                title={t(
                  "statistics:" + operations[1].key,
                  operations[1].query
                )}
                // title={`${operations[1].title}: ${operations[1].label}`}
                height={"40%"}
                width={"100%"}
              />
            </Widget>
          </Grid>
        )}
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const hrstart = process.hrtime();

  const props = await authSSR(ctx, "kn", DASHBOARD);
  if (props.notFound || props.redirect) return props;

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/kn/dashboard`;
  const json = await fetch(url, {
    headers: { Authorization: "Bearer " + props.token },
  });

  const hrend = process.hrtime(hrstart);

  return { props: { ...props, json, executionTime: hrend } };
}

export default withAuthSync(Dashboard);
