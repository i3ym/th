import { useState } from "preact/hooks";
import { aspects, aspectsObj } from "../aspects.ts";
import { Aspect } from "../components/Aspect.tsx";


type Node = {
    id: string;
    edges: { from: string; to: string; weight: number; }[];
};

function findShortestPath(graph: Node[], startNodeId: string, endNodeId: string): string[] {
    const shortestPaths: { [nodeId: string]: { distance: number; previous: string | null }; } = {};
    const visited: Set<string> = new Set();
    const queue: string[] = [startNodeId];

    graph.forEach(node => {
        shortestPaths[node.id] = { distance: Infinity, previous: null };
    });
    shortestPaths[startNodeId].distance = 0;

    while (queue.length > 0) {
        const currentId = queue.shift()!;
        const currentNode = graph.find(node => node.id === currentId)!;

        if (currentId === endNodeId) break;
        visited.add(currentId);

        currentNode.edges.forEach(edge => {
            const neighborNode = graph.find(node => node.id === edge.to)!;
            const neighborId = neighborNode.id;
            const distanceToNeighbor = shortestPaths[currentId].distance + edge.weight;

            if (!visited.has(neighborId) && distanceToNeighbor < shortestPaths[neighborId].distance) {
                shortestPaths[neighborId] = { distance: distanceToNeighbor, previous: currentId };
                queue.push(neighborId);
            }
        });
    }

    const path: string[] = [];
    let currentNodeId = endNodeId;

    while (currentNodeId !== startNodeId) {
        path.unshift(currentNodeId);
        currentNodeId = shortestPaths[currentNodeId].previous!;
    }

    path.unshift(startNodeId);

    return path;
}

const pathscache: Record<string, string[]> = {}
const nodes: Record<string, Node> = {}
aspects.forEach(aspect => {
    nodes[aspect[0]] ??= { id: aspect[0], edges: [], }

    if (aspect[1]) {
        nodes[aspect[1][0]] ??= { id: aspect[1][0], edges: [], }
        nodes[aspect[1][1]] ??= { id: aspect[1][1], edges: [], }

        nodes[aspect[0]].edges.push({ from: aspect[0], to: aspect[1][0], weight: 1 })
        nodes[aspect[0]].edges.push({ from: aspect[0], to: aspect[1][1], weight: 1 })

        nodes[aspect[1][0]].edges.push({ from: aspect[1][0], to: aspect[0], weight: 1 })
        nodes[aspect[1][1]].edges.push({ from: aspect[1][1], to: aspect[0], weight: 1 })
    }
})


function AspectPath({ from, to }: { from: string, to: string }) {
    const path = pathscache[`${from}${to}`] ??= findShortestPath(Object.values(nodes), from, to)

    return <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '50px' }}>
        {path.map(aspect => <div style={{ width: '100px' }}> <Aspect aspect={aspect} flexColumn={true} /> </div>)}
    </div>
}
export default function SearchPaths() {
    const [search, setSearch] = useState('')

    return <>
        <input type='text' value={search} onInput={e => setSearch((e.target as HTMLInputElement).value)} style={{ fontSize: '20pt' }} />
        <ul>
            {[0].flatMap(_ => {
                const keys = Object.keys(aspectsObj);
                return keys
                    .sort((left, right) => search.length == 0 ? 0 : left.startsWith(search) ? -1 : 1)
                    .flatMap(left => keys
                        .filter(right => keys.indexOf(right) > keys.indexOf(left))
                        .filter(right => left.includes(search) || right.includes(search))
                        .filter(right => left.includes(search) || right.includes(search))
                        .filter(right => (aspectsObj[right as keyof typeof aspectsObj] as readonly string[] | undefined)?.includes(left) != true)
                        .filter(right => (aspectsObj[left as keyof typeof aspectsObj] as readonly string[] | undefined)?.includes(right) != true)
                        .sort((left, right) => search.length == 0 ? 0 : left.startsWith(search) ? -1 : 1)
                        .map(right => <li> <AspectPath from={left} to={right} /> </li>)
                    )
            })}
        </ul>
    </>
}