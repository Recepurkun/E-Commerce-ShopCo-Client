import Charts from "@/components/DashboardCharts/Charts"
import { getProducts, getUsersInfo } from "@/services/api"

const DashboardPage = async () => {
    const usersInfo = await getUsersInfo()
    const allProducts = await getProducts()

    return (
        <Charts users={usersInfo} products={allProducts} />
    )
}

export default DashboardPage