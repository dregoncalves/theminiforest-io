// /react/components/DrawerCustom/index.tsx
import React, { useState } from "react";
import styles from "../../styles/drawer-custom.css";
import UserInfoAccordion from "../UserInfoAccordion";
import { menuData, MenuItemData } from "./menuData";

interface MenuItemProps {
  label: string;
  onClick?: () => void;
  hasArrow?: boolean;
  href?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  onClick,
  hasArrow,
  href,
}) => {
  const classNames = `${styles.menuItem} ${hasArrow ? styles.hasArrow : ""}`;

  if (href) {
    return (
      <a href={href} className={classNames}>
        <span>{label}</span>
      </a>
    );
  }

  return (
    <div className={classNames} onClick={onClick}>
      <span>{label}</span>
    </div>
  );
};

const DrawerCustom: React.FC = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<MenuItemData | null>(null);

  const handleBackClick = () => {
    setActiveSubmenu(null);
  };

  const isSubmenuVisible = !!activeSubmenu;
  const transformValue = isSubmenuVisible
    ? "translateX(0)"
    : "translateX(100%)";

  return (
    <div className={styles.drawerContainer}>
      <div className={styles.drawerHeader}>
        <UserInfoAccordion />
      </div>

      <div className={styles.drawerContent}>
        {/* Painel Principal do Menu */}
        <div className={styles.mainMenuPanel}>
          {menuData.map((item) => (
            <MenuItem
              key={item.label}
              label={item.label}
              href={item.href}
              hasArrow={!!item.submenu}
              onClick={item.submenu ? () => setActiveSubmenu(item) : undefined}
            />
          ))}
        </div>

        {/* Submenu Dinâmico */}
        <div
          className={`${styles.submenuOverlay} ${
            isSubmenuVisible ? styles.submenuActive : ""
          }`}
          style={{ transform: transformValue }}
        >
          {activeSubmenu && (
            <>
              <div className={styles.backButton} onClick={handleBackClick}>
                <span>MENU</span>
              </div>
              {activeSubmenu.submenu?.map((subItem) => (
                <MenuItem
                  key={subItem.label}
                  label={subItem.label}
                  href={subItem.href}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DrawerCustom;
