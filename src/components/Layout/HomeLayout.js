import { Box } from '@material-ui/core';
import React from 'react'
import NavBar from './NavbarHome';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {},
});
export default function HomeLayout(props) {
    const classes = useStyles(props);
    let { children } = props;
    return (
        <>
            <header>
                <Box className={classes.root}>
                    <NavBar />
                    {children}
                </Box>
            </header>
        </>
    )
}
