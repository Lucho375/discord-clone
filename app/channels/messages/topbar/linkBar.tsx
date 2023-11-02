import Link from "next/link"
import styles from "./tobar.module.css"
import { IButtonLinks } from "./ITopbar"

export default function LinkBar(props:IButtonLinks){

    return (
        <Link className={styles.links} href={props.href}>{props.icon}{props.title}</Link>
    )
}