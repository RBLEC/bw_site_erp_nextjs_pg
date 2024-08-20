import Link from 'next/link';
import styles from '../styles/navbar.module.scss';

const Navbar = ({ menuData = { menu: [] }, isAuthenticated }) => {
  console.log('Navbar Menu Data:', menuData); // Log pour vérifier les données reçues

  const renderMenuItems = (menuItems) => {
    return menuItems.map((menuItem, index) => (
      <li key={index} className={styles.menuItem}>
        <Link href={menuItem.url}>{menuItem.label}</Link>
        {menuItem.subMenu && menuItem.subMenu.length > 0 && (
          <ul className={styles.subMenu}>
            {renderMenuItems(menuItem.subMenu)}
          </ul>
        )}
      </li>
    ));
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        {menuData.menu.length > 0 ? renderMenuItems(menuData.menu) : <li>No menu available</li>}
      </ul>
    </nav>
  );
};

export default Navbar;
