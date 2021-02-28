import { useContext } from 'react';
import { ChallegesContext } from '../contexts/ChallengesContext';
import styles from '../Styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallegesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://instagram.fmcz8-1.fna.fbcdn.net/v/t51.2885-19/s320x320/117105279_2649948381884061_2656661289186565748_n.jpg?_nc_ht=instagram.fmcz8-1.fna.fbcdn.net&_nc_ohc=S2r7FTkp4yoAX9Btrl5&tp=1&oh=497b93eba7c30a6b5e3e349c819aebb3&oe=605FE656" alt="Lincoln Duarte" />
            <div>
                <strong>Lincoln Pinto Duarte</strong>

                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}