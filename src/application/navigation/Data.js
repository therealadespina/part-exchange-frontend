import Shop2RoundedIcon from '@mui/icons-material/Shop2Rounded';
import AttachEmailRoundedIcon from '@mui/icons-material/AttachEmailRounded';
import {pink} from "@mui/material/colors";
export const menuData = [
    {
        title: "Обьявления",
        icon: <Shop2RoundedIcon sx={{ color: pink[500] }}/>,
        link: "/advertisement"
    },
    {
        title: "Почта",
        icon: <AttachEmailRoundedIcon/>,
        link: "/mail"
    }
]