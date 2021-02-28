import { useContext } from 'react';
import { ChallegesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../Styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallegesContext)
    const { resetCountdown } = useContext(CountdownContext)

    const handleChallengeSucceed = () => {
        completeChallenge();
        resetCountdown();
    }

    const handleChallengeFailed = () => {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challegeBoxContainer}>
            {activeChallenge ?
                <div className={styles.challegeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challegeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challegeSucceededButton}
                            onClick={handleChallengeSucceed}
                        >Completei</button>
                    </footer>
                </div>
                : <div className={styles.challegeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de level completando desafios.
                    </p>
                </div>}
        </div>
    );
}