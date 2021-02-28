import { useContext } from 'react';
import { ChallegesContext } from '../contexts/ChallengesContext';
import styles from '../Styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallegesContext)

    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}