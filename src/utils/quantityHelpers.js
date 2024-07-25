export const increaseQuantity = (quantity) => {
    return quantity + 1;
};

export const decreaseQuantity = (quantity) => {
    return Math.max(quantity - 1, 1);
};
