import React from "react"

export function AlertIcon({ color = '#dc3545', size = 32, strokeWidth = 1.5 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
        </svg>
    );
}


export function AddToCartIcon({ color = '#593A23', size = 36, strokeWidth = 1.5 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-bag-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.263 1.708" />
            <path d="M16 19h6" />
            <path d="M19 16v6" />
            <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
        </svg>
    );
}

export function CheckCartIcon({ color = '#593A23', size = 36, strokeWidth = 1.5 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-bag-check" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.5 3.248" />
            <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
            <path d="M15 19l2 2l4 -4" />
        </svg>
    );
}

export function RemoveFromCartIcon({ color = '#593A23', size = 36, strokeWidth = 1.5 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-bag-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13 21h-4.426a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.506 3.287" />
            <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
            <path d="M22 22l-5 -5" />
            <path d="M17 22l5 -5" />
        </svg>
    );
}

export function CartIcon({ color = '#382C26', size = 32, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-bag" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
            <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
        </svg>
    );
}

export function CheckIcon({ color = '#198754', size = 32, strokeWidth = 1.5 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M9 12l2 2l4 -4" />
        </svg>
    );
}

export function FavIcon({ color = '#382c26', size = 32, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
    );
}

export function FavFillIcon({ color = '#7f5345', size = 32, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" strokeWidth="0" fill="#ff2825" />
        </svg>
    );
}

export function FilterIcon({ color = '#593A23', size = 36, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments-alt" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 8h4v4h-4z" />
            <path d="M6 4l0 4" />
            <path d="M6 12l0 8" />
            <path d="M10 14h4v4h-4z" />
            <path d="M12 4l0 10" />
            <path d="M12 18l0 2" />
            <path d="M16 5h4v4h-4z" />
            <path d="M18 4l0 1" />
            <path d="M18 9l0 11" />
        </svg>
    );
}

export function GithubIcon({ color = '#Fdecda', size = 32, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        </svg>
    );
}

export function InstagramIcon({ color = '#Fdecda', size = 32, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
        </svg>
    );
}

export function LinkedinIcon({ color = '#Fdecda', size = 32, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M8 11l0 5" />
            <path d="M8 8l0 .01" />
            <path d="M12 16l0 -5" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </svg>
    );
}

export function NextIcon({ color = '#ffffff', size = 32, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
        </svg>
    );
}

export function OrderIcon({ color = '#382C26', size = 32, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-sort" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 9l4 -4l4 4m-4 -4v14" />
            <path d="M21 15l-4 4l-4 -4m4 4v-14" />
        </svg>
    );
}

export function PrevIcon({ color = '#ffffff', size = 32, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
        </svg>
    );
}

export function SearchIcon({ color = '#382c26', size = 32, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
        </svg>
    );
}

export function StarIcon({ color = '#382c26', size = 20, strokeWidth = 1.5 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
        </svg>
    );
}

export function UserIcon({ color = '#382c26', size = 32, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </svg>
    );
}

export function WhatsappIcon({ color = '#Fdecda', size = 32, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
        </svg>
    );
}

export function BiuLogo({ color = '#593A23', size = 32, strokeWidth = 1 }) {
    return (
        <svg className='icon' width={size} height={size} strokeWidth={strokeWidth} stroke={color} viewBox="0 0 578 388" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M259.438 350.115H319.12C324.021 344.302 328.302 338.422 332 332.484C334.224 328.896 336.255 325.281 338.063 321.661H240.495C242.307 325.281 244.333 328.896 246.563 332.484C250.255 338.422 254.542 344.302 259.438 350.115ZM323.042 356.484V357.24H322.38C322.375 357.24 322.375 357.24 322.375 357.24C313.771 367.078 303.49 376.677 291.453 385.943L289.281 387.615L287.109 385.943C266.62 370.182 251.245 353.448 240.526 336.24C225.344 311.87 219.516 286.563 221.771 261.734C224.016 236.99 234.313 212.807 251.411 190.583C260.349 178.974 271.125 167.891 283.589 157.563C283.589 157.563 283.589 157.563 283.589 157.557C276.859 152.38 269.688 147.406 262.073 142.667C260.177 141.484 258.255 140.323 256.323 139.167C251.75 154.151 244.833 168.01 236.328 180.526C224.12 198.5 208.646 213.635 192.224 225.266C175.76 236.917 158.312 245.036 142.214 248.927C115.839 255.292 92.8906 250.375 82.8958 231.26C80.099 225.911 79.2344 220.755 79.9323 215.833C80.8021 209.656 84.1042 204.016 89.1094 198.932C91.2656 196.74 93.7552 194.651 96.5104 192.667C96.5104 192.661 96.5104 192.661 96.5104 192.661C78.5417 191.766 60.6094 189.005 45.3021 183.984C27.5885 178.167 13.2344 169.281 5.99479 156.667C1.20312 148.328 -0.453127 138.479 2.09375 126.948C3.31771 121.406 5.36979 116.38 8.16666 111.896C18.1667 95.8542 37.5156 86.4375 62.2917 82.8698C86.4635 79.3906 115.969 81.4323 146.995 88.2917C181.781 95.9688 218.516 109.672 251.839 128.349C260.125 92.5 254.177 50.5313 223.276 5.70834C222.234 4.20834 222.594 2.15626 224.073 1.09375L224.438 0.838546C225.948 -0.23437 228.052 0.125005 229.109 1.65105C240.839 18.6667 249.109 35.2813 254.479 51.3594C256.266 46.3594 259.135 41.8802 262.818 38.2031C269.214 31.8073 278.063 27.8333 287.839 27.8333C297.599 27.8333 306.453 31.8073 312.849 38.2031C317.688 43.0313 321.135 49.2813 322.531 56.2448C327.797 38.6615 336.526 20.3958 349.448 1.66146C350.505 0.130213 352.615 -0.23437 354.13 0.838546L354.484 1.09375C355.969 2.15626 356.323 4.20834 355.292 5.70834C324.385 50.5313 318.443 92.5 326.734 128.349C360.047 109.672 396.792 95.9688 431.568 88.2917C462.599 81.4323 492.099 79.3906 516.266 82.8698C541.052 86.4375 560.396 95.8542 570.391 111.896C573.188 116.38 575.24 121.406 576.464 126.948C579.01 138.479 577.354 148.328 572.568 156.667C565.323 169.281 550.969 178.167 533.266 183.984C517.948 189.005 500.031 191.766 482.047 192.661C482.047 192.661 482.047 192.661 482.047 192.667C484.802 194.651 487.292 196.74 489.453 198.932C494.469 204.016 497.76 209.656 498.63 215.833C499.323 220.755 498.458 225.911 495.667 231.26C485.667 250.375 462.719 255.292 436.349 248.927C420.25 245.036 402.797 236.917 386.339 225.266C369.917 213.635 354.438 198.495 342.229 180.526C333.724 168.01 326.807 154.151 322.234 139.167C320.313 140.323 318.385 141.484 316.484 142.667C308.875 147.406 301.708 152.38 294.974 157.557C294.974 157.563 294.974 157.563 294.974 157.563C307.438 167.901 318.214 178.974 327.146 190.583C344.245 212.807 354.547 236.99 356.797 261.734C357.344 267.807 357.411 273.901 356.979 280.021V280.635H356.932C355.896 294.115 352.427 307.63 346.297 320.948V321.458C346.297 321.573 346.203 321.661 346.089 321.661C346.01 321.661 345.943 321.708 345.906 321.781C343.641 326.635 341.016 331.458 338.036 336.24C333.781 343.068 328.786 349.833 323.042 356.484ZM312.786 357.24H265.776C272.609 364.526 280.432 371.667 289.281 378.63C298.13 371.667 305.948 364.526 312.786 357.24ZM261.953 87.3594C263.214 103.042 261.797 118.005 258.297 132.068C260.828 133.552 263.344 135.078 265.833 136.625C274.151 141.813 281.979 147.266 289.281 152.969C296.578 147.266 304.406 141.813 312.74 136.625C315.219 135.078 317.729 133.552 320.266 132.068C316.458 116.802 315.115 100.438 317 83.2552C315.766 85.0469 314.38 86.7083 312.849 88.2396C306.453 94.651 297.599 98.6094 287.839 98.6094C278.063 98.6094 269.214 94.651 262.818 88.2396C262.526 87.9479 262.234 87.6458 261.953 87.3594ZM230.458 176.557C238.87 164.182 245.651 150.401 249.979 135.474C216.839 116.651 180.151 102.87 145.469 95.224C115.271 88.5573 86.651 86.5521 63.2969 89.9115C40.5729 93.1875 22.9948 101.542 14.2083 115.656C11.8177 119.495 10.0677 123.766 9.02604 128.479C6.89062 138.115 8.24479 146.286 12.1719 153.13C18.4427 164.068 31.3802 171.932 47.5052 177.219C64.0938 182.661 83.9375 185.344 103.474 185.813C104.849 185.844 106.25 185.865 107.635 185.885C132.911 172.734 169.823 166.026 188.505 168.661L195.615 169.672L190.516 174.719C179.292 185.813 145.328 193.042 109.375 192.995C103.344 196.271 98.1094 199.922 94.1771 203.917C90.2031 207.943 87.6094 212.266 86.9687 216.807C86.4687 220.307 87.1302 224.031 89.1927 227.979C97.4583 243.781 117.37 247.609 140.536 242.016C155.818 238.333 172.417 230.583 188.135 219.474C203.896 208.328 218.75 193.781 230.458 176.557ZM176.943 175.208C162.687 175.536 143.573 179.151 126.49 185.385C147.167 184.109 165.589 180.469 176.943 175.208ZM321.526 194.922C312.641 183.365 301.828 172.349 289.281 162.073C276.729 172.349 265.917 183.365 257.031 194.922C255.156 197.354 253.365 199.823 251.661 202.318C251.661 202.318 251.661 202.318 251.667 202.318H326.896C325.193 199.823 323.406 197.354 321.526 194.922ZM247.057 209.438C240.552 220.13 235.667 231.182 232.526 242.427H346.036C342.906 231.182 338.01 220.13 331.505 209.438H247.057ZM230.771 249.552C229.87 253.813 229.224 258.089 228.839 262.375C228.505 266.073 228.359 269.792 228.406 273.505H350.156C350.208 269.792 350.068 266.073 349.724 262.375C349.339 258.089 348.688 253.813 347.792 249.552H230.771ZM228.755 280.635C229.682 291.943 232.464 303.292 237.214 314.542H341.349C346.094 303.292 348.88 291.943 349.802 280.635H228.755ZM433.099 95.224C398.417 102.87 361.719 116.651 328.578 135.474C332.906 150.401 339.693 164.182 348.109 176.557C359.807 193.781 374.661 208.328 390.432 219.474C406.141 230.583 422.755 238.333 438.021 242.016C461.193 247.609 481.115 243.781 489.375 227.979C491.443 224.031 492.089 220.307 491.599 216.807C490.948 212.266 488.354 207.943 484.391 203.917C480.464 199.922 475.224 196.271 469.182 192.995C433.245 193.042 399.271 185.813 388.052 174.719L382.948 169.672L390.052 168.661C408.745 166.026 445.656 172.734 470.927 185.885C472.313 185.865 473.708 185.844 475.094 185.813C494.635 185.344 514.479 182.661 531.068 177.219C547.188 171.932 560.115 164.068 566.385 153.13C570.323 146.286 571.667 138.115 569.531 128.479C568.5 123.766 566.745 119.495 564.354 115.656C555.563 101.542 538 93.1875 515.266 89.9115C491.906 86.5521 463.286 88.5573 433.099 95.224ZM401.625 175.208C412.974 180.469 431.406 184.109 452.063 185.385C434.984 179.151 415.87 175.536 401.625 175.208ZM307.813 43.2396C302.698 38.1198 295.641 34.9583 287.839 34.9583C280.026 34.9583 272.964 38.1198 267.849 43.2396C262.734 48.349 259.573 55.4167 259.573 63.224C259.573 71.026 262.734 78.0938 267.849 83.2031C272.964 88.3177 280.026 91.4792 287.839 91.4792C295.641 91.4792 302.698 88.3177 307.813 83.2031C312.932 78.0938 316.089 71.026 316.089 63.224C316.089 55.4167 312.932 48.349 307.813 43.2396Z" fill="#593A23" />
        </svg>
    )
}

export function FlaskOffIcon({ color = '#593A23', size = 32, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-flask-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 3h6" />
            <path d="M13 9h1" />
            <path d="M10 3v3m-.268 3.736l-3.732 10.264a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-1.143 -3.142m-2.288 -6.294l-.569 -1.564v-6" />
            <path d="M3 3l18 18" />
        </svg>
    )
}

export function CarrotIcon({ color = '#593A23', size = 32, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-carrot" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21s9.834 -3.489 12.684 -6.34a4.487 4.487 0 0 0 0 -6.344a4.483 4.483 0 0 0 -6.342 0c-2.86 2.861 -6.347 12.689 -6.347 12.689z" />
            <path d="M9 13l-1.5 -1.5" />
            <path d="M16 14l-2 -2" />
            <path d="M22 8s-1.14 -2 -3 -2c-1.406 0 -3 2 -3 2s1.14 2 3 2s3 -2 3 -2z" />
            <path d="M16 2s-2 1.14 -2 3s2 3 2 3s2 -1.577 2 -3c0 -1.86 -2 -3 -2 -3z" />
        </svg>
    )
}

export function PawIcon({ color = '#593A23', size = 32, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-paw" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14.7 13.5c-1.1 -2 -1.441 -2.5 -2.7 -2.5c-1.259 0 -1.736 .755 -2.836 2.747c-.942 1.703 -2.846 1.845 -3.321 3.291c-.097 .265 -.145 .677 -.143 .962c0 1.176 .787 2 1.8 2c1.259 0 3 -1 4.5 -1s3.241 1 4.5 1c1.013 0 1.8 -.823 1.8 -2c0 -.285 -.049 -.697 -.146 -.962c-.475 -1.451 -2.512 -1.835 -3.454 -3.538z" />
            <path d="M20.188 8.082a1.039 1.039 0 0 0 -.406 -.082h-.015c-.735 .012 -1.56 .75 -1.993 1.866c-.519 1.335 -.28 2.7 .538 3.052c.129 .055 .267 .082 .406 .082c.739 0 1.575 -.742 2.011 -1.866c.516 -1.335 .273 -2.7 -.54 -3.052z" />
            <path d="M9.474 9c.055 0 .109 0 .163 -.011c.944 -.128 1.533 -1.346 1.32 -2.722c-.203 -1.297 -1.047 -2.267 -1.932 -2.267c-.055 0 -.109 0 -.163 .011c-.944 .128 -1.533 1.346 -1.32 2.722c.204 1.293 1.048 2.267 1.933 2.267z" />
            <path d="M16.456 6.733c.214 -1.376 -.375 -2.594 -1.32 -2.722a1.164 1.164 0 0 0 -.162 -.011c-.885 0 -1.728 .97 -1.93 2.267c-.214 1.376 .375 2.594 1.32 2.722c.054 .007 .108 .011 .162 .011c.885 0 1.73 -.974 1.93 -2.267z" />
            <path d="M5.69 12.918c.816 -.352 1.054 -1.719 .536 -3.052c-.436 -1.124 -1.271 -1.866 -2.009 -1.866c-.14 0 -.277 .027 -.407 .082c-.816 .352 -1.054 1.719 -.536 3.052c.436 1.124 1.271 1.866 2.009 1.866c.14 0 .277 -.027 .407 -.082z" />
        </svg>
    )
}

export function LeafIcon({ color = '#593A23', size = 32, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-leaf" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 21c.5 -4.5 2.5 -8 7 -10" />
            <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z" />
        </svg>
    )
}

export function RecyclableIcon({ color = '#593A23', size = 32, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-recycle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17l-2 2l2 2" />
            <path d="M10 19h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
            <path d="M8.536 11l-.732 -2.732l-2.732 .732" />
            <path d="M7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024" />
            <path d="M15.464 11l2.732 .732l.732 -2.732" />
            <path d="M18.196 11.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976" />
        </svg>
    )
}

export function BrokenHearthIcon({ color = '#593A23', size = 32, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart-broken" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            <path d="M12 6l-2 4l4 3l-2 4v3" />
        </svg>
    )
}

export function CartOffIcon({ color = '#593A23', size = 32, strokeWidth = 1 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-briefcase-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13 21h-4.426a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.506 3.287" />
            <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
            <path d="M22 22l-5 -5" />
            <path d="M17 22l5 -5" />
        </svg>
    )
}
