import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import products from "../../../products.json"
 
export async function GET(){
  return NextResponse.json(products);
}