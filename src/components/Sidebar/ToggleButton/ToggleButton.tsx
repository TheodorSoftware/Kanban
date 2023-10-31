import React from 'react';

import classes from './ToggleButton.module.css';
const ToggleButton = (props:any) => {
    return(
        <React.Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" width="251" height="48" viewBox="0 0 251 48" fill="none">
                <rect width="251" height="48" rx="6" fill="#F4F7FD"/>
                <rect x="106" y="14" width="40" height="20" rx="10" fill="#635FC7"/>
                <circle cx="116" cy="24" r="7" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M183.908 26.3675C184.316 26.1875 184.802 26.5325 184.632 26.9375C183.472 29.7125 180.688 31.6667 177.438 31.6667C173.146 31.6667 169.667 28.2575 169.667 24.0517C169.667 20.5108 172.133 17.5342 175.474 16.6817C175.908 16.5717 176.192 17.0883 175.955 17.4617C175.337 18.4358 175.009 19.5661 175.01 20.72C175.01 24.1375 177.837 26.9075 181.324 26.9075C182.214 26.909 183.094 26.7251 183.908 26.3675ZM179.502 17.4258C179.207 16.9842 179.734 16.4575 180.176 16.7525L180.963 17.2775C181.283 17.4905 181.658 17.6041 182.042 17.6041C182.425 17.6041 182.801 17.4905 183.12 17.2775L183.907 16.7525C184.349 16.4575 184.876 16.9842 184.581 17.4258L184.056 18.2133C183.843 18.5326 183.729 18.9079 183.729 19.2917C183.729 19.6755 183.843 20.0507 184.056 20.37L184.581 21.1575C184.876 21.5992 184.349 22.1258 183.907 21.8308L183.12 21.3058C182.801 21.0929 182.425 20.9792 182.042 20.9792C181.658 20.9792 181.283 21.0929 180.963 21.3058L180.177 21.8308C179.735 22.1258 179.207 21.5992 179.502 21.1575L180.027 20.37C180.24 20.0507 180.353 19.6755 180.353 19.2917C180.353 18.9079 180.24 18.5326 180.027 18.2133L179.502 17.4258Z" fill="#828FA3"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M73.7559 15.2441C73.5997 15.0878 73.3877 15 73.1667 15C72.9457 15 72.7337 15.0878 72.5774 15.2441C72.4211 15.4004 72.3333 15.6123 72.3333 15.8333V16.6667C72.3333 16.8877 72.4211 17.0996 72.5774 17.2559C72.7337 17.4122 72.9457 17.5 73.1667 17.5C73.3877 17.5 73.5997 17.4122 73.7559 17.2559C73.9122 17.0996 74 16.8877 74 16.6667V15.8333C74 15.6123 73.9122 15.4004 73.7559 15.2441ZM66.5 16.6668C66.279 16.6668 66.0671 16.7546 65.9108 16.9108C65.7546 17.0671 65.6668 17.279 65.6668 17.5C65.6668 17.721 65.7546 17.9329 65.9108 18.0892L67.1608 19.3392C67.318 19.491 67.5285 19.575 67.747 19.5731C67.9655 19.5712 68.1745 19.4835 68.329 19.329C68.4835 19.1745 68.5712 18.9655 68.5731 18.747C68.575 18.5285 68.491 18.318 68.3392 18.1608L67.0892 16.9108C66.9329 16.7546 66.721 16.6668 66.5 16.6668ZM80.6665 17.5C80.6665 17.279 80.5787 17.0671 80.4225 16.9108C80.2662 16.7546 80.0543 16.6668 79.8333 16.6668C79.6124 16.6668 79.4005 16.7546 79.2442 16.9108L77.9942 18.1608C77.9146 18.2377 77.8511 18.3297 77.8074 18.4313C77.7638 18.533 77.7408 18.6424 77.7398 18.753C77.7388 18.8637 77.7599 18.9734 77.8018 19.0758C77.8437 19.1782 77.9056 19.2713 77.9838 19.3495C78.0621 19.4277 78.1551 19.4896 78.2576 19.5315C78.36 19.5734 78.4697 19.5945 78.5803 19.5935C78.691 19.5926 78.8003 19.5696 78.902 19.5259C79.0037 19.4822 79.0956 19.4188 79.1725 19.3392L80.4225 18.0892C80.5787 17.9329 80.6665 17.721 80.6665 17.5ZM64.2441 23.5774C64.0878 23.7337 64 23.9457 64 24.1667C64 24.3877 64.0878 24.5997 64.2441 24.7559C64.4004 24.9122 64.6123 25 64.8333 25H65.6667C65.8877 25 66.0996 24.9122 66.2559 24.7559C66.4122 24.5997 66.5 24.3877 66.5 24.1667C66.5 23.9457 66.4122 23.7337 66.2559 23.5774C66.0996 23.4211 65.8877 23.3333 65.6667 23.3333H64.8333C64.6123 23.3333 64.4004 23.4211 64.2441 23.5774ZM80.0774 23.5774C79.9211 23.7337 79.8333 23.9457 79.8333 24.1667C79.8333 24.3877 79.9211 24.5997 80.0774 24.7559C80.2337 24.9122 80.4457 25 80.6667 25H81.5C81.721 25 81.933 24.9122 82.0893 24.7559C82.2455 24.5997 82.3333 24.3877 82.3333 24.1667C82.3333 23.9457 82.2455 23.7337 82.0893 23.5774C81.933 23.4211 81.721 23.3333 81.5 23.3333H80.6667C80.4457 23.3333 80.2337 23.4211 80.0774 23.5774ZM68.5832 29.5834C68.5832 29.3624 68.4954 29.1505 68.3392 28.9942C68.1829 28.838 67.971 28.7502 67.75 28.7502C67.529 28.7502 67.3171 28.838 67.1608 28.9942L65.9108 30.2442C65.759 30.4014 65.675 30.6119 65.6769 30.8304C65.6788 31.0489 65.7665 31.2579 65.921 31.4124C66.0755 31.5669 66.2845 31.6545 66.503 31.6564C66.7215 31.6583 66.932 31.5743 67.0892 31.4225L68.3392 30.1725C68.4954 30.0163 68.5832 29.8043 68.5832 29.5834ZM78.5833 28.7502C78.3624 28.7502 78.1505 28.838 77.9942 28.9942C77.838 29.1505 77.7502 29.3624 77.7502 29.5834C77.7502 29.8043 77.838 30.0163 77.9942 30.1725L79.2442 31.4225C79.4013 31.5743 79.6118 31.6583 79.8303 31.6564C80.0488 31.6545 80.2579 31.5669 80.4124 31.4124C80.5669 31.2579 80.6545 31.0489 80.6564 30.8304C80.6583 30.6119 80.5743 30.4014 80.4225 30.2442L79.1725 28.9942C79.0162 28.838 78.8043 28.7502 78.5833 28.7502ZM73.7559 31.0774C73.5997 30.9212 73.3877 30.8334 73.1667 30.8334C72.9457 30.8334 72.7337 30.9212 72.5774 31.0774C72.4211 31.2337 72.3333 31.4457 72.3333 31.6667V32.5C72.3333 32.721 72.4211 32.933 72.5774 33.0893C72.7337 33.2456 72.9457 33.3334 73.1667 33.3334C73.3877 33.3334 73.5997 33.2456 73.7559 33.0893C73.9122 32.933 74 32.721 74 32.5V31.6667C74 31.4457 73.9122 31.2337 73.7559 31.0774ZM70.2204 21.2204C71.0018 20.439 72.0616 20 73.1667 20C74.2717 20 75.3316 20.439 76.113 21.2204C76.8944 22.0018 77.3333 23.0616 77.3333 24.1667C77.3333 25.2718 76.8944 26.3316 76.113 27.113C75.3316 27.8944 74.2717 28.3334 73.1667 28.3334C72.0616 28.3334 71.0018 27.8944 70.2204 27.113C69.439 26.3316 69 25.2718 69 24.1667C69 23.0616 69.439 22.0018 70.2204 21.2204Z" fill="#828FA3"/>
            </svg>
        </React.Fragment>
    )
}

export default ToggleButton;