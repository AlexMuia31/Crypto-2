import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const Header = () => {
    return (
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography>
                        CryptoRank2
                    </Typography>
                    <Select>
                        <MenuItem>USD</MenuItem>
                        <MenuItem>Ksh</MenuItem>
                    </Select>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
