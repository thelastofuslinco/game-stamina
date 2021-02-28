import { useContext } from 'react';
import { ChallegesContext } from '../contexts/ChallengesContext';
import styles from '../Styles/components/LeveUpModal.module.css'

export function LeveUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallegesContext)

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button type='button' onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
            </div>
        </div>
    );
}