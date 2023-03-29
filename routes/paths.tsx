import { Head, asset } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import SearchPaths from "../islands/SearchPaths.tsx";


export default function Home() {
    return <div>
        <Head>
            <title>Thaumcraft aspects</title>
            <link rel="stylesheet" href={asset("/main.css")} />
        </Head>

        <Header current='paths' /> <br />
        <SearchPaths />
    </div>
}
