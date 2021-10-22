import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {},
  container: {
    maxWidth: 1305,
    width: '100%',
    margin: '0 auto',
    '@media screen and (max-width: 1305px)': {
      padding: '0 3%',
      maxWidth: 640,
    }
  },
  detail: {
    marginTop: '4rem',
    display: 'flex',
    '@media screen and (max-width: 1305px)': {
      marginTop: '2rem',
      display: 'block',
    }
  },
  detLeft: {
    marginRight: '5rem',
    '@media screen and (max-width: 1305px)': {
      margin: '0 0 2rem',
    }
  },
  detID: {
    textAlign: 'center',
    marginBottom: '8rem',
    fontSize: 36,
    '@media screen and (max-width: 1305px)': {
      marginBottom: '5rem',
      fontSize: 20,
    }
  },
  detImage: {
    textAlign: 'center',
    position: 'relative',
    width: 530,
    height: 408,
    '@media screen and (max-width: 1305px)': {
      maxWidth: 200,
      height: 156,
      margin: '0 auto',
    }
  },
  detItem: {
    position: 'absolute',
    bottom: '15%',
    left: 0,
    right: 0,
    // maxWidth: 360,
    margin: '0 auto',
    zIndex: 1,
    '& img': {
      maxHeight: 400,
    },
    '@media screen and (max-width: 1305px)': {
      '& img': {
        maxHeight: 200,
      },
    }

  },
  detRight: {
    maxWidth: 600,
  },
  detText: {
    fontSize: 18,
    marginBottom: '0',
    '& a': {
      textTransform: 'uppercase'
    },
    '@media screen and (max-width: 1305px)': {
      fontSize: 16,
      marginBottom: '1rem'
    }
  },
  detTitle: {
    fontSize: 24,
    '@media screen and (max-width: 1305px)': {
      fontSize: 16,
      marginTop: '0.5rem'
    }
  },
  detRating: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      margin: '0 0.25rem',
      display: 'inline-block',
      '@media screen and (max-width: 1305px)': {
        margin: '0 0.125rem',
        maxWidth: 14,
        display: 'flex',
      }
    },
  },
  detInfo: {
    marginTop: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    '& li': {
      minWidth: '28%',
      '&:nth-child(n + 4)': {
        marginTop: '3.5rem',
      },
      '@media screen and (max-width: 1305px)': {
        minWidth: '48%',
        fontSize: 12,
        '&:nth-child(n + 4)': {
          marginTop: '0',
        },
        '&:nth-child(n + 3)': {
          marginTop: '1rem',
        },
      }
    },
    '@media screen and (max-width: 1305px)': {
      marginBottom: '1rem',
      marginTop: '1rem',
    }
  },
  detPrice: {
    marginTop: '1.5rem',
    marginBottom: '2rem',
    color: '#FFA800',
    fontSize: 36,
    '@media screen and (max-width: 1305px)': {
      marginTop: '1rem',
      marginBottom: '1rem',
      fontSize: 24,
    }
  },
  detButton: {
    position: 'relative',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    width: 'fit-content',
    '& span': {
      position: 'absolute',
      top: '50%',
      fontSize: 32,
      left: '50%',
      transform: 'translate(-50%, -50%)',
      paddingBottom: '6px',
      fontFamily: '\'Bebas Neue\', cursive',
      fontWeight: 400,
    },
    '&:hover': {
      opacity: 0.7,
    },
    '@media screen and (max-width: 1305px)': {
      width: 180,
      '& span': {
        fontSize: 22,
      },
    }
  },
  trading: {
    marginTop: '4rem',
    marginBottom: '1rem',
    '@media screen and (max-width: 1305px)': {
      marginTop: '2rem',
    }
  },
  tradingTitle: {
    fontSize: 36,
    marginBottom: '1rem',
    fontFamily: '\'Bebas Neue\', cursive',
    fontWeight: 400,
    '@media screen and (max-width: 1305px)': {
      fontSize: 24,
    }
  },
  tradingTable: {
    '@media screen and (max-width: 1305px)': {
      display: 'none',
    }
  },
  traddingListLable: {
    fontSize: 24,
    textAlign: 'center',
    display: 'flex',
    background: 'rgba(100, 54, 143, 0.75)',
    borderBottom: '1px solid #171B42',
    justifyContent: 'space-between',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    '& li': {
      padding: '1rem',
      '&:nth-child(1)': {
        width: '30%'
      },
      '&:nth-child(2)': {
        width: '20%'
      },
      '&:nth-child(3)': {
        width: '20%'
      },
      '&:nth-child(4)': {
        width: '15%'
      },
      '&:nth-child(5)': {
        width: '15%'
      }
    }
  },
  traddingListContent: {
    '& li': {
      fontSize: 24,
      textAlign: 'center',
      display: 'flex',
      background: 'rgba(68, 106, 152, 0.36)',
      justifyContent: 'space-between',
      '& span': {
        border: '1px solid #171B42',
        padding: '1rem',
        '&:nth-child(1)': {
          width: '30%',
          borderLeft: 0,
        },
        '&:nth-child(2)': {
          width: '20%'
        },
        '&:nth-child(3)': {
          width: '20%'
        },
        '&:nth-child(4)': {
          width: '15%'
        },
        '&:nth-child(5)': {
          width: '15%',
          borderRight: 0,
        }
      }
    }
  }
}));

export default useStyles;