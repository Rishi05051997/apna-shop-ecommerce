export const getSortedProducts = (originalData, sortBy) => {
    const productList = [...originalData];
    if (sortBy && sortBy === "HIGH_TO_LOW") {
        return productList.sort((a, b) => b.finalPrice - a.finalPrice);
    }
    if (sortBy && sortBy === "LOW_TO_HIGH") {
        return productList.sort((a, b) => a.finalPrice - b.finalPrice);
    }
    return productList;
};

export const getFilteredProducts = (
    productData,
    isInStock,
    isFastDelivery,
    maxRange,
    cotton,
    tericot,
    rating,
    searchValue,
    brandFilter,
    categoryFilter
) => {
    if (cotton && tericot) return productData;
    if (isInStock && isFastDelivery) return productData;
    productData = productData.filter((product) => (isInStock ? product.inStock : true))
        .filter((product) => (isFastDelivery ? product.fastDelivery : true))
        .filter((product) => (cotton ? product.cotton : true))
        .filter((product) => (tericot ? product.tericot : true))
        .filter((product) => Number(product.finalPrice) <= maxRange)

        .filter(
            (product) =>
                product.productName.toLowerCase().includes(searchValue) ||
                product.description.toLowerCase().includes(searchValue) ||
                product.categoryName.toLowerCase().includes(searchValue)
        );
    if (rating) {
        return productData.filter((product) => rating >= product.rating);
    }
    return productData;
};
