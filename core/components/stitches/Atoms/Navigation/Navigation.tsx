import Link from 'next/link';

import Nav from './style';
import Avatar from '../Avatar/Avatar';

const navigationData = [
  {
    label: 'Secteurs',
    submenu: [
      {
        href: '',
        label: 'Social',
      },
      {
        href: '',
        label: 'Paramédical',
      },
      {
        href: '',
        label: 'Commerce',
      },
      {
        href: '',
        label: 'Enseignement',
      },
    ],
  },
  {
    href: 'Entreprises/',
    label: 'entrerpises',
  },
  {
    label: 'Ressources',
    submenu: [
      {
        href: '',
        label: '',
      },
    ],
  },
  {
    href: 'a-propos/',
    label: 'À propos',
  },
  {
    href: 'connexion/',
    label: 'Se connecter',
    icon: {
      position: 'left',
      jsx: <Avatar color="orange" radius="xl" size="md" />,
    },
  },
];

export default function Navigation() {
  return (
    <Nav>
      <ul>
        {
          navigationData.map((link, key) => (

            <li key={`navLink-${key}`}>
              {
                link.icon && link.icon?.position === 'left'
                && link.icon?.jsx
              }
              <Link href={`${link.href}`}>
                {link.label}
              </Link>
              {
                link.icon && link.icon?.position === 'right'
                && link.icon?.jsx
              }
              {link.submenu && <span className="triangle" />}
            </li>
          ))
        }
      </ul>
    </Nav>
  );
}
