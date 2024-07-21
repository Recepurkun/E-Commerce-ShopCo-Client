import { getTranslations } from "next-intl/server";
import { getProductsForCategory } from "@/services/api";
import Breadcrumb from "@/components/CustomBreadcrumb/Breadcrumb";
import FilterWrapper from "@/components/Filter/FilterWrapper";
import FilterModal from "@/components/Filter/FilterModal";
import SortProducts from "@/components/Filter/SortProducts";
import FilterAndSortProducts from "@/components/Filter/FilterAndSortProducts";

import { DetailsDivider } from "@/styles/GlobalStyled";

const CategoryAndFilter = async ({ params, searchParams }) => {
    const activeCategory = params.kategori;
    const products = await getProductsForCategory(activeCategory);
    const t = await getTranslations("CategoryAndFilter");

    const minPrice = parseFloat(searchParams.price_gte) || 0;
    const maxPrice = parseFloat(searchParams.price_lte) || 1000;

    const filteredProducts = products.filter(product => {
        const price = product.discount && product.discount.available
            ? product.discount.discount_price
            : product.price;

        return price >= minPrice && price <= maxPrice;
    });

    const filters = {
        categories: searchParams.categories ? searchParams.categories.split(",") : [],
        colors: searchParams.colors ? searchParams.colors.split(",") : [],
        sizes: searchParams.sizes ? searchParams.sizes.split(",").map(size => size.toLowerCase()) : [],
        dressStyles: searchParams.dressStyles ? searchParams.dressStyles.split(",") : [],
    };

    const sortOption = searchParams.sortOption || "Most Popular";

    return (
        <div className="container">
            <DetailsDivider />
            <Breadcrumb activeCategory={activeCategory} />
            <div className="d-flex flex-column flex-lg-row">
                <div className="d-lg-flex col-lg-2 flex-wrap align-content-between me-md-3_5">
                    <div className="d-flex flex-column">
                        <div className="border rounded-4 px-3 py-3 my-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="fw-bold">{t("Filters")}</h5>
                                <FilterModal filters={filters} />
                            </div>
                            <div className="d-none d-lg-block">
                                <div className="d-flex list-group list-group-flush">
                                    <DetailsDivider />
                                    <FilterWrapper
                                        filters={filters}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-10">
                    <SortProducts
                        products={filteredProducts}
                        defaultSort={sortOption}
                        activeCategory={activeCategory}
                    />
                    <DetailsDivider />
                    <FilterAndSortProducts
                        products={filteredProducts}
                        filters={filters}
                        sortOption={sortOption}
                    />
                    <DetailsDivider />
                </div>
            </div>
        </div>
    );
};

export default CategoryAndFilter;