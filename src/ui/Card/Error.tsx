import Styles from "./Card.module.css";

type ErrorProps = {
  data?: string;
};

const Error = ({ data }: ErrorProps) => {
  return (
    <div className={Styles.error}>
      <p className={Styles.errorText}>{data || "Something went wrong!"}</p>
    </div>
  );
};

export default Error;
