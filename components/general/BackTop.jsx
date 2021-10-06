import { AiOutlineArrowUp } from 'react-icons/ai';
import styles from '../../styles/Buttons.module.scss';
import { useScrollDirection } from '../../src/utils/hooks';

const BackTop = ({scrollToRef}) => {

   const scrollDirection = useScrollDirection();
  
	return (
		<div className={scrollDirection?styles.backTop: styles.displayNone} onClick={scrollToRef}>
				<AiOutlineArrowUp />
		</div>
	);
};

export default BackTop;
