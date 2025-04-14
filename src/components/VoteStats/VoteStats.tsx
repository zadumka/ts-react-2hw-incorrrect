import styles from "./VoteStats.module.css";
import { Votes } from "../../types/votes";

interface VoteStatsProps {
  vote: Votes;
  totalVote: number;
  positiveVote: number;
}

export default function VoteStats({
  totalVotes: { good, neutral, bad },
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}
