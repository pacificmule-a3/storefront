import { useState, useEffect } from 'react'
import { request } from "graphql-request"
import useSWR from "swr"

type Node = {id: string, name: string}
const API_ENDPOINT = process.env.NEXT_PUBLIC_SALEOR_API_URL as string
const getProducts = `{ products(first:100){ edges{ node{ id name } } }}`

export default function App() {
  const { data: products, error } = useSWR(getProducts, (query) => request(API_ENDPOINT, query) )
  const [edges, setEdges] = useState<Node[]>([])
  
  useEffect(() => {
    const edges = products?.products.edges,
          arr: Node[] = []
    for(let row in edges){
        const node = edges[row].node,
              {id, name} = node
        arr.push({id, name})
    }
    setEdges(arr)
  }, products)  
  
  return 
}
