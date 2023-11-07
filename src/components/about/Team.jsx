import React from "react";

function Team(props) {
  return (
    <div className="p-4">
      <div className="mb-4 text-center opacity-90">
        <img
          src={props.Image}
          className="mx-auto object-cover rounded-full h-40 w-40 "
        />
      </div>
      <div className="text-center">
        <p className="text-2xl text-gray-800 dark:text-white">{props.Name}</p>
        {/* <p className="text-xl font-light text-gray-500 dark:text-gray-200">
          {props.Rank}
        </p> */}
        <i><span className="text-xl text-red-600 dark:text-red-500">{props.Rank}</span></i>
      </div>

      {/* Social Media Buttons */}
      <div className="flex items-center justify-between pt-2 mx-auto text-gray-500 w-32">
        {/* Mail */}
        <a href={props.Mail} target="_blank" rel="noreferrer">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
            viewBox="0 0 20 20"
          >
            <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
          </svg>
        </a>
        {/* GitHub */}
        <a href={props.GitHub} target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
            viewBox="0 0 1792 1792"
          >
            <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
          </svg>
        </a>
        {/* LinkedIn */}
        <a href={props.LinkedIn} target="_blank" rel="noreferrer">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
          </svg>
        </a>
        {/* Resume */}
        <a href={props.Resume} target="_blank" rel="noreferrer">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
            viewBox="0 0 16 20"
          >
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Team;
