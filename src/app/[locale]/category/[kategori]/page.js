// import Breadcrumb from '@/components/BreadCrumb';
// import ProductList from '@/containers/Products/ProductList';
// import { getProductsForCategory } from '@/services/api';
// import { DetailsDivider } from '@/styles/GlobalStyled';
// import { getTranslations } from 'next-intl/server';
// import { FaAngleRight } from "react-icons/fa";
// import RangeSliderWithLabel from '@/components/RangeSliderWithLabel';
// import FilterModalReal from '@/components/FilterModalReal';
// import { FcAlphabeticalSortingAz } from "react-icons/fc";
// import SortProducts from './SortProducts';
// import ColorPicker from './ColorPicker';
// import SizePicker from './SizePicker';
// import ListGroupComponent from './ListGroupComponent';

// const CategoryAndFilter = async ({ params }) => {
//     const activeCategory = params.kategori
//     const datas = await getProductsForCategory(activeCategory)
//     const t = await getTranslations("CategoryAndFilter");

//     const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
//     const dressStyles = ["Casual", "Formal", "Party", "Gym"];
//     const colors = ["green", "red", "yellow", "orange", " magenta", "blue", "purple", "pink", "white", "black"]
//     const sizes = ["XX-Small", "X-Small", "Small", "Medium", " Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"]

//     return (
//         <div className='container'>
//             <DetailsDivider />
//             <Breadcrumb activeCategory={activeCategory} cartPage='false' />
//             <div className='d-flex flex-column flex-lg-row'>
//                 <div className='d-lg-flex col-lg-2 flex-wrap align-content-between me-md-3_5'>
//                     <div className='d-flex flex-column'>
//                         <div className='border px-2 py-3 my-2'>
//                             <div className='d-flex justify-content-between align-items-center'>
//                                 <h5 className='fw-bold'>{t("Filters")}</h5>
//                                 <FilterModalReal />
//                             </div>
//                             <div className='d-none d-lg-block'>
//                                 <div className='d-flex list-group list-group-flush'>
//                                     <DetailsDivider />
//                                     {/* <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0"
//                                         aria-current="true">
//                                         {t("T-shirts")} <FaAngleRight className='ms-3' />
//                                     </a>
//                                     <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0">
//                                         {t("Shorts")}
//                                         <FaAngleRight className='ms-3' />
//                                     </a>
//                                     <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0">
//                                         {t("Shirts")} <FaAngleRight className='ms-3' />
//                                     </a>
//                                     <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0">
//                                         {t("Hoodie")} <FaAngleRight className='ms-3' />
//                                     </a>
//                                     <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0">
//                                         {t("Jeans")} <FaAngleRight className='ms-3' />
//                                     </a> */}
//                                     <ListGroupComponent items={categories} t={t} />
//                                 </div>
//                                 <DetailsDivider />
//                                 <RangeSliderWithLabel />
//                                 <DetailsDivider />
//                                 <>
//                                     <h5 className='fw-bolder mb-3_5'>{t("Colors")}</h5>
//                                     {/* <div className='d-flex flex-row flex-wrap w-100'>
//                                         {colors.map((renk) =>
//                                             <p
//                                                 className='rounded-pill me-2 mb-3'
//                                                 style={{ width: 30, height: 30, backgroundColor: `${renk}`, border: `1px solid black`, cursor: "pointer" }} >
//                                             </p>
//                                         )}
//                                     </div> */}
//                                     <ColorPicker colors={colors} />
//                                 </>
//                                 <DetailsDivider />
//                                 <div>
//                                     <h5 className='fw-bold mb-3_5'>{t("Sizes")}</h5>
//                                     {/* <div className='d-flex flex-row flex-wrap w-100'>
//                                         {sizes.map((boy) =>
//                                             <button
//                                                 className='rounded-pill me-1 mb-3'
//                                                 style={
//                                                     { maxWidth: 96, height: 39, backgroundColor: "#F0F0F0", cursor: "pointer", padding: "10px", color: "#000" }
//                                                 } >
//                                                 <h6 style={{ fontSize: 14 }}>{boy}</h6>
//                                             </button>
//                                         )}
//                                     </div> */}
//                                     <SizePicker sizes={sizes} />
//                                 </div>
//                                 <DetailsDivider />
//                                 <div className='d-flex list-group list-group-flush'>
//                                     <h5 className='fw-bold mb-3_5'>{t("DressStyle")}</h5>
//                                     {/* <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0"
//                                         aria-current="true">
//                                         {t("Casual")} <FaAngleRight className='ms-3' />
//                                     </a>
//                                     <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0">
//                                         {t("Formal")}
//                                         <FaAngleRight className='ms-3' />
//                                     </a>
//                                     <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0">
//                                         {t("Party")} <FaAngleRight className='ms-3' />
//                                     </a>
//                                     <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0">
//                                         {t("Gym")} <FaAngleRight className='ms-3' />
//                                     </a> */}
//                                     <ListGroupComponent items={dressStyles} t={t} />
//                                 </div>
//                                 <div className='d-flex justify-content-center mt-4 mb-2'>
//                                     <button className='btn w-100' style={{ borderRadius: 62, backgroundColor: "#000", color: "#fff", fontSize: 14, }}><h6 className="py-2">{t("ApplyFilter")}</h6></button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='col-12 col-lg-10'>
//                     <SortProducts products={datas} defaultSort="Most Popular" activeCategory={activeCategory} />
//                     <DetailsDivider />
//                     <nav aria-label="Page navigation for products" className='pt-3' >
//                         <ul className="pagination justify-content-between">
//                             <li className="page-item justify-content-start ">
//                                 <a className="page-link" href="#" aria-label="Previous">
//                                     <span aria-hidden="true">&laquo; {t("Previous")}</span>
//                                 </a>
//                             </li>
//                             <div className='d-flex'>
//                                 <li className="page-item"><a className="page-link" href="#">1</a></li>
//                                 <li className="page-item"><a className="page-link" href="#">2</a></li>
//                                 <li className="page-item"><a className="page-link" href="#">3</a></li>
//                                 <li className="page-item"><a className="page-link" href="#">...</a></li>
//                                 <li className="page-item"><a className="page-link" href="#">8</a></li>
//                                 <li className="page-item"><a className="page-link" href="#">9</a></li>
//                                 <li className="page-item"><a className="page-link" href="#">10</a></li>
//                             </div>
//                             <li className="page-item">
//                                 <a className="page-link" href="#" aria-label="Next">
//                                     <span aria-hidden="true">{t("Next")} &raquo; </span>
//                                 </a>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CategoryAndFilter

import { getTranslations } from "next-intl/server";
import { getProductsForCategory } from "@/services/api";
import Breadcrumb from "@/components/Breadcrumb";
import RangeSliderWithLabel from "@/components/RangeSliderWithLabel";

import { DetailsDivider } from "@/styles/GlobalStyled";

import FilterWrapper from "./FilterWrapper";
import FilterAndSortProducts from "./FilterAndSortProducts";
import SortProducts from "./SortProducts";
import FilterModalReal from "@/components/FilterModalReal";

const CategoryAndFilter = async ({ params, searchParams }) => {
    const activeCategory = params.kategori;
    const products = await getProductsForCategory(activeCategory);
    const t = await getTranslations("CategoryAndFilter");

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
                        <div className="border px-2 py-3 my-2">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="fw-bold">{t("Filters")}</h5>
                                {/* Filter modal can trigger client-side navigation with new filter parameters */}
                                {/* <FilterModalReal /> */}
                            </div>
                            <div className="d-none d-lg-block">
                                <div className="d-flex list-group list-group-flush">
                                    <DetailsDivider />
                                    <FilterWrapper
                                        filters={filters}
                                        RangeSliderWithLabel={RangeSliderWithLabel}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-10">
                    <SortProducts
                        products={products}
                        defaultSort={sortOption}
                        activeCategory={activeCategory}
                    />
                    <DetailsDivider />
                    <FilterAndSortProducts
                        products={products}
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