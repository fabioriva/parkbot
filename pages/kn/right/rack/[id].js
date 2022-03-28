import React from "react";
import fetch from "src/lib/fetch";
import authSSR from "src/lib/authSSR";
import { RACKS } from "/src/constants/auth";
// import Rack from "src/components/racks/Rack";
import withAuthSync from "src/hocs/withAuthSync";

import { useRouter } from "next/router";
import { useData } from "src/lib/useWebSocket";
import Error from "src/components/Error";
import Layout from "src/components/Layout";
import RackView from "src/components/racks/RackView";
import useTranslation from "next-translate/useTranslation";

// const Page = (props) => <Rack {...props} aps={props.aps + "/left"} />;

const Page = (props) => {
  const { t } = useTranslation("racks");

  if (props.json.err)
    return (
      <Error {...props} pageTitle={t("rack-title", { name: rack.title })} />
    );

  const router = useRouter();
  const { id } = router.query;

  const [rack, setRack] = React.useState(props.json);

  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/right/racks/${id}`;
  const { data, loading } = useData(url, {
    initialData: rack,
    page: "racks",
  });
  React.useEffect(() => setRack(data), [data]);

  return (
    <Layout {...props} pageTitle={t("rack-title", { name: rack.title })}>
      <RackView rack={rack} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const hrstart = process.hrtime();

  const props = await authSSR(ctx, "kn", RACKS);
  if (props.notFound || props.redirect) return props;

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/kn/right/rack/${ctx.params.id}`;
  const json = await fetch(url, {
    headers: { Authorization: "Bearer " + props.token },
  });

  const hrend = process.hrtime(hrstart);

  return { props: { ...props, json, executionTime: hrend } };
}

export default withAuthSync(Page);
