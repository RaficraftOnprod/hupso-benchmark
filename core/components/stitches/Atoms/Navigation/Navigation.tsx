import Link from "next/link"
import { IconeDownArrow, IconeUser } from "../../../../assets/svg/icones"
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
  {
    href: 'connexion/',
    label: 'Se connecter',
    icon: {
      position: 'left',
      svg: <IconeUser />,
      class: 'icone_user'
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
                  && <div className={link.icon.class}>{link.icon?.svg}</div>
                }
                <Link href={`${link.href}`}>
                  {link.label}
                </Link>
                {link.hasOwnProperty('submenu') && <IconeDownArrow className="arrow_down" />}
              </li>
            )
          })
        }
      </ul>
    </Nav>
  )
}