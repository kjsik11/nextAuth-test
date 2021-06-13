import React from 'react';

interface Props {
  className?: string;
}

const Kakao: React.FC<Props> = ({ className, ...props }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 3.14331C6.4772 3.14331 2 6.65931 2 10.9965C2 14.1999 3.58 15.7287 5.7444 17.1227L5.7544 17.1265L5.3377 21.6646C5.34447 21.7082 5.36225 21.7494 5.38934 21.7843C5.41644 21.8191 5.45197 21.8465 5.49258 21.8639C5.53319 21.8812 5.57755 21.8879 5.62146 21.8833C5.66538 21.8788 5.70741 21.8631 5.7436 21.8378L10.5507 18.7878L10.6594 18.8006C11.1045 18.8499 11.5525 18.8663 12 18.8499C17.523 18.8499 22 15.3338 22 10.9969C22 6.66001 17.523 3.14331 12 3.14331Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const MemoizedKakao = React.memo(Kakao);
export default Kakao;
