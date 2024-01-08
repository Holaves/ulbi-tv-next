import Link from "next/link";
import { useState } from "react";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {
    const linkUserStyles = {
        textDecoration: "none",
        fontSize: "18px",
        color: "black",
        marginTop: "5px"
    }
   
   return(
       <MainContainer keywords={"users page"}>
            <h1>Список пользователей</h1>
            <ul className="listUsers">
                {users.map(user => 
                    <Link key={user.id} href={`/users/${user.id}`} style={linkUserStyles}>
                        {user.id}. {user.name} 
                    </Link>    
                )}
            </ul>
            <style jsx>
                {`
                    .listUsers{
                        display: flex;
                        flex-direction: column;
                    }
                `}
            </style>
       </MainContainer>
       
   );
};


export default Users;


export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()
    return {
        props: {users},
    }
}