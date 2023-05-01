import {useEffect, useState} from "react";
import AdsTable from "./components/AdsTable";
import useAds from "./hook/adsHook";
import CreateDialog from "./components/create-dialog";

export default function Ads() {

    const [open, setOpen] = useState(false)
    const [data, getData, createData, loading] = useAds()

    useEffect(() => {
        getData()
    }, [])

    const toggleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
            {/*<CustomizedSnackbars severity={severity} message={message} onClose={clearData}/>*/}
            <CreateDialog open={open} handleClose={toggleOpen} createData={createData}/>
            <AdsTable data={data} loading={loading} toggleOpen={toggleOpen}/>

        </>
    )
}