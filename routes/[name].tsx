import { PageProps } from "$fresh/server.ts";
import { Head, asset } from "$fresh/runtime.ts";
import { aspectsObj } from "../aspects.ts";
import { Aspect } from "../components/Aspect.tsx";


function Tree({ aspect, left }: { aspect: string, left?: true }) {
    const data = aspectsObj[aspect as keyof typeof aspectsObj]

    return <div style={{ [left ? 'marginRight' : 'marginLeft']: '10px', border: '2px solid #fafafa44', borderBottom: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Aspect aspect={aspect} flexColumn={true} />
        {
            data && <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Tree aspect={data[0]} left={true} />
                <Tree aspect={data[1]} />
            </div>
        }
    </div>
}

export default function AspectTree(props: PageProps) {
    const aspect = props.params.name as string

    return <div>
        <Head>
            <title>{aspect[0].toUpperCase() + aspect.substring(1)}</title>
            <link rel="stylesheet" href={asset("/main.css")} />
        </Head>
        <a href='/'>Home</a>

        <br /><br /><br />
        {aspect in aspectsObj
            ? <Tree aspect={aspect} />
            : `[ Aspect "${aspect}" does not exists ]`
        }
    </div>
}
