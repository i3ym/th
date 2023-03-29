





export default function Header({ current }: { current: string }) {
    function tostring(str: string) {
        if (str.toLowerCase() == current) return `[${str}]`
        else return str
    }

    return <div>
        <a href="/">{tostring('Search')}</a>
        {' | '}
        <a href="/paths">{tostring('Paths')}</a>
    </div>
}
