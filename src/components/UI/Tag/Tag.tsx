import styles from "../../../styles/tag/index.module.scss";
import { TagProps } from '../../../types/tag'

const Tag: React.FC<TagProps> = ({children}) => {
    return (
      <div className={styles.tag}>{children}</div>
    )
};

export default Tag;