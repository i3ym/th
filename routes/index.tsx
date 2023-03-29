import { Head, asset } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import SearchRecipes from "../islands/SearchRecipes.tsx";


export default function Home() {
    return <div>
        <Head>
            <title>Thaumcraft aspects</title>
            <link rel="stylesheet" href={asset("/main.css")} />
        </Head>

        <Header current='search' /> <br />
        <SearchRecipes />
    </div>
}
