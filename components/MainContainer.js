import Head from "next/head";
import A from "../components/A";

const MainContainer = ({children, keywords}) => {
    const linkStyles = {
        textDecoration: "none",
        color: "white",
        fontSize: "24px",
        marginLeft: "15px"
    }
   return(
       <>
            <Head>
                <meta keywords={"ulbi tv, nextjs" + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div className="navbar">
                <A href={"/"} style={linkStyles} text={"Главная"}/>
                <A href={"/users"} style={linkStyles} text={"Список пользователей"}/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar{
                        background: orange;
                        padding: 15px;
                    
                    }
                `}
            </style>
       </>
   );
};


export default MainContainer;