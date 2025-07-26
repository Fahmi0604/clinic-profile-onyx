import React from "react"

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
            {...props}
        >
            <path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.298 22.0024 8.62372 21.5686 7.13701 20.74L6.83201 20.562L3.80001 21.454C3.63501 21.5026 3.46033 21.5083 3.29252 21.4705C3.12472 21.4327 2.96935 21.3526 2.84115 21.238C2.71294 21.1233 2.61615 20.9778 2.55995 20.8152C2.50375 20.6526 2.49 20.4784 2.52001 20.309L2.54601 20.2L3.43801 17.168C2.49506 15.6093 1.99769 13.8218 2.00001 12C2.00001 6.477 6.47701 2 12 2ZM12 4C10.5676 3.99974 9.16146 4.38406 7.92834 5.11281C6.69521 5.84157 5.68036 6.88804 4.98977 8.14294C4.29918 9.39784 3.95817 10.8151 4.00237 12.2468C4.04656 13.6785 4.47433 15.0721 5.24101 16.282C5.43901 16.594 5.52401 16.978 5.45701 17.359L5.41801 17.522L4.97701 19.023L6.47801 18.582C6.91101 18.454 7.36101 18.532 7.71801 18.759C8.76634 19.4228 9.9547 19.8336 11.1892 19.959C12.4236 20.0844 13.6703 19.921 14.8307 19.4816C15.9911 19.0422 17.0334 18.3389 17.8752 17.4273C18.717 16.5157 19.3352 15.4208 19.6809 14.2291C20.0266 13.0374 20.0904 11.7817 19.8673 10.5611C19.6441 9.34053 19.14 8.1886 18.395 7.19638C17.65 6.20415 16.6843 5.39883 15.5744 4.84408C14.4645 4.28933 13.2408 4.00036 12 4ZM9.10201 7.184C9.21283 7.13654 9.33402 7.11851 9.45386 7.13165C9.57369 7.14479 9.68811 7.18866 9.78601 7.259C10.29 7.627 10.69 8.121 11.034 8.603L11.361 9.077L11.514 9.302C11.6026 9.43096 11.6461 9.58557 11.6378 9.74182C11.6295 9.89806 11.5698 10.0472 11.468 10.166L11.393 10.242L10.469 10.928C10.425 10.9606 10.3941 11.0078 10.3819 11.0611C10.3696 11.1145 10.3767 11.1705 10.402 11.219C10.612 11.599 10.983 12.166 11.409 12.592C11.836 13.018 12.429 13.414 12.835 13.647C12.923 13.697 13.029 13.681 13.101 13.616L13.139 13.571L13.74 12.656C13.8502 12.5088 14.0131 12.4101 14.1946 12.3806C14.3761 12.3512 14.5619 12.3932 14.713 12.498L15.256 12.877C15.796 13.262 16.315 13.676 16.726 14.201C16.8021 14.2997 16.8504 14.4168 16.866 14.5404C16.8817 14.664 16.8641 14.7895 16.815 14.904C16.419 15.828 15.416 16.615 14.374 16.577L14.215 16.567L14.024 16.549L13.916 16.535L13.678 16.495C12.754 16.321 11.273 15.797 9.73801 14.263C8.20401 12.728 7.68001 11.247 7.50601 10.323L7.46601 10.085L7.44101 9.877L7.42801 9.702L7.42401 9.627C7.38601 8.583 8.17701 7.58 9.10201 7.184Z" fill="currentColor" />
        </svg>
    )
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
            {...props}
        >
            <path d="M5.57136 8.20874C5.28486 6.32174 6.61536 4.62674 8.64786 4.00574C9.00856 3.89621 9.3974 3.92795 9.73556 4.09452C10.0737 4.26109 10.3359 4.55002 10.4689 4.90274L11.1214 6.64274C11.2264 6.92266 11.2454 7.22758 11.1759 7.51837C11.1064 7.80916 10.9516 8.07255 10.7314 8.27474L8.79036 10.0522C8.69457 10.1399 8.62319 10.251 8.58322 10.3746C8.54326 10.4982 8.53607 10.63 8.56236 10.7572L8.58036 10.8352L8.62686 11.0302C8.86886 11.9775 9.23663 12.8881 9.72036 13.7377C10.2485 14.6399 10.9032 15.4617 11.6644 16.1782L11.7244 16.2322C11.8213 16.3182 11.9388 16.3777 12.0655 16.4048C12.1922 16.4318 12.3238 16.4256 12.4474 16.3867L14.9569 15.5962C15.2421 15.5067 15.5475 15.5044 15.834 15.5897C16.1205 15.6749 16.375 15.8438 16.5649 16.0747L17.7529 17.5162C18.2479 18.1162 18.1879 18.9982 17.6194 19.5277C16.0639 20.9782 13.9249 21.2752 12.4369 20.0797C10.6121 18.6093 9.0744 16.8147 7.90086 14.7862C6.71585 12.7604 5.92643 10.5287 5.57136 8.20874ZM10.1344 10.8562L11.7424 9.38024C12.1831 8.97604 12.493 8.44934 12.6323 7.86775C12.7715 7.28616 12.7338 6.67622 12.5239 6.11624L11.8729 4.37624C11.6058 3.6664 11.0785 3.08483 10.3982 2.74967C9.71784 2.41451 8.93542 2.35089 8.20986 2.57174C5.68536 3.34424 3.65886 5.60774 4.08786 8.43524C4.38786 10.4092 5.07936 12.9202 6.60486 15.5422C7.87103 17.7294 9.52978 19.6643 11.4979 21.2497C13.7299 23.0422 16.7089 22.4302 18.6439 20.6272C19.1975 20.1117 19.5336 19.4043 19.5835 18.6495C19.6334 17.8946 19.3934 17.1492 18.9124 16.5652L17.7244 15.1222C17.3443 14.661 16.8352 14.3237 16.2622 14.1537C15.6892 13.9838 15.0785 13.9888 14.5084 14.1682L12.4249 14.8237C11.8869 14.2691 11.4157 13.6534 11.0209 12.9892C10.6399 12.3176 10.3427 11.6017 10.1359 10.8577" fill="currentColor" />
        </svg>
    )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
            {...props}
        >
            <path d="M7.8 2.14648H16.2C19.4 2.14648 22 4.74648 22 7.94648V16.3465C22 17.8847 21.3889 19.36 20.3012 20.4477C19.2135 21.5354 17.7383 22.1465 16.2 22.1465H7.8C4.6 22.1465 2 19.5465 2 16.3465V7.94648C2 6.40823 2.61107 4.93298 3.69878 3.84527C4.78649 2.75755 6.26174 2.14648 7.8 2.14648ZM7.6 4.14648C6.64522 4.14648 5.72955 4.52577 5.05442 5.2009C4.37928 5.87603 4 6.79171 4 7.74648V16.5465C4 18.5365 5.61 20.1465 7.6 20.1465H16.4C17.3548 20.1465 18.2705 19.7672 18.9456 19.0921C19.6207 18.4169 20 17.5013 20 16.5465V7.74648C20 5.75648 18.39 4.14648 16.4 4.14648H7.6ZM17.25 5.64648C17.5815 5.64648 17.8995 5.77818 18.1339 6.0126C18.3683 6.24702 18.5 6.56496 18.5 6.89648C18.5 7.228 18.3683 7.54595 18.1339 7.78037C17.8995 8.01479 17.5815 8.14648 17.25 8.14648C16.9185 8.14648 16.6005 8.01479 16.3661 7.78037C16.1317 7.54595 16 7.228 16 6.89648C16 6.56496 16.1317 6.24702 16.3661 6.0126C16.6005 5.77818 16.9185 5.64648 17.25 5.64648ZM12 7.14648C13.3261 7.14648 14.5979 7.67327 15.5355 8.61095C16.4732 9.54863 17 10.8204 17 12.1465C17 13.4726 16.4732 14.7443 15.5355 15.682C14.5979 16.6197 13.3261 17.1465 12 17.1465C10.6739 17.1465 9.40215 16.6197 8.46447 15.682C7.52678 14.7443 7 13.4726 7 12.1465C7 10.8204 7.52678 9.54863 8.46447 8.61095C9.40215 7.67327 10.6739 7.14648 12 7.14648ZM12 9.14648C11.2044 9.14648 10.4413 9.46255 9.87868 10.0252C9.31607 10.5878 9 11.3508 9 12.1465C9 12.9421 9.31607 13.7052 9.87868 14.2678C10.4413 14.8304 11.2044 15.1465 12 15.1465C12.7956 15.1465 13.5587 14.8304 14.1213 14.2678C14.6839 13.7052 15 12.9421 15 12.1465C15 11.3508 14.6839 10.5878 14.1213 10.0252C13.5587 9.46255 12.7956 9.14648 12 9.14648Z" fill="currentColor" />
        </svg>

    )
}

function ChevronIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
            {...props}
        >
            <path d="M9.70492 6.49438L8.29492 7.90438L12.8749 12.4944L8.29492 17.0844L9.70492 18.4944L15.7049 12.4944L9.70492 6.49438Z" fill="currentColor" />
        </svg>
    )
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
            {...props}
        >
            <path d="M12 18.2641L18.18 21.9941L16.54 14.9641L22 10.2341L14.81 9.62414L12 2.99414L9.19 9.62414L2 10.2341L7.46 14.9641L5.82 21.9941L12 18.2641Z" fill="currentColor" />
        </svg>
    )
}

function ArrowForwardIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
            {...props}
        >
            <path d="M5.20874 13H16.3787L11.4987 17.88C11.1087 18.27 11.1087 18.91 11.4987 19.3C11.8887 19.69 12.5187 19.69 12.9087 19.3L19.4987 12.71C19.8887 12.32 19.8887 11.69 19.4987 11.3L12.9187 4.69997C12.5287 4.30997 11.8987 4.30997 11.5087 4.69997C11.1187 5.08997 11.1187 5.71997 11.5087 6.10997L16.3787 11H5.20874C4.65874 11 4.20874 11.45 4.20874 12C4.20874 12.55 4.65874 13 5.20874 13Z" fill="currentColor" />
        </svg>
    )
}

function ArrowBackIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
            {...props}
        >
            <path d="M18.7912 11.2513H7.62124L12.5012 6.37127C12.8912 5.98127 12.8912 5.34127 12.5012 4.95127C12.1112 4.56127 11.4812 4.56127 11.0912 4.95127L4.50124 11.5413C4.11124 11.9313 4.11124 12.5613 4.50124 12.9513L11.0912 19.5413C11.4812 19.9313 12.1112 19.9313 12.5012 19.5413C12.8912 19.1513 12.8912 18.5213 12.5012 18.1313L7.62124 13.2513H18.7912C19.3412 13.2513 19.7912 12.8013 19.7912 12.2513C19.7912 11.7013 19.3412 11.2513 18.7912 11.2513Z" fill="currentColor" />
        </svg>
    )
}

function VerifiedIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
            {...props}
        >
            <path d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM10.09 16.72L6.29 12.91L7.77 11.43L10.09 13.76L15.94 7.89L17.42 9.37L10.09 16.72Z" fill="currentColor" />
        </svg>

    )
}

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
            {...props}
        >
            <path d="M6.92773 7.32172V17.6817C6.92773 18.4717 7.79773 18.9517 8.46773 18.5217L16.6077 13.3417C17.2277 12.9517 17.2277 12.0517 16.6077 11.6517L8.46773 6.48172C7.79773 6.05172 6.92773 6.53172 6.92773 7.32172Z" fill="currentColor" />
        </svg>
    )
}

const ArrowLongRightIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
            {...props}
        >
            <path d="M15.5 5L14.09 6.41L18.67 11H2.5V13H18.67L14.08 17.59L15.5 19L22.5 12L15.5 5Z" fill="currentColor" />
        </svg>
    )
}

function ArrowCircleLeftIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
            {...props}
        >
            <g filter="url(#filter0_dd_486_1092)">
                <path d="M8.33398 23.0026C8.33398 32.2026 15.8007 39.6693 25.0007 39.6693C34.2007 39.6693 41.6673 32.2026 41.6673 23.0026C41.6673 13.8026 34.2007 6.33594 25.0007 6.33594C15.8007 6.33594 8.33398 13.8026 8.33398 23.0026ZM25.0007 18.3526V21.3359H30.0007C30.9173 21.3359 31.6673 22.0859 31.6673 23.0026C31.6673 23.9193 30.9173 24.6693 30.0007 24.6693H25.0007V27.6526C25.0007 28.4026 24.1007 28.7693 23.584 28.2359L18.934 23.5859C18.6007 23.2526 18.6007 22.7359 18.934 22.4026L23.584 17.7526C24.1007 17.2359 25.0007 17.6026 25.0007 18.3526Z" fill="currentColor" />
            </g>
            <defs>
                <filter id="filter0_dd_486_1092" x="-3" y="-3" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_486_1092" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_486_1092" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_486_1092" result="effect2_dropShadow_486_1092" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_486_1092" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

function ArrowCircleRightIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
            {...props}
        >
            <g filter="url(#filter0_dd_486_1093)">
                <path d="M41.6673 23.0026C41.6673 13.8026 34.2007 6.33594 25.0007 6.33594C15.8007 6.33594 8.33398 13.8026 8.33398 23.0026C8.33398 32.2026 15.8007 39.6693 25.0007 39.6693C34.2007 39.6693 41.6673 32.2026 41.6673 23.0026ZM25.0007 27.6526V24.6693H20.0007C19.084 24.6693 18.334 23.9193 18.334 23.0026C18.334 22.0859 19.084 21.3359 20.0007 21.3359H25.0007V18.3526C25.0007 17.6026 25.9007 17.2359 26.4173 17.7693L31.0673 22.4193C31.4007 22.7526 31.4007 23.2693 31.0673 23.6026L26.4173 28.2526C25.9007 28.7693 25.0007 28.4026 25.0007 27.6526Z" fill="currentColor" />
            </g>
            <defs>
                <filter id="filter0_dd_486_1093" x="-3" y="-3" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_486_1093" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_486_1093" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_486_1093" result="effect2_dropShadow_486_1093" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_486_1093" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

function PlaceIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
            {...props}
        >
            <path d="M12 2.16406C7.8 2.16406 4 5.38406 4 10.3641C4 13.5441 6.45 17.2841 11.34 21.5941C11.72 21.9241 12.29 21.9241 12.67 21.5941C17.55 17.2841 20 13.5441 20 10.3641C20 5.38406 16.2 2.16406 12 2.16406ZM12 12.1641C10.9 12.1641 10 11.2641 10 10.1641C10 9.06406 10.9 8.16406 12 8.16406C13.1 8.16406 14 9.06406 14 10.1641C14 11.2641 13.1 12.1641 12 12.1641Z" fill="currentColor" />
        </svg>
    )
}

function StarBadgeIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
            {...props}
        >
            <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM15.22 17.39L12 15.45L8.78 17.39C8.4 17.62 7.93 17.28 8.03 16.85L8.88 13.19L6.05 10.74C5.72 10.45 5.9 9.9 6.34 9.86L10.08 9.54L11.54 6.09C11.71 5.68 12.29 5.68 12.46 6.09L13.92 9.53L17.66 9.85C18.1 9.89 18.28 10.44 17.94 10.73L15.11 13.18L15.96 16.85C16.06 17.28 15.6 17.62 15.22 17.39Z" fill="currentColor" />
        </svg>
    )
}

function Clock4Icon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
            {...props}
        >
            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM15.55 15.8L11.47 13.29C11.17 13.11 10.99 12.79 10.99 12.44V7.75C11 7.34 11.34 7 11.75 7C12.16 7 12.5 7.34 12.5 7.75V12.2L16.34 14.51C16.7 14.73 16.82 15.2 16.6 15.56C16.38 15.91 15.91 16.02 15.55 15.8Z" fill="currentColor" />
        </svg>
    )
}



export type IconProps = {
    name: 'whatsapp' | 'phone' | 'instagram' | 'chevron' | 'star' | 'arrow-forward' | 'arrow-back' | 'verified' | 'play' | 'arrow-long-right' | 'arrow-circle-left' | 'arrow-circle-right' | 'place' | 'star-badge' | 'clock4'
    size?: number
    className?: string
}

export const Icons = ({ name, size = 24, className }: IconProps) => {
    if (name === 'whatsapp') return <WhatsappIcon width={size} height={size} className={className} />
    if (name === 'phone') return <PhoneIcon width={size} height={size} className={className} />
    if (name === 'instagram') return <InstagramIcon width={size} height={size} className={className} />
    if (name === 'chevron') return <ChevronIcon width={size} height={size} className={className} />
    if (name === 'star') return <StarIcon width={size} height={size} className={className} />
    if (name === 'arrow-forward') return <ArrowForwardIcon width={size} height={size} className={className} />
    if (name === 'arrow-back') return <ArrowBackIcon width={size} height={size} className={className} />
    if (name === 'verified') return <VerifiedIcon width={size} height={size} className={className} />
    if (name === 'play') return <PlayIcon width={size} height={size} className={className} />
    if (name === 'arrow-long-right') return <ArrowLongRightIcon width={size} height={size} className={className} />
    if (name === 'arrow-circle-left') return <ArrowCircleLeftIcon width={size} height={size} className={className} />
    if (name === 'arrow-circle-right') return <ArrowCircleRightIcon width={size} height={size} className={className} />
    if (name === 'place') return <PlaceIcon width={size} height={size} className={className} />
    if (name === 'star-badge') return <StarBadgeIcon width={size} height={size} className={className} />
    if (name === 'clock4') return <Clock4Icon width={size} height={size} className={className} />

    return null;
}

export default Icons