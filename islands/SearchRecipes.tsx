import { useState } from "preact/hooks";
import { aspects } from "../aspects.ts";
import { Aspect } from "../components/Aspect.tsx";


function AspectRecipe({ aspect }: { aspect: readonly [string, null | readonly [string, string]] }) {
    return <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ width: '260px' }}> <Aspect aspect={aspect[0]} /> </div>
        {aspect[1] == null
            ? null
            : <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '50px' }}>
                <div style={{ width: '260px' }}> <Aspect aspect={aspect[1][0]} /> </div>
                <div style={{ width: '260px' }}> <Aspect aspect={aspect[1][1]} /> </div>
            </div>}
    </div>
}
export default function SearchRecipes() {
    const [search, setSearch] = useState('')

    return <>
        <input type='text' value={search} onInput={e => setSearch((e.target as HTMLInputElement).value)} style={{ fontSize: '20pt' }} />
        <ul>
            {aspects
                .filter(t => t[0].includes(search) || t[1]?.[0].includes(search) || t[1]?.[1].includes(search))
                .sort((left, right) => search.length == 0 ? 0 : left[0].startsWith(search) ? -1 : 1)
                .map(aspect => <li>
                    <AspectRecipe aspect={aspect} />
                </li>)
            }
        </ul>
    </>
}