import fetch from "src/lib/fetch";
import { DSS } from "/src/constants/auth";
import authSSR from "src/lib/authSSR";
import ScreenList from "src/components/dss/ScreenList";
import withAuthSync from "src/hocs/withAuthSync";

const Page = (props) => <ScreenList {...props} />;

export async function getServerSideProps(ctx) {
  const props = await authSSR(ctx, ctx.params.aps, DSS);
  if (props.notFound || props.redirect) return props;

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${ctx.params.aps}/dss`;
  // const url = 'https://sotefinservice.com/dss'
  const json = await fetch(url, {
    headers: { Authorization: "Bearer " + props.token },
  });
  return { props: { ...props, json } };
}

export default withAuthSync(Page);
