import CssBaseline from "@mui/material/CssBaseline";
import { styled } from '@mui/material/styles';
import { FC, ReactNode } from 'react';


type PropTypes = {
  children: ReactNode
}
const PREFIX = 'MyCard';
const classes = {
  root: `${PREFIX}-root`,
  content: `${PREFIX}-content`,
}
const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.light
  },
  [`& .${classes.content}`]: {
    color: theme.palette.common.white,
    fontSize: 16,
    lineHeight: 1.7,
  },
}))

const Layout: FC<PropTypes> = ({ children }): JSX.Element => {
  return (
    <Root className={classes.root}>
      <CssBaseline />
      <div className={classes.content}>
        {children}
      </div>
    </Root>
  );
}

export default Layout;
