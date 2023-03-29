import { asset } from "$fresh/runtime.ts";
import { acolors } from "../aspects.ts";


export function AspectImage({ aspect, size }: { aspect: string, size?: string }) {
    const bg: Record<string, unknown> = {}
    if (aspect in acolors)
        bg.background = "#" + acolors[aspect as keyof typeof acolors].toString(16).padStart(6, '0');

    size ??= '64px'

    return <div style={{ height: size, width: size, marginRight: '10px' }}>
        <img src={asset("aspects/" + aspect + ".png")} style={{ height: size, width: size, position: 'absolute', imageRendering: 'pixelated' }} />
        <div style={{ ...bg, width: size, height: size, mixBlendMode: 'darken' }} />
    </div>
}

export function Aspect({ aspect, flexColumn }: { aspect: string, flexColumn?: true }) {
    return <a href={`/${aspect}`} style={{ display: 'flex', flexDirection: flexColumn ? 'column' : 'row', alignItems: 'center' }}>
        <AspectImage aspect={aspect} />
        {aspect}
    </a>
}