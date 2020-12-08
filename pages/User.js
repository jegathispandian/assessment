import React,{useState,useEffect} from 'react';
import Head from "next/head";
import Layout from "../components/Layout";
import { useRouter } from 'next/router'

const User = () => {
    const router = useRouter();
    const [user,setUser] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${router.query.id}`).then(response => 
        response.json()).then((data)=>{
            setUser(data);
    })
    },[])
    return(
        <Layout>
            <Head>
                <title>User Page</title>
                <meta name="description" content="My Assessment Test React App with Next js"/>
                <meta name="keywords" content="next react seo" />
                <meta name="author" content="jegathis pandian" />
            </Head>
            <div>
                <div>
                    <p></p>
                    <p></p>
                </div>
              <span>Name:</span>{user['name']} <br></br>
              <span>UserName:</span>{user['username']} <br></br>
               <span>Email:</span>{user['email']} <br></br>
               <span>Phone:</span>{user['phone']} <br></br>
               <span>Website:</span>{user['website']} <br></br>
            </div>
        </Layout>
    )
}

export default User