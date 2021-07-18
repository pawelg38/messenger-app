import classes from './Layout.module.scss';

function Layout(props) {
  return (
    <div className={classes.container}>
      Layout here...!
      {props.children}
    </div>
  )
}

export default Layout;