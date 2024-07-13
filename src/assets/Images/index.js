import {View, Text} from 'react-native';
import React from 'react';
import {Line, Path, Svg} from 'react-native-svg';

const Atrat = () => {
  return (
    <Svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.64 11.84C7.016 11.84 6.448 11.688 5.936 11.384C5.44 11.064 5.032 10.64 4.712 10.112C4.408 9.584 4.256 8.992 4.256 8.336C4.256 7.68 4.408 7.088 4.712 6.56C5.032 6.016 5.44 5.592 5.936 5.288C6.448 4.968 7.016 4.808 7.64 4.808C8.408 4.808 9.032 5 9.512 5.384C10.008 5.752 10.256 6.296 10.256 7.016V9.632C10.256 10.336 10.016 10.88 9.536 11.264C9.056 11.648 8.424 11.84 7.64 11.84ZM7.736 10.328C8.312 10.328 8.768 10.144 9.104 9.776C9.456 9.392 9.632 8.904 9.632 8.312C9.632 7.704 9.456 7.216 9.104 6.848C8.768 6.48 8.312 6.296 7.736 6.296C7.208 6.296 6.76 6.488 6.392 6.872C6.04 7.24 5.864 7.72 5.864 8.312C5.864 8.904 6.04 9.392 6.392 9.776C6.744 10.144 7.192 10.328 7.736 10.328ZM9.752 11.672V9.896L9.992 8.216L9.752 6.608V4.952H11.312V11.672H9.752ZM12.08 13.088L13.28 14.312C12.576 14.92 11.784 15.376 10.904 15.68C10.024 16 9.08 16.16 8.072 16.16C6.984 16.16 5.96 15.96 5 15.56C4.056 15.176 3.232 14.632 2.528 13.928C1.824 13.224 1.272 12.4 0.872 11.456C0.472 10.496 0.272 9.456 0.272 8.336C0.272 7.216 0.472 6.184 0.872 5.24C1.288 4.28 1.856 3.448 2.576 2.744C3.296 2.024 4.136 1.464 5.096 1.064C6.072 0.664 7.112 0.464 8.216 0.464C9.688 0.464 10.984 0.8 12.104 1.472C13.24 2.144 14.128 3.064 14.768 4.232C15.424 5.4 15.752 6.744 15.752 8.264C15.752 8.952 15.68 9.576 15.536 10.136C15.408 10.68 15.192 11.192 14.888 11.672L13.04 11.576C13.264 11.256 13.44 10.936 13.568 10.616C13.712 10.28 13.816 9.912 13.88 9.512C13.944 9.112 13.976 8.656 13.976 8.144C13.976 6.88 13.744 5.808 13.28 4.928C12.832 4.032 12.176 3.352 11.312 2.888C10.464 2.408 9.44 2.168 8.24 2.168C7.024 2.168 5.952 2.424 5.024 2.936C4.112 3.448 3.4 4.168 2.888 5.096C2.392 6.008 2.144 7.096 2.144 8.36C2.144 9.608 2.384 10.688 2.864 11.6C3.36 12.512 4.056 13.224 4.952 13.736C5.848 14.232 6.872 14.48 8.024 14.48C8.872 14.48 9.632 14.36 10.304 14.12C10.976 13.896 11.568 13.552 12.08 13.088ZM10.424 10.256H14.888V11.672H10.424V10.256Z"
        fill="#F03197"
      />
    </Svg>
  );
};
const Pass = () => {
  return (
    <Svg
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1.616 18C1.168 18 0.786667 17.8427 0.472 17.528C0.157333 17.2133 0 16.8323 0 16.385V7.615C0 7.16833 0.157333 6.78733 0.472 6.472C0.786667 6.15733 1.168 6 1.616 6H3V4C3 2.886 3.38833 1.941 4.165 1.165C4.941 0.388333 5.886 0 7 0C8.114 0 9.05933 0.388333 9.836 1.165C10.6127 1.94167 11.0007 2.88667 11 4V6H12.385C12.8317 6 13.2127 6.15733 13.528 6.472C13.8427 6.78667 14 7.168 14 7.616V16.385C14 16.8317 13.8427 17.2127 13.528 17.528C13.2133 17.8427 12.8323 18 12.385 18H1.616ZM1.616 17H12.385C12.5643 17 12.7117 16.9423 12.827 16.827C12.9423 16.7117 13 16.5643 13 16.385V7.615C13 7.43567 12.9423 7.28833 12.827 7.173C12.7117 7.05767 12.5643 7 12.385 7H1.615C1.43567 7 1.28833 7.05767 1.173 7.173C1.05767 7.28833 1 7.436 1 7.616V16.385C1 16.5643 1.05767 16.7117 1.173 16.827C1.28833 16.9423 1.436 17 1.616 17ZM7 13.5C7.422 13.5 7.77733 13.3553 8.066 13.066C8.35533 12.7773 8.5 12.422 8.5 12C8.5 11.578 8.35533 11.2227 8.066 10.934C7.77667 10.6453 7.42133 10.5007 7 10.5C6.57867 10.4993 6.22333 10.644 5.934 10.934C5.64467 11.2227 5.5 11.578 5.5 12C5.5 12.422 5.64467 12.7773 5.934 13.066C6.22267 13.3553 6.578 13.5 7 13.5ZM4 6H10V4C10 3.16667 9.70833 2.45833 9.125 1.875C8.54167 1.29167 7.83333 1 7 1C6.16667 1 5.45833 1.29167 4.875 1.875C4.29167 2.45833 4 3.16667 4 4V6Z"
        fill="#F03197"
      />
    </Svg>
  );
};
const Hide = () => {
  return (
    <Svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1 1.27L2.28 0L19 16.72L17.73 18L14.65 14.92C13.5 15.3 12.28 15.5 11 15.5C6 15.5 1.73 12.39 0 8C0.69 6.24 1.79 4.69 3.19 3.46L1 1.27ZM11 5C11.7956 5 12.5587 5.31607 13.1213 5.87868C13.6839 6.44129 14 7.20435 14 8C14.0005 8.34057 13.943 8.67873 13.83 9L10 5.17C10.3213 5.05698 10.6594 4.99949 11 5ZM11 0.5C16 0.5 20.27 3.61 22 8C21.1834 10.0729 19.7966 11.8723 18 13.19L16.58 11.76C17.9629 10.8034 19.0783 9.5091 19.82 8C19.0117 6.34987 17.7565 4.95963 16.1974 3.98735C14.6382 3.01508 12.8375 2.49976 11 2.5C9.91 2.5 8.84 2.68 7.84 3L6.3 1.47C7.74 0.85 9.33 0.5 11 0.5ZM2.18 8C2.98835 9.65014 4.24345 11.0404 5.80264 12.0126C7.36182 12.9849 9.16251 13.5002 11 13.5C11.69 13.5 12.37 13.43 13 13.29L10.72 11C10.0242 10.9254 9.37482 10.6149 8.87997 10.12C8.38512 9.62518 8.07458 8.97584 8 8.28L4.6 4.87C3.61 5.72 2.78 6.78 2.18 8Z"
        fill="#5C5C5C"
      />
    </Svg>
  );
};
const Show = () => {
  return (
    <Svg
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.58708 8.779C4.36708 10.548 7.47008 12.999 11.0001 12.999C14.5301 12.999 17.6341 10.548 19.4131 8.779C19.8831 8.312 20.1181 8.079 20.2671 7.62C20.3741 7.293 20.3741 6.707 20.2671 6.38C20.1171 5.922 19.8821 5.688 19.4131 5.221C17.6331 3.452 14.5311 1 11.0001 1C7.47008 1 4.36608 3.452 2.58708 5.221C2.11708 5.688 1.88208 5.921 1.73308 6.38C1.62608 6.707 1.62608 7.293 1.73308 7.62C1.88308 8.078 2.11708 8.312 2.58708 8.779Z"
        stroke="#F03197"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9 7C9 7.53043 9.21071 8.03914 9.58579 8.41421C9.96086 8.78929 10.4696 9 11 9C11.5304 9 12.0391 8.78929 12.4142 8.41421C12.7893 8.03914 13 7.53043 13 7C13 6.46957 12.7893 5.96086 12.4142 5.58579C12.0391 5.21071 11.5304 5 11 5C10.4696 5 9.96086 5.21071 9.58579 5.58579C9.21071 5.96086 9 6.46957 9 7Z"
        stroke="#F03197"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const Lines = () => {
  return (
    <Svg
      width="103"
      height="1"
      viewBox="0 0 103 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Line y1="0.5" x2="103" y2="0.5" stroke="white" />
    </Svg>
  );
};
const Gooogle = () => {
  return (
    <Svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M28.718 11.6602H27.55V11.6H14.5V17.4H22.6947C21.4992 20.7763 18.2867 23.2 14.5 23.2C9.69543 23.2 5.8 19.3046 5.8 14.5C5.8 9.69543 9.69543 5.8 14.5 5.8C16.7178 5.8 18.7355 6.63665 20.2717 8.00327L24.3731 3.90195C21.7833 1.48843 18.3193 0 14.5 0C6.49238 0 0 6.49238 0 14.5C0 22.5076 6.49238 29 14.5 29C22.5076 29 29 22.5076 29 14.5C29 13.5278 28.9 12.5788 28.718 11.6602Z"
        fill="#FFC107"
      />
      <Path
        d="M1.67139 7.75097L6.43536 11.2448C7.72441 8.0533 10.8463 5.8 14.4995 5.8C16.7173 5.8 18.735 6.63665 20.2713 8.00327L24.3726 3.90195C21.7829 1.48842 18.3188 0 14.4995 0C8.93009 0 4.10014 3.14432 1.67139 7.75097Z"
        fill="#FF3D00"
      />
      <Path
        d="M14.5004 28.9993C18.2458 28.9993 21.6489 27.566 24.2219 25.2351L19.7342 21.4376C18.2295 22.5819 16.3908 23.2008 14.5004 23.1993C10.729 23.1993 7.52665 20.7945 6.32025 17.4385L1.5918 21.0816C3.99155 25.7774 8.865 28.9993 14.5004 28.9993Z"
        fill="#4CAF50"
      />
      <Path
        d="M28.718 11.6598H27.55V11.5996H14.5V17.3996H22.6947C22.1228 19.0065 21.0927 20.4107 19.7316 21.4386L19.7338 21.4371L24.2215 25.2347C23.904 25.5232 29 21.7496 29 14.4996C29 13.5274 28.9 12.5784 28.718 11.6598Z"
        fill="#1976D2"
      />
    </Svg>
  );
};
const Facebook = () => {
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M30 15C30 6.71578 23.2842 0 15 0C6.71578 0 0 6.71578 0 15C0 22.4869 5.48531 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9631 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.9249 9.84375 17.3438 11 17.3438 12.1863V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.487 30 15Z"
        fill="#1877F2"
      />
      <Path
        d="M20.8389 19.3359L21.5039 15H17.3438V12.1863C17.3438 10.9999 17.9249 9.84375 19.7883 9.84375H21.6797V6.15234C21.6797 6.15234 19.9631 5.85938 18.3219 5.85938C14.8957 5.85938 12.6562 7.93594 12.6562 11.6953V15H8.84766V19.3359H12.6562V29.8178C13.4316 29.9393 14.2152 30.0002 15 30C15.7848 30.0002 16.5684 29.9393 17.3438 29.8178V19.3359H20.8389Z"
        fill="white"
      />
    </Svg>
  );
};
export {Atrat, Pass, Hide, Show, Lines, Gooogle,Facebook};

export default Atrat;