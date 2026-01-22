'use client';
import { useState, useEffect } from 'react'
import Image from "next/image"
import Head from "next/head"
import { request } from "graphql-request"
import useSWR from "swr"
import { PuffLoader } from "react-spinners"
import { motion } from "framer-motion"


type Related = {id: string, name:string}
type Media = {id: string, url: string}
type ProductType = {id: string, name: string}
type GqlNode = {id: string, name: string, media: Media[], description: string, catname: string, price: number, productRelated: ProductType[], productType: ProductType}

const API_ENDPOINT: any = process.env.NEXT_PUBLIC_SALEOR_API_URL
//const getProducts = `{ products(first:100){ edges{ node{ id name } } }}`

const getProducts = `{
  products(first: 10) {
    edges {
      node {
        category {
          name
        }
        id
        name
        pricing {
          priceRange {
            start {
              gross {
                amount
              }
            }
          }
        }
        description
        media {
          id
          url
        }
        productType {
          products(first: 5) {
            edges {
              node {
                id
                name
              }
            }
          }
          id
          name
          productAttributes {
            id
          }
        }
      }
    }
  }
}`


const GetRelated = ({id, name} : Related) => {
    return <p className="text text--base text--grey--light">{name}</p>
}


export default function App() {
  const { data: products, error, isLoading } = useSWR(getProducts, (query) => request(API_ENDPOINT, query) )
  const [edges, setEdges] = useState<GqlNode[]>([])


  useEffect(() => {
    const edges = products?.products.edges,
          arr: GqlNode[] = []
    for(let row in edges){
        const node = edges[row].node,
              {id, name, category, description, pricing, media, productType} = node,
              catname = category.name,
              price = pricing.priceRange.start.gross.amount,
              related = productType.products.edges,
              productRelated = []

        let desc = JSON.parse(description)
        desc = desc.blocks[0].data.text
        
        for(let row of related){
            productRelated.push(row.node)
        }

        arr.push({id, name, catname, price, media, productType, productRelated, description: desc})
    }
    if(arr.length) setEdges(arr)
        
  }, [products])  

  console.log(edges)

  if (isLoading) return <div className="loading"><PuffLoader color="#f58220" /></div>
  if (error) return <div className="loading">Error: {error.message}</div>
  return (
    <main className="content">
        <div className="content__wrapper">
            <div className="section">
                <div className="section__wrapper">
                    <div className="container">
                        <div className="shopping">
                            <div className="shopping__wrapper">

                                <form className="shopping-filter" id="shopping-filter">
                                    <div className="shopping-filter__mobile">
                                        <a href="#shopping-filter" className="shopping-filter__header">
                                            <svg className="icon icon--arrow">
                                                
                                            </svg>
                                            <p className="text text--base">
                                                Filter
                                            </p>
                                            <svg className="icon icon--filter">
                                                
                                            </svg>
                                        </a>
                                        <div className="input-row input-row--mobile--default">
                                            <p className="input-row__title">
                                                Sort by
                                            </p>
                                            <div className="input-row__item fieldset fieldset--sort">
                                                <div className="input input--small">
                                                    <a href="#" className="icon">
                                                        <svg className="icon">
                                                            
                                                        </svg>
                                                    </a>
                                                    <select name="" id="" className="input__item">
                                                        <option disabled value="">Choose Choose Choose
                                                            Choose
                                                            1
                                                        </option>
                                                        <option value="">Choose Choose Choose Choose 1
                                                        </option>
                                                        <option value="">Choose 1</option>
                                                        <option value="">Choose 1</option>
                                                    </select>

                                                    <svg className="icon icon--arrow">
                                                        
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shopping-filter__wrapper">
                                        <div className="shopping-filter__main">
                                            <div className="shopping-filter__grid">
                                                <div className="input-row">
                                                    <p className="input-row__title">
                                                        Car Manufacturer
                                                    </p>
                                                    <div className="input-row__item fieldset">
                                                        <div className="input input--small">
                                                            <select name="" id="" className="input__item">
                                                                <option disabled selected>Choose 1</option>
                                                                <option value="">Choose 1</option>
                                                                <option value="">Choose 1</option>
                                                                <option value="">Choose 1</option>
                                                            </select>

                                                            <svg className="icon icon--arrow">
                                                                
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-row">
                                                    <p className="input-row__title">
                                                        Car model
                                                    </p>
                                                    <div className="input-row__item fieldset">
                                                        <div className="input input--small">
                                                            <select name="" id="" className="input__item">
                                                                <option disabled value="">Choose 1</option>
                                                                <option value="">Choose 1</option>
                                                                <option value="">Choose 1</option>
                                                                <option value="">Choose 1</option>
                                                            </select>

                                                            <svg className="icon icon--arrow">
                                                                
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-row">
                                                    <p className="input-row__title">
                                                        Car release year
                                                    </p>
                                                    <div className="input-row__item fieldset">
                                                        <div className="input input--small">
                                                            <select name="" id="" className="input__item">
                                                                <option disabled value="">Choose 1</option>
                                                                <option value="">Choose 1</option>
                                                                <option value="">Choose 1</option>
                                                                <option value="">Choose 1</option>
                                                            </select>

                                                            <svg className="icon icon--arrow">
                                                                
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="shopping-filter__row">
                                                <div className="shopping-filter__checkbox">
                                                    <label className="checkbox">
                                                        <input type="checkbox" className="checkbox__input" />
                                                        <span className="checkbox__checkmark">
                                                         <svg className="icon">
                                                                
                                                            </svg>
                                                    </span>
                                                        <span className="checkbox__text text text--middle text--semibold">
                                                    Bed Rack
                                                </span>
                                                    </label>
                                                    <label className="checkbox">
                                                        <input type="checkbox" className="checkbox__input" />
                                                        <span className="checkbox__checkmark">
                                                         <svg className="icon">
                                                                
                                                            </svg>
                                                    </span>
                                                        <span className="checkbox__text text text--middle text--semibold">
                                                  Bull Bar
                                                </span>
                                                    </label>
                                                    <label className="checkbox">
                                                        <input type="checkbox" className="checkbox__input" />
                                                        <span className="checkbox__checkmark">
                                                         <svg className="icon">
                                                                
                                                            </svg>
                                                    </span>
                                                        <span className="checkbox__text text text--middle text--semibold">
                                                   Running Board
                                                </span>
                                                    </label>
                                                    <label className="checkbox">
                                                        <input type="checkbox" className="checkbox__input" />
                                                        <span className="checkbox__checkmark">
                                                         <svg className="icon">
                                                                
                                                            </svg>
                                                    </span>
                                                        <span className="checkbox__text text text--middle text--semibold">
                                                 HD Grille Guard
                                                </span>
                                                    </label>
                                                </div>
                                                <div className="shopping-filter__sort">
                                                    <div className="input-row">
                                                        <p className="input-row__title">
                                                            Sort by
                                                        </p>
                                                        <div className="input-row__item fieldset fieldset--sort">
                                                            <div className="input input--small">
                                                                <a href="#" className="icon">
                                                                    <svg className="icon">
                                                                        
                                                                    </svg>
                                                                </a>
                                                                <select name="" id="" className="input__item">
                                                                    <option disabled value="">Choose Choose Choose
                                                                        Choose
                                                                        1
                                                                    </option>
                                                                    <option value="">Choose Choose Choose Choose 1
                                                                    </option>
                                                                    <option value="">Choose 1</option>
                                                                    <option value="">Choose 1</option>
                                                                </select>

                                                                <svg className="icon icon--arrow">
                                                                    
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit"
                                                        className="shopping-filter__button button button--center button--text">
                                                    <span className="button__text">apply</span>
                                                    <svg className="button__icon">
                                                        
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                         

                              <div className="product-list">

                                  { edges.map((item: GqlNode, index: number) => (

                                   <motion.div
                                        key={item.id} className="product-card"
                                        initial={{ y: -80 }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.8 * index }}
                                    >
                                        <div className="product-card__wrapper">
                                            <div className="product-card__img">
                                              <Image unoptimized={true} alt="" width={0} height={0} className="full" src={item.media[0]?.url || "/img/shop/2.webp"} />
                                            </div>
                                            <div className="product-card__row">
                                                <div className="product-card__block">
                                                    <div className="product-card__content product-card__content--mobile--full">
                                                        <p className="text text--middle text--semibold">
                                                            {item.catname}
                                                            <span className="text text--grey--dark">
                                                                | {item.name}
                                                            </span>
                                                        </p>
                                                        <p className="text text--base text--opacity">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="product-card__block">
                                                    <div className="product-card__content">
                                                        <p className="text text--middle text--semibold">
                                                            Model:
                                                        </p>


                                                        { item.productRelated.map((row) => (
                                                                <GetRelated key={row.id} id={row.id} name={row.name} />
                                                        ))}
                                                            

                                                    </div>
                                                </div>
                                                <div className="product-card__block product-card__block--mobile--clear">
                                                    <div className="product-card__content text--center">
                                                        <p className="price text text--middle">
                                                            <span className="text text--grey--lighter">Starts With:</span>
                                                            <b>${item.price}.00</b>
                                                        </p>
                                                        <a href="#" className="button button--base button--accent">
                                                            Build
                                                            <svg className="button__icon">
                                                            
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>  
                                  
                                ))}
                              
                              </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

/*



    <div>
        {edges && edges.map((item: Node) => <h2 key={ item.id }>{ item.name }</h2>)}    
    </div>
*/
