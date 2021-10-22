import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginTop: '4rem',
    textAlign: 'center',
  },
  footerBG: {
    position: 'relative',
    '& img': {
      width: '100%',
    }
  },
  container: {
    maxWidth: 1305,
    position: 'relative',
    width: '100%',
    margin: '0 auto',
    '@media screen and (max-width: 1340px)': {
      padding: '0 3%',
    }
  },
  content: {
    maxWidth: 973,
    position: 'absolute',
    bottom: '4rem',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media screen and (max-width: 1340px)': {
      position: 'static',
      paddingBottom: '4rem',
    }
  },
  footerLogo: {
    maxWidth: 215,
    '@media screen and (max-width: 1340px)': {
      display: 'none',
    }
  },
  footerContent: {
    marginLeft: '2rem',
    '@media screen and (max-width: 1340px)': {
      marginLeft: '0',
    }
  },
  fotterTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: '2rem',
    '@media screen and (max-width: 1340px)': {
      fontSize: 16,
      lineHeight: '1.4rem'
    }
  },
  footerButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& li': {
      position: 'relative',
      transition: 'all 0.2s ease',
      margin: '0 0.5rem',
      '& span': {
        position: 'absolute',
        top: '50%',
        fontSize: 26,
        left: '50%',
        width: '100%',
        textAlign: 'center',
        transform: 'translate(-50%, -53%)',
        paddingBottom: '5px',
        fontFamily: '\'Bebas Neue\', cursive',
        fontWeight: 400,
      },
      '&:hover': {
        opacity: 0.7,
      },
      '@media screen and (max-width: 1340px)': {
        padding: '0 3%',
        '& span': {
          fontSize: 22,
        },
      }
    },
    '@media screen and (max-width: 1340px)': {
      display: 'block',
    }
  },
}));

export default useStyles;