import { Baloo_Chettan_2 } from "@next/font/google";
import { relative } from "path";
import { styled } from "../../../stitches.config";

export default styled('nav', {
  display: 'flex',
  'ul': {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  'li': {
    listStyle: 'none',
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    gap: '0.5rem',
    'a': {
      textDecoration: 'none',
      color: 'black',
      fontSize: '0.875rem'
    },
  },
  '.icone_user': {
    width: '30px',
    height: '30px',
    borderRadius: '999999px',
    backgroundColor: '$primary',
    overflow: "hidden",
    position: 'relative',
    'svg': {
      position: 'absolute',
      bottom: '0px',
      right: 'calc((30px - 24px) / 2)',
      marginTop: '8px',
      color: '#f6ebe5',
      width: '24px',
      height: '24px',
    }
  },
  '.triangle': {
    marginTop: '2px',
    width: 0,
    height: 0,
    borderWidth: "9px 5px 0 5px",
    borderColor: "$primary transparent transparent transparent",
    borderStyle: "solid",
    display: 'flex',
    alignItems: 'center',
  }
})