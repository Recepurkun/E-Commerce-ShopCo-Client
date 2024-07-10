export const getProducts = async () => {
    const response = await fetch("http://localhost:5500/clothesProduct", { cache: "no-store" })
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json()
}

export const getHomepageComments = async () => {
    const response = await fetch("http://localhost:5500/homepageComment", { cache: "no-store" })
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json()
}

export const getProductById = async (id) => {
    const products = await getProducts();
    const result = products.find((product) => product.id.toString() === id)
    return result;
};

export const getProductsForCategory = async (style) => {
    const products = await getProducts();
    const categoryData = products.filter((urun) => urun.style === style)
    return categoryData
}