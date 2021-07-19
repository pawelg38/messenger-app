import classes from './Layout.module.scss';
import Box from '@material-ui/core/Box';

function Layout(props) {
  return (
    <Box className={classes.container} boxShadow={5}>
      {props.children}
    </Box>
  )
}

export default Layout;