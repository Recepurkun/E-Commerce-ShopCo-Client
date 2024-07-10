import Breadcrumb from '@/components/BreadCrumb';
import ProductList from '@/containers/Products/ProductList';
import { getProductsForCategory } from '@/services/api';
import { DetailsDivider } from '@/styles/GlobalStyled';
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';
import { getTranslations } from 'next-intl/server';
import { CategoryName, ShowingOf } from './Styled';
import { GiSettingsKnobs } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa";
import RangeSliderWithLabel from '@/components/RangeSliderWithLabel';
import FilterModalReal from '@/components/FilterModalReal';
import { FcAlphabeticalSortingAz } from "react-icons/fc";

const CategoryAndFilter = async ({ params }) => {
    const activeCategory = params.kategori
    const datas = await getProductsForCategory(activeCategory)
    const t = await getTranslations("CategoryAndFilter");

    const colors = ["green", "red", "yellow", "orange", " magenta", "blue", "purple", "pink", "white", "black"]
    const sizes = ["XX-Small", "X-Small", "Small", "Medium", " Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"]

    return (
        <div className='container'>
            <DetailsDivider />
            <Breadcrumb activeCategory={activeCategory} />
            <div className='d-flex flex-column flex-lg-row'>
                <div className='col-12 col-lg-2 flex-wrap align-content-between me-3_5'>
                    <div className='d-flex flex-column'>
                        <div className='border px-2 py-3'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h5 className='fw-bold'>{t("Filters")}</h5>
                                <FilterModalReal />
                            </div>
                            <DetailsDivider />
                            <div className='d-flex list-group list-group-flush'>
                                <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0"
                                    aria-current="true">
                                    {t("T-shirts")} <FaAngleRight className='ms-3' />
                                </a>
                                <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0">
                                    {t("Shorts")}
                                    <FaAngleRight className='ms-3' />
                                </a>
                                <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0">
                                    {t("Shirts")} <FaAngleRight className='ms-3' />
                                </a>
                                <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0">
                                    {t("Hoodie")} <FaAngleRight className='ms-3' />
                                </a>
                                <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0">
                                    {t("Jeans")} <FaAngleRight className='ms-3' />
                                </a>
                            </div>
                            <DetailsDivider />
                            <RangeSliderWithLabel />
                            <DetailsDivider />
                            <>
                                <h5 className='fw-bolder mb-3_5'>{t("Colors")}</h5>
                                <div className='d-flex flex-row flex-wrap w-100'>
                                    {colors.map((renk) =>
                                        <p
                                            className='rounded-pill me-2 mb-3'
                                            style={{ width: 30, height: 30, backgroundColor: `${renk}`, border: `1px solid black`, cursor: "pointer" }} >
                                        </p>
                                    )}
                                </div>
                            </>
                            <DetailsDivider />
                            <div>
                                <h5 className='fw-bold mb-3_5'>{t("Sizes")}</h5>
                                <div className='d-flex flex-row flex-wrap w-100'>
                                    {sizes.map((boy) =>
                                        <button
                                            className='rounded-pill me-1 mb-3'
                                            style={
                                                { maxWidth: 96, height: 39, backgroundColor: "#F0F0F0", cursor: "pointer", padding: "10px", color: "#000" }
                                            } >
                                            <h6 style={{ fontSize: 14 }}>{boy}</h6>
                                        </button>
                                    )}
                                </div>
                            </div>
                            <DetailsDivider />
                            <div className='d-flex list-group list-group-flush'>
                                <h5 className='fw-bold mb-3_5'>{t("DressStyle")}</h5>
                                <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0"
                                    aria-current="true">
                                    {t("Casual")} <FaAngleRight className='ms-3' />
                                </a>
                                <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0">
                                    {t("Formal")}
                                    <FaAngleRight className='ms-3' />
                                </a>
                                <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0">
                                    {t("Party")} <FaAngleRight className='ms-3' />
                                </a>
                                <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0">
                                    {t("Gym")} <FaAngleRight className='ms-3' />
                                </a>
                            </div>
                            <div className='d-flex justify-content-center mt-4 mb-2'>
                                <button className='btn w-100' style={{ borderRadius: 62, backgroundColor: "#000", color: "#fff", fontSize: 14, }}><h6 className="py-2">{t("ApplyFilter")}</h6></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-10'>
                    <div className='d-flex flex-row justify-content-between align-items-center mb-3 mx-md-3_5'>
                        <CategoryName>{capitalizeFirstLetter(activeCategory)}</CategoryName>
                        <div className='d-flex d-lg-none'><FilterModalReal /></div>

                        <div className='d-flex align-items-center'>
                            <ShowingOf className='me-2'>{t("Showing")}</ShowingOf>
                            <div className='d-flex'>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#filterCollapse" aria-controls="filterCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon d-flex d-md-none"><GiSettingsKnobs /></span>
                                </button>
                                <div className='collapse navbar-collapse d-md-flex' id="filterCollapse">
                                    <p className='mx-2 w-50 d-md-block'>{t("Sort")}</p>
                                    <select className='fw-bolder form-select'>
                                        <option value="Most Popular">{t("MostPopular")}</option>
                                        <option value="Rating">{t("Rating")}</option>
                                        <option value="Price">{t("Price")}</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <ProductList products={datas} showAll={true} />
                    <DetailsDivider />
                    <nav aria-label="Page navigation for products" className='pt-3' >
                        <ul className="pagination justify-content-between">
                            <li className="page-item justify-content-start ">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo; {t("Previous")}</span>
                                </a>
                            </li>
                            <div className='d-flex'>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">...</a></li>
                                <li className="page-item"><a className="page-link" href="#">8</a></li>
                                <li className="page-item"><a className="page-link" href="#">9</a></li>
                                <li className="page-item"><a className="page-link" href="#">10</a></li>
                            </div>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">{t("Next")} &raquo; </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default CategoryAndFilter