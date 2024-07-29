import "@/styles/globals.css";
import Layout from "@/component/Layout";
import { UserProvider } from "@/context/UserContext";

export default function App({ Component, pageProps, router }) {
if (router.pathname === "/404" || router.pathname === '/signup' || router.pathname === '/login'){
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}


  return (
    <Layout>

      <UserProvider>

      <Component {...pageProps} />

      </UserProvider>
      
    </Layout>
  );
}
