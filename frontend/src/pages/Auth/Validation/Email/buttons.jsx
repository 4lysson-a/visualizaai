import React from 'react';

export function GmailBtn(){
  return <button
    onClick={() => {
      window.location.href = 'https://mail.google.com/mail/u/0/#inbox';
    }}
    type="button"
    className="flex gap-2 items-center font-medium text-lg bg-card border border-colorBorderContrsat p-2 rounded-full px-4"
  >
    <svg
      className="w-6 h-6"
      width="211"
      height="158"
      viewBox="0 0 211 158"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.3263 157.631H47.7551V76.448L0 40.6314V143.305C0 151.232 6.42307 157.631 14.3263 157.631Z"
        fill="#4285F4"
      />
      <path
        d="M162.372 157.631H195.801C203.728 157.631 210.127 151.208 210.127 143.305V40.6314L162.372 76.448"
        fill="#34A853"
      />
      <path
        d="M162.372 14.3673V76.4487L210.127 40.6326V21.5304C210.127 3.81311 189.903 -6.28669 175.744 4.33843"
        fill="#FBBC04"
      />
      <path
        d="M47.7511 76.4475V14.3661L105.057 57.3458L162.363 14.3661V76.4475L105.057 119.427"
        fill="#EA4335"
      />
      <path
        d="M0 21.5304V40.6326L47.7551 76.4487V14.3673L34.3837 4.33843C20.2004 -6.28669 0 3.81311 0 21.5304Z"
        fill="#C5221F"
      />
    </svg>
             Gmail
  </button>
}
  
export function ReloadBtn(){
  return <button
    onClick={() => {
      window.location.reload();
    }}
    type="button"
    className="flex gap-2 items-center font-medium text-lg bg-card border border-colorBorderContrsat p-2 rounded-full px-4"
  >
    <svg
      className="w-6 h-6"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C16.53 22 21 17.52 21 12"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8V12L15 15"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
              Recarregar
  </button>
}