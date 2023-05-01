import * as React from 'react';
import {DataGrid, ruRU} from '@mui/x-data-grid';
import {ruRU as ruRUCore} from '@mui/material/locale';
import LinearProgress from '@mui/material/LinearProgress';
import Box from "@mui/material/Box";
import {Button, createTheme, Grid, ThemeProvider} from "@mui/material";
import Typography from "@mui/material/Typography";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

export default function AdsTable({data, loading, toggleOpen}) {

    const theme = createTheme(
        {
            palette: {
                primary: {main: '#1976d2'},
            },
        },
        ruRU, // x-data-grid translations
        ruRUCore, // core translations
    );

    const columns = [
        {
            field: 'uuid',
            headerName: 'uuid',
            flex: 1
        },
        {
            field: 'product_id',
            headerName: 'product_id',
            flex: 1
        },
        {
            field: 'publish_date',
            headerName: 'Дата публикации',
            flex: 1
        },
        {
            field: 'product_name',
            headerName: 'Наименование',
            flex: 1
        },
        {
            field: 'product_description',
            headerName: 'Описание',
            flex: 1
        },
        {
            field: 'product_status',
            headerName: 'Статус',
            flex: 1
        },
        {
            field: 'contact_phone',
            headerName: 'Номер телефона',
            flex: 1
        },
        {
            field: 'product_price',
            headerName: 'Цена ₽',
            flex: 1
        }
    ]

    return (
        <Box sx={{
            height: 600,
            width: '100%',
            paddingTop: '90px'
        }}>
            <ThemeProvider theme={theme}>
                <Typography sx={{paddingBottom: '20px'}} variant="h4" gutterBottom>
                    Объявления
                </Typography>
                <DataGrid
                    slots={{
                        loadingOverlay: LinearProgress,
                    }}
                    loading={loading}
                    rows={data}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                        columns: {
                            columnVisibilityModel: {
                                uuid: false,
                                product_id: false,
                            },
                        }
                    }}
                    pageSizeOptions={[10]}
                    disableRowSelectionOnClick
                    getRowId={row => row.uuid}
                    checkboxSelection={false}
                />
            </ThemeProvider>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{paddingTop: '20px'}}
            >
                <Button variant="contained" startIcon={<AddCircleOutlineRoundedIcon/>} onClick={toggleOpen}>Разместить объявление</Button>
            </Grid>
        </Box>
    );
}