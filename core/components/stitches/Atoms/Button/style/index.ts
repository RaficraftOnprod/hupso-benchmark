import { styled } from "../../../stitches.config";


export const Buttons = styled('button', {
  // Mini reset
  appearance: 'none',
  border: 'none',

  
  fontWeight: 'bold',
  variants: {
    variant: {
      primary: {
        backgroundColor: "$primary",
        color: 'white',
      },   
      violet: {
        backgroundColor: "$violet",
        color: 'white',
      },         
    },
    outlined: {
      true: {
        backgroundColor: 'white',
        border: '1px solid',
      }
    },
    disabled: {
      true: {
        cursor: 'not-allowed'
      }
    },
    size: {      
      sm: {
        padding: '1rem 1rem',
      },
      xl: {
        padding: '1.5rem 3rem',
      }
    },
    radius: {
      sm:{
        borderRadius: '5px',
    },
      xl: {
        borderRadius: '1.25rem',
      },
    },
  },
  compoundVariants: [{
    variant: 'violet',
    outlined: true,
    css: {
      borderColor: '$violet',
      backgroundColor: 'white',
      color: '$violet'
    }
  },
  {
    variant: 'primary',
    outlined: true,
    css: {
      borderColor: '$primary',
      backgroundColor: 'white',
      color: '$primary'
    }
  }],
})