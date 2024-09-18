import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Ajeet</div>
            <div className={styles.text}>
                Ajeet Kumar Sah © All rights reserved.
            </div>
        </div>
    );
};

export default Footer;