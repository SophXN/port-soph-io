import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";
import StorageIcon from "@mui/icons-material/Storage";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import WorkIcon from "@mui/icons-material/Work";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";

import styles from "@/styles/Menu.module.css";

function Menu() {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.menuContainer}>
          <Tooltip title="Home" placement="bottom" className={styles.tooltip}>
            <a href="#home" className={styles.icon}>
              <HomeIcon />
            </a>
          </Tooltip>
          <Tooltip title="Resume" placement="bottom" className={styles.tooltip}>
            <Link href="#resume" className={styles.icon}>
              <WorkIcon />
            </Link>
          </Tooltip>
          <Tooltip
            title="Climate X"
            placement="bottom"
            className={styles.tooltip}
          >
            <Link href="/" className={styles.icon}>
              <PublicIcon />
            </Link>
          </Tooltip>
          <Tooltip
            title="Past Projects"
            placement="bottom"
            className={styles.tooltip}
          >
            <Link href="/" className={styles.icon}>
              <StorageIcon />
            </Link>
          </Tooltip>
          {/* <Tooltip
            title="Endorsements"
            placement="bottom"
            className={styles.tooltip}
          >
            <Link href="/" className={styles.icon}>
              <ThumbUpIcon />
            </Link>
          </Tooltip> */}
          <div className={styles.verticalLine} />
          <Tooltip title="Github" placement="bottom" className={styles.tooltip}>
            <a
              href="https://github.com/SophXN"
              target="_blank"
              className={styles.icon}
            >
              <GitHubIcon />
            </a>
          </Tooltip>
          <Tooltip
            title="LinkedIn"
            placement="bottom"
            className={styles.tooltip}
          >
            <a
              href="https://www.linkedin.com/in/sophia-x-nguyen/"
              target="_blank"
              className={styles.icon}
            >
              <LinkedInIcon />
            </a>
          </Tooltip>
          <Tooltip
            title="Schedule Chat"
            placement="bottom"
            className={styles.tooltip}
          >
            <a
              href="https://cal.com/sophie"
              target="_blank"
              className={styles.icon}
            >
              <CalendarMonthIcon />
            </a>
          </Tooltip>
        </div>
      </div>
    </>
  );
}

export default Menu;
