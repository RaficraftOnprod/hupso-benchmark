import Link from "next/link"
import Nav from "./style"

const navigationData = [
  {
    label: 'Secteurs',
    submenu: [
      {
        href: '',
        label: 'Social'
      },
      {
        href: '',
        label: 'Paramédical'
      },
      {
        href: '',
        label: 'Commerce'
      },
      {
        href: '',
        label: 'Enseignement'
      }
    ]
  },
  {
    href: 'Entreprises/',
    label: 'entrerpises'
  },
  {
    label: 'Ressources',
    submenu: [
      {
        href: '',
        label: '',
      }
    ]
  },
  {
    href: 'A-propos/',
    label: 'A propos'
  },
]

const triangle = {
  width: 0,
  height: 0,
  borderWidth: "14px 6.5px 0 6.5px",
  borderColor: "#FF0000 transparent transparent transparent",
  borderStyle: "solid",
}

export default function Navigation() {
  return (
    <Nav>
      <ul>
        {
          navigationData.map((link, key) => {
            return (
              <li key={`navLink-${key}`}>
                <Link href={`${link.href}`}>
                  {link.label}
                </Link>
                {link.hasOwnProperty('submenu') && <span className="triangle" />}
              </li>
            )
          })
        }
      </ul>
    </Nav>
  )
}