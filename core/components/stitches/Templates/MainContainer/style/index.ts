import { styled } from "@stitches/react"

export const MainSection = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: 'auto',
  '>:nth-child(1)': {
    paddingLeft: '120px',
    paddingRight: '120px',
    maxWidth: "1440px",
    width: '100%',    
  }
})