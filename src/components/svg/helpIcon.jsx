const HelpIcon = (prop) => {
    let { fill } = prop;

    return (
        <svg
            className={fill}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="Group 237527">
                <path
                    className={fill}
                    id="Vector"
                    d="M9 3.6C8.06134 3.60119 7.16146 3.9746 6.49773 4.63833C5.834 5.30206 5.46059 6.20194 5.4594 7.1406H7.2594C7.2594 6.1803 8.0406 5.4 9 5.4C9.9594 5.4 10.7406 6.1803 10.7406 7.1406C10.7406 7.6788 10.3077 8.0694 9.6462 8.604C9.4301 8.77329 9.22254 8.95321 9.0243 9.1431C8.1261 10.0404 8.1 10.9935 8.1 11.0997V11.7H9.9L9.8991 11.1303C9.9 11.1159 9.9288 10.7829 10.296 10.4166C10.431 10.2816 10.6011 10.1466 10.7775 10.0044C11.4786 9.4365 12.5397 8.5788 12.5397 7.1406C12.539 6.20195 12.1658 5.30193 11.5022 4.63812C10.8386 3.97431 9.93865 3.60095 9 3.6ZM8.1 12.6H9.9V14.4H8.1V12.6Z"
                />
                <path
                    className={fill}
                    id="Vector_2"
                    d="M9 0C4.0374 0 0 4.0374 0 9C0 13.9626 4.0374 18 9 18C13.9626 18 18 13.9626 18 9C18 4.0374 13.9626 0 9 0ZM9 16.2C5.0301 16.2 1.8 12.9699 1.8 9C1.8 5.0301 5.0301 1.8 9 1.8C12.9699 1.8 16.2 5.0301 16.2 9C16.2 12.9699 12.9699 16.2 9 16.2Z"
                />
            </g>
        </svg>
    )
};

export default HelpIcon;
