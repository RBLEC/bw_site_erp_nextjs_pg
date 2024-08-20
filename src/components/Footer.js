// src/components/Footer.js
import Link from 'next/link';
import styles from '../styles/footer.module.scss'; // Crée un fichier SCSS pour le footer

const Footer = ({ menuData = { menu: [] } }) => {
  const renderMenuItems = (menuItems) => {
    return menuItems.map((menuItem, index) => (
      <li key={index} className={styles.menuItem}>
        <Link href={menuItem.url}>{menuItem.label}</Link>
      </li>
    ));
  };

  return (
    <footer className={styles.footer}>
      <ul className={styles.menu}>
        {menuData.menu.length > 0 ? renderMenuItems(menuData.menu) : null}
      </ul>
    </footer>
  );
};

export default Footer;
