import styles from "../../../styles/tag-center/index.module.scss";
import { TagProps } from '../../../types/tag'

const TagCenter: React.FC<TagProps> = ({children}) => {
    return (
      <div className={styles.tag_center}>{children}</div>
    )
};

export default TagCenter;