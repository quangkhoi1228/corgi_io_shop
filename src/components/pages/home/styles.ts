import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {},
  container: {
    maxWidth: 1305,
    width: '100%',
    margin: '0 auto',
    '@media screen and (max-width: 1305px)': {
      padding: '0 3%',
      maxWidth: 973,
      margin: '0 auto',
    }
  },
  tableInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media screen and (max-width: 1305px)': {
      display: 'block',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      overflow: 'hidden',
    }
  },
  tableInforItem: {
    width: '33.33%',
    textAlign: 'center',
    '@media screen and (max-width: 1305px)': {
      width: '100%',
    }
  },
  tableItemTitle: {
    background: 'rgba(89, 97, 172, 0.6)',
    borderWidth: '1px 1px 0 1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    fontSize: 36,
    fontFamily: '\'Bebas Neue\', cursive',
    fontWeight: 400,
    padding: '0.5rem 0 0.15rem',
    '@media screen and (max-width: 1305px)': {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      fontSize: 22,
      padding: '0.6rem 0 0.5rem',
    }
  },
  tableItemContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& li': {
      fontSize: 14,
      padding: '0.75rem 0.5rem 0.5rem',
      background: 'rgba(0, 0, 0, 0.6)',
      border: '1px solid #4F4F4F',
      width: '33.33%',
      '& span': {
        display: 'block',
        fontSize: 24,
        '@media screen and (max-width: 1305px)': {
          fontSize: 14,
        }
      },
    },
    '@media screen and (max-width: 1305px)': {
      '& li': {
        fontSize: 10,
        border: 0,
        padding: '0.6rem',
        lineHeight: '1.1rem'
      }
    }
  },
  listButton: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 973,
    margin: '3rem 0 1.5rem',
    '@media screen and (max-width: 1305px)': {
      display: 'block',
      justifyContent: 'space-between',
      maxWidth: 350,
      margin: '2rem auto 1.5rem',
    }
  },
  listCategory: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& li': {
      width: 160,
      position: 'relative',
      cursor: 'pointer',
      marginRight: '0.5rem',
      '& span': {
        position: 'absolute',
        top: '50%',
        fontSize: 26,
        left: '50%',
        transform: 'translate(-50%, -53%)',
        fontFamily: '\'Bebas Neue\', cursive',
        fontWeight: 400,
        paddingBottom: '5px'
      },
      '@media screen and (max-width: 1305px)': {
        margin: 0,
        width: '50%',
        '& span': {
          fontSize: 22,
        }
      }
    },
    '@media screen and (max-width: 1305px)': {
      flexWrap: 'wrap',
    }
  },

  listSort: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '2px solid #64368F',
    borderRadius: 15,
    margin: '0 0 0.75rem',
    background: '#000',
    maxWidth: 290,
    width: '100%',
    '& li': {
      fontSize: 14,
      padding: '0 1rem',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40%',
      '&:last-child': {
        cursor: 'pointer',
        borderLeft: '1px solid #64368f',
        width: '60%',
      },
      '& svg': {
        marginLeft: '0.5rem',
      }
    },
    '@media screen and (max-width: 1305px)': {
      borderRadius: 10,
      maxWidth: '100%',
      '& li': {
        fontSize: 16,
        padding: '1rem',
        minWidth: 0,
        width: '50%',
        '&:last-child': {
          width: '50% !important',
        }
      },
    }
  },


  content: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media screen and (max-width: 1310px)': {
      flexDirection: 'column',
      justifyContent: 'space-between',
    }
  },
  contentLeft: {
    maxWidth: 973,
    width: '100%',
    '@media screen and (max-width: 1310px)': {
      maxWidth: '100%',
    }
  },

  listItem: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    '@media screen and (max-width: 1310px)': {
      gap: '0.5rem 0.75rem',
      justifyContent: 'center',
    }
  },
  listItemInfor: {
    width: '23.5%',
    position: 'relative',
    transition: 'all 0.2s ease',
    marginRight: '1.2rem',
    overflow: 'hidden',
    '&:nth-child(4n + 4)': {
      marginRight: '0',
    },
    '&:nth-child(n + 5)': {
      marginTop: '1.5%'
    },
    '& .detail': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 1,
      display: 'inline-block',
    },
    '&:hover': {
      opacity: 0.7,
    },

    '@media screen and (max-width: 1310px)': {
      marginRight: '0 !important',
      marginTop: '0 !important',
      width: 170,
    }
  },
  itemBackGround: {
    '& img': {
      width: '100%',
    }
  },
  itemContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  itemClassAndLevel: {
    position: 'absolute',
    top: '0.75rem',
    left: '0.75rem',
    maxWidth: 40,
    '@media screen and (max-width: 1310px)': {
      top: '0.5rem',
      left: '0.5rem',
      maxWidth: 25,
    }
  },
  itemClass: {},
  itemlevel: {
    position: 'relative',
    marginTop: '0.25rem',
    '& span': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -63%)',
      fontSize: 24,

      '@media screen and (max-width: 1310px)': {
        fontSize: 14,
      }
    }
  },
  itemID: {
    fontSize: 18,
    background: '#000',
    padding: '0.25rem 1rem',
    position: 'absolute',
    top: '0.75rem',
    right: '0.75rem',
    borderRadius: 10,
    '@media screen and (max-width: 1310px)': {
      fontSize: 12,
      padding: '0.25rem 0.75rem',
      top: '0.5rem',
      right: '0.5rem',
      borderRadius: 5,
    }
  },
  itemFocusItem: {
    marginTop: 'auto',
    maxWidth: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    width: '100%',
    height: '150px',
    '&.short': {
      maxWidth: '75%',
    },
    '@media screen and (max-width: 1310px)': {
      maxWidth: '100%',
    }
  },
  itemCricle: {},
  itemImage: {
    position: 'absolute',
    bottom: '10%',
    left: '50%',
    textAlign: 'center',
    transform: 'translateX(-50%)',
    width: '100%',
    maxWidth: '90%',
    margin: '0 auto',
    '& img': {
      maxHeight: 150,
    },
    '@media screen and (max-width: 1310px)': {
      '& img': {
        maxHeight: 125,
      },
    }
  },
  itemDescription: {
    width: '100%',
    textAlign: 'center',
    paddingBottom: 2,
    marginTop: '0.25rem',
    '&.noclass': {
      marginTop: '2.25rem',
    },
  },
  itemDesStar: {
    display: 'flex',
    justifyContent: 'center',
    '@media screen and (max-width: 1310px)': {
      '& li': {
        maxWidth: 14,
      },
    }
  },
  itemDesPrice: {
    fontSize: 24,
    '& span': {
      color: '#FFA800',
      marginLeft: '0.5rem',
    },
    '@media screen and (max-width: 1310px)': {
      fontSize: 12,
    }
  },
  itemDesName: {
    '& a': {
      display: 'inline-block',
      position: 'relative',
      zIndex: '100',
      marginLeft: '0.5rem',
    },
    '@media screen and (max-width: 1310px)': {
      fontSize: 12,
    }
  },

  pagination: {
    marginTop: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .pagiItem': {
      width: 45,
      height: 45,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#0D85B7',
      background: '#000',
      borderRadius: '50%',
      border: '1px solid #0D85B7',
      margin: '0 0.5rem',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      '&.current, &:hover, &:hover path': {
        background: '#3AAFEF',
        color: '#fff',
        stroke: '#fff',
      }
    },
    '& .lineBreak': {
      display: 'none',
    },
    '@media screen and (max-width: 1310px)': {
      marginTop: '1.5rem',
      marginBottom: '3rem',
      flexWrap: 'wrap',
      '& li': {
        marginBottom: '0.5rem',
      },
      '& .pagiItem': {
        width: 35,
        height: 35,
        fontSize: 14,
        margin: '0 0.3rem',
      },
      '& svg': {
        maxWidth: 12,
      },
    },
    '@media screen and (max-width: 425px)': {
      '& .lineBreak': {
        display: 'block',
        width: '100%',
        margin: 0,
      },
    },
  },

  contentRight: {
    maxWidth: 291,
    '@media screen and (max-width: 1310px)': {
      maxWidth: '100%',
      marginBottom: '2rem',
    }
  },

  filterInput: {
    marginBottom: '2rem',
    maxWidth: '100%',
    background: '#000',
    border: '1px solid #0D85B7',
    borderRadius: 15,
    fontSize: 24,
    padding: '1rem',
    outline: 'none',
    color: '#fff',
    fontWeight: 700,
    '&::placeholder': {
      fontSize: 24,
      color: '#fff',
      fontWeight: 700,
    },
    '@media screen and (max-width: 1310px)': {
      marginBottom: '1rem',
      borderRadius: 8,
      fontSize: 14,
      padding: '0.5rem 0.5rem',
      '&::placeholder': {
        fontSize: 14,
      },
    }
  },
  filterLine: {
    '@media screen and (max-width: 1310px)': {
      maxWidth: 240,
    }
  },
  filterTitle: {
    fontSize: 36,
    fontFamily: '\'Bebas Neue\', cursive',
    fontWeight: 400,
    marginBottom: '1rem',
    '@media screen and (max-width: 1310px)': {
      fontSize: 24,
      marginBottom: '1rem',
    }
  },
  filterRating: {
    display: 'flex',
    cursor: 'pointer',
    '& li': {
      fontSize: 18,
      position: 'relative',
      padding: '0 0.4rem',
      '& span': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'inline-block',
      },
      '&::after': {
        position: 'absolute',
        content: 'none',
        background: 'url(./assets/bg_rating.png) center no-repeat',
        backgroundSize: 'cover',
        width: 64,
        height: 81,
        top: '-28%',
        left: '-12%',
        zIndex: -1,
      },
      '&:not(.active):hover, &.active::after': {
        content: '\'\'',
      },
      '@media screen and (max-width: 1310px)': {
        maxWidth: 40,
        fontSize: 14,
        '&::after': {
          width: 55,
          height: 50,
        }
      }
    },

  },
  filterClass: {
    display: 'flex',
    flexWrap: 'wrap',
    '& li': {
      fontSize: 18,
      alignItems: 'center',
      display: 'flex',
      width: '50%',
      marginBottom: '2rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      opacity: 0.6,
      '& span': {
        width: 45,
        display: 'block',
        marginRight: '1rem',
        '& img': {
          display: 'inline-flex',
        },
      },
      '&:not(.active):hover, &.active': {
        opacity: 1
      },
      '@media screen and (max-width: 1310px)': {
        width: 170,
        fontSize: 14,
        marginBottom: '0.5rem',
        '& span': {
          width: 30,
          marginRight: '0.5rem',
        },
      }
    },
    '@media screen and (max-width: 1310px)': {
      width: '100%',
      marginBottom: '0.5rem',
    }
  },
  filterButton: {
    position: 'relative',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '& span': {
      position: 'absolute',
      top: '50%',
      fontSize: 28,
      left: '50%',
      transform: 'translate(-50%, -53%)',
      paddingBottom: '5px'
    },
    '&:hover': {
      opacity: 0.7,
    },
    '@media screen and (max-width: 1310px)': {
      width: 200,
      margin: '0 auto',
      '& span': {
        fontSize: 18,
      },
    }
  },
  filterRange: {
    margin: '2rem 0',
    '& ul': {
      marginTop: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 18,
    },
    '& .MuiSlider-rail': {
      height: 5,
      opacity: 1,
      borderRadius: 3,
      background: 'linear-gradient(to right, #0D85B7, #00FF38, #0D85B7)',
    },
    '& .MuiSlider-track': {
      background: 'transparent',
      height: 5,
    },
    '& .MuiSlider-thumb': {
      width: 30,
      height: 30,
      marginTop: -13,
      backgroundColor: '#fff',
    },
    '@media screen and (max-width: 1310px)': {
      margin: '0.5rem 0 1.5rem',
      '& ul': {
        marginTop: '0.25rem',
        fontSize: 14,
      },
    }
  }
}));

export default useStyles;