import "@/styles/globals.css";
import Layout from "@/component/Layout";

export default function App({ Component, pageProps, router }) {
if (router.pathname === "/404" || router.pathname === '/signup' || router.pathname === '/login'){
  return(
     <Component {...pageProps} />
  )
}


  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
