import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import Head from "next/head";
import Layout from "../components/Layout";
import { useRouter } from 'next/router';
const Index = () => {
    const router = useRouter();
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(response => 
        response.json()).then((data)=>{
            setUsers(data);
    })
    },[users])
  
    return(
        <Layout>
            <Head>
                <title>Home Page</title>
                <meta name="description" content="My Assessment Test React App with Next js"/>
                <meta name="keywords" content="next react seo" />
                <meta name="author" content="jegathis pandian" />
            </Head>
            {
                users.map((i,k)=>{
                    return(
                        <div>
                            <li key={k}>
                           <a onClick={() => router.push(`/User?id=${i.id}`)}>{i.username} </a>
                           </li>
                        </div>
                    )
                })
            }
        </Layout>
    )
}

export default Index
