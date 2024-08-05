// const apiUrl = "http://localhost:5500";
const apiUrl = "https://e-commerce-shop-co-server.vercel.app/";
//* CORS HATASI VEREBİLİYOR. 

const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
    }
    return response.json();
};

export const getProducts = async () => {
    return fetchData(`${apiUrl}/clothesProduct`, { cache: "no-store" });
};

export const getHomepageComments = async () => {
    return fetchData(`${apiUrl}/homepageComment`, { cache: "no-store" });
};

export const getProductById = async (id) => {
    const products = await getProducts();
    return products.find((product) => product.id.toString() === id);
};

export const getProductsForCategory = async (style) => {
    const products = await getProducts();
    return products.filter((product) => product.style === style);
};

export const postProductComment = async (productId, comment) => {
    try {
        const product = await getProductById(productId);
        product.comments.push(comment);

        const response = await fetch(`${apiUrl}/clothesProduct/${productId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });

        if (!response.ok) {
            throw new Error("Failed to update product");
        }

        return await response.json();
    } catch (error) {
        console.error("Error posting comment:", error);
        throw new Error("Failed to post comment");
    }
};

export const saveUserToDatabase = async (user) => {
    const response = await fetch(`${apiUrl}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    if (!response.ok) {
        throw new Error("Failed to save user to the database");
    }

    return await response.json();
};

export const getUserData = async (email) => {
    const response = await fetch(`${apiUrl}/users?user_email=${email}`);
    const data = await response.json();
    return data[0];
};

export const updateUserBasket = async (email, newBasketItems) => {
    const userData = await getUserData(email);

    const newOrder = {
        orderDate: new Date().toISOString(),
        items: newBasketItems
    };

    const updatedBasket = [...userData.user_basket, newOrder];

    const response = await fetch(`${apiUrl}/users/${userData.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...userData,
            user_basket: updatedBasket,
        }),
    });

    return response.json();
};

export const getUsersInfo = async () => {
    const response = await fetch(`${apiUrl}/users`)
    const data = await response.json();
    return data;
}