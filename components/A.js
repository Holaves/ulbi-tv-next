import Link from "next/link";
import styles from "../styles/A.module.css"

export default function A({style, href, text}) {
    // 
    return (
        <Link style={style} href={href} className={styles.link}>
            {text}
        </Link>
    )
}