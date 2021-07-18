import classes from './Layout.module.scss';
import Box from '@material-ui/core/Box';

function Layout(props) {
  return (
    <Box className={classes.container} boxShadow={1}>
      {props.children}
      cos tam
    </Box>
  )
}

export default Layout;