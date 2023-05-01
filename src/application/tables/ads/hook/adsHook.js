import {useState} from "react";
import customAxios from "../../../../ApiInterceptor";

export default function useAds() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const getData = async () => {
        setLoading(true)
        const response = await customAxios.get('api/products')
        const json = await response.data;
        setData(json);
        setLoading(false)
    }

    const createData = async (data) => {
        await customAxios.post("api/products",
            {
                product_name: data.product_name,
                product_description: data.product_description,
                contact_phone: data.contact_phone,
                product_price: data.product_price,
                product_status: data.product_status
            },
            getData()
        )
    }

    return [data, getData, createData, loading]
}