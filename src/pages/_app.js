// import "../../styles/globals.css";
import dynamic from "next/dynamic";
import "../../styles/globals.css";
import CartContextProvider from "../context/cartContext";
import Layout from "../layout";

const AuthContextProviver = dynamic(() => import("../context/authContext"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProviver>
      <CartContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </AuthContextProviver>
  );
}

export default MyApp;
