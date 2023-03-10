import React from 'react'
import './loading.css'

const Loading = (props: any) => {
  return (
    <div className="Loading">
      <svg
        className="Loading-play"
        width={66}
        height={83}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="Loading-outline"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.966 26.354l-.127-.074-15.334-8.943-7.75 4.618-.221.133 18.754 11.194c.476.356.957 1.633.957 2.232v24.49c0 .599-.474 1.876-.948 2.233L34.664 74.462c-.122.053-.513.193-1.193.193-.682 0-1.105-.14-1.225-.193l-21.01-12.234c-.502-.348-1.464-1.633-1.464-2.25V35.541c0-.615.986-1.903 1.488-2.25l17.996-10.52 2.276-1.256 1.003-.554 1.24-.683 8.107-4.472.117-.065 3.72-2.052 5.731-3.16c1.92-1.043 2.645-3.472 1.62-5.426-1.026-1.954-3.414-2.692-5.336-1.647l-4.86 2.68-1.617.903-3.062 1.711-4.325 2.417-3.3 1.843-.774.432-4.1 2.29-1.12.627-7.049 3.938-7.969 4.386-2.963 1.671C3.74 28.034.477 32.147.477 35.499v24.519c0 3.352 3.254 7.467 6.107 9.145l21.345 12.253c1.427.838 3.515 1.26 5.392 1.26 1.875 0 3.857-.422 5.285-1.26l21.32-12.253c2.854-1.678 5.613-5.793 5.613-9.145V35.499c0-3.352-2.715-7.466-5.573-9.145z"
          fill="#092963"
        />
        <path
          d="M43.638 49.342a1.718 1.718 0 01-.767.776v.009l-13.657 6.916a1.697 1.697 0 01-2.29-.774 1.739 1.739 0 01-.18-.782V41.655c0-.955.764-1.73 1.706-1.73.265 0 .528.062.765.182l13.656 6.916a1.74 1.74 0 01.767 2.319z"
          fill="#FCBE4B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.352 0c-2.675 0-4.843 2.205-4.843 4.924v3.225l-9.836-5.535c-1.904-1.074-4.304-.377-5.36 1.56-1.059 1.935-.371 4.376 1.533 5.452l7.49 4.215 6.355-3.537 1.834-1.02 7.669-4.27v-.09c0-2.72-2.169-4.924-4.842-4.924z"
          fill="#092963"
        />
      </svg>
      <h2 style={{ marginTop: '50px', color: 'var(--error)' }}>
        {props && props.message}
      </h2>
    </div>
  )
}

export default Loading
