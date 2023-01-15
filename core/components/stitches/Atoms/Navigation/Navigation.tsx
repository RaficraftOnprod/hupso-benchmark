import Link from "next/link";
import Avatar from "../Avatar/Avatar";
import Nav from "./style";

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
    label: 'À propos'
  },
  {
    href: 'connexion/',
    label: 'Se connecter',
    icon: {
      position: 'left',
      jsx: <Avatar color="orange" radius="xl" size="md" />,
    }
  },
]

export default function Navigation() {
  return (
    <Nav>
      <ul>
        {
          navigationData.map((link, key) => {
            return (
              <li key={`navLink-${key}`}>
                {
                  link.hasOwnProperty('icon') && link.icon?.position === 'left'
                  && link.icon?.jsx
                }
                <Link href={`${link.href}`}>
                  {link.label}
                </Link>
                {
                  link.hasOwnProperty('icon') && link.icon?.position === 'right'
                  && link.icon?.jsx
                }
                {link.hasOwnProperty('submenu') && <span className="triangle" />}
              </li>
            )
          })
        }
      </ul>
    </Nav>
  )
}