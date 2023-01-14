import { Baloo_Chettan_2 } from "@next/font/google";
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
      color: 'black'
    },
  },  
  '.triangle': {
    marginTop: '2px',
    width: 0,
    height: 0,
    borderWidth: "10px 6px 0 6px",
    borderColor: "$primary transparent transparent transparent",
    borderStyle: "solid",
    display: 'flex',
    alignItems: 'center',
  }
})