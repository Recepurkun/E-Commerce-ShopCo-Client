import ProductDetailsContainer from '@/containers/ProductDetails';
import { getProductById } from '@/services/api';

const ProductPage = async ({ params }) => {
    const { productId } = params;
    console.log("params: ", params);
    const product = await getProductById(productId);

    return (
        <>
            <ProductDetailsContainer product={product} />
        </>
    )
};

export default ProductPage;

