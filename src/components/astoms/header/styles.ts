import { createStyles, Hidden, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    background: 'linear-gradient(to bottom, #081056, rgba(94, 34, 122, 0.92) 70%, rgba(191, 51, 135, 0.85))',
    marginBottom: '4rem',
    position: 'relative',
    '&::after': {
      position: 'absolute',
      content: '\'\'',
      top: '0',
      left: '50%',
      mixBlendMode: 'overlay',
      background: 'url(./assets/bg_header.png) center no-repeat',
      backgroundSize: 'cover',
      width: 993,
      height: 174,
      transform: 'translateX(-50%)'
    },
    '& .buttonConnect': {
      transition: 'all 0.2s ease',
      position: 'relative',
      padding: '1.25rem 0 0.75rem',
      cursor: 'pointer',
      zIndex: 1,
      '&:hover': {
        opacity: 0.8,
      },
      '@media screen and (max-width: 1340px)': {
        cursor: 'pointer',
        padding: '0.5rem 0 0',
        maxWidth: 125,
      }
    },
    '& .buttonText': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -52%)',
      fontSize: 28,
      display: 'inline-block',
      fontFamily: '\'Bebas Neue\', cursive',
      fontWeight: 400,
      '@media screen and (max-width: 1340px)': {
        fontSize: 20,
      }
    },
    '& .addressWallet': {
      padding: '2.6567rem 0',
    },
    '@media screen and (max-width: 1340px)': {
      marginBottom: '3rem',
      '&::after': {
        content: 'none',
        background: 'transparent',
      },
      '& .addressWallet': {
        padding: '1.217rem 0',
      },
    }
  },
  container: {
    maxWidth: 1305,
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '@media screen and (max-width: 1340px)': {
      padding: '0 3%',
      justifyContent: 'space-between',
    }
  },
  logo: {
    textAlign: 'center',
    marginTop: '-9rem',
    position: 'relative',
    marginBottom: '2rem',
    '@media screen and (max-width: 1340px)': {
      display: 'none'
    }
  },
  logoMobile: {
    // display: 'none',
    '@media screen and (max-width: 1340px)': {
      maxWidth: 90,
      display: 'block'
    }
  },
  text: {
    fontSize: 18,
    marginRight: '2vw',
    '@media screen and (max-width: 1340px)': {
      display: 'none'
    }
  },
}));

export default useStyles;