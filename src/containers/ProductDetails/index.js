import AlsoLike from '@/components/AlsoLike/AlsoLike';
import ProductComments from '@/components/ProductDetailsSection/ProductComments';
import ProductDetailPage from '@/components/ProductInfoSection/ProductDetailPage';


const ProductDetailsContainer = ({ product }) => {
    return (
        <>
            <ProductDetailPage product={product} />
            <ProductComments product={product} />
            <AlsoLike />
        </>
    );
};

export default ProductDetailsContainer;
