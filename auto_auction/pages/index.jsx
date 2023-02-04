import React from "react";
import Layout from "@/components/layout/Layout";
import Main from "@/components/home/main/Main";
import Services from "@/components/home/services/Services";
import Description from "@/components/home/description/Description";


export default function Home() {

    return (
        <Layout title="Home">
            <Main />
            <Services />
            <Description />
        </Layout>
    );
}
