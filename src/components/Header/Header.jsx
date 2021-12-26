import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './HeaderStyles'
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../../CryptoContext';


const Header = () => {
    const classes = useStyles()
    const navigate = useNavigate()

    const { currency, setCurrency } = CryptoState()
    console.log(currency)
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            type: 'dark',
        }
    })


    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <Typography onClick={() => navigate('/')}
                            className={classes.title}
                            variant='h6'
                        >
                            CryptoRank2
                        </Typography>
                        <Select
                            variant='outlined'
                            style={{
                                width: 100,
                                height: 40,
                                marginRight: 15,
                            }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={currency}

                            defaultValue={'JPY'}
                            onChange={(e) => setCurrency(e.target.value)}

                        >

                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"JPY"}>JPY</MenuItem>
                        </Select>

                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header
