import React, {useState} from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from '@mui/material/Dialog';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import {DialogActions, DialogContent} from "@mui/material";
import {textFieldHoverAndPadding} from "../../styles/adsStyles";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function CreateDialog({open, handleClose, createData}) {

    const [values, setValues] = useState({
        product_name: "",
        product_description: "",
        contact_phone: "",
        product_price: "",
        product_status: ""
    })


    const disabled = !Boolean(values.product_name)

    const handleChange = (e) => {
        setValues({...values, [e.target.id]: e.target.value})
    }

    const handleSubmit = () => {
        createData(values)
        setValues({
            product_name: "",
            product_description: "",
            contact_phone: "",
            product_price: "",
            product_status: ""
        })
        handleClose()
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <div style={{paddingLeft: '20px', paddingTop: '25px', paddingRight: '25px', width: '600px'}}>
                <DialogTitle>Размещение объявления</DialogTitle>
            </div>
            <DialogContent>
                <div style={{display: 'grid'}}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {m: 1},
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <TextField sx={textFieldHoverAndPadding}
                                   id="product_name"
                                   required
                                   label="Наименование продукта"
                                   value={values.product_name}
                                   onChange={handleChange}
                                   fullWidth
                                   type="text"/>

                        <TextField sx={textFieldHoverAndPadding}
                                   id="product_status"
                                   required
                                   label="Статус"
                                   value={values.product_status}
                                   onChange={handleChange}
                                   fullWidth
                                   type="text"/>

                        <TextField sx={textFieldHoverAndPadding}
                                   id="product_description"
                                   required
                                   label="Описание"
                                   value={values.product_description}
                                   onChange={handleChange}
                                   fullWidth
                                   type="text"/>

                        <TextField sx={textFieldHoverAndPadding}
                                   id="contact_phone"
                                   required
                                   label="Контактный номер"
                                   value={values.contact_phone}
                                   onChange={handleChange}
                                   fullWidth
                                   type="text"/>

                        <TextField sx={textFieldHoverAndPadding}
                                   id="product_price"
                                   required
                                   label="Цена"
                                   value={values.product_price}
                                   onChange={handleChange}
                                   fullWidth
                                   type="text"/>

                        <div style={{paddingBottom: '25px'}}>
                            <DialogActions>
                                <Button size="large" disabled={disabled} variant="outlined" fullWidth
                                        startIcon={<SaveRoundedIcon/>} onClick={handleSubmit}>
                                    Сохранить
                                </Button>
                                <Button size="large" variant="text" color="error" fullWidth
                                        startIcon={<CloseRoundedIcon/>} onClick={handleClose}>
                                    Отмена
                                </Button>
                            </DialogActions>
                        </div>
                    </Box>
                </div>
            </DialogContent>
        </Dialog>
    )
}