import React from "react";
import {Route, Routes,} from "react-router-dom";
import AdsTable from "../tables/ads/index";
import Box from "@mui/material/Box";

export default function Router() {
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
            <Routes>
                <Route path='/advertisement' element={<AdsTable/>}/>
            </Routes>
        </Box>
    );
}