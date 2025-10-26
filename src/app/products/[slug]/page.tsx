//product detailed page
import ProductPage from '@/components/productpage/productdetail'
import RelatedProducts from '@/components/productpage/relatedProduct'
import React from 'react'

function page() {
  return (
    <div>
      <ProductPage />
      <RelatedProducts/>
    </div>
  )
}

export default page