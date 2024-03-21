import React from 'react';

interface Testimony {
    profilePhoto: string;
    name: string;
    designation: string;
    textDescription: string;
  }


const TestimonyCard = ({ testimony }: { testimony: Testimony }) => (
          <div className="w-32 md:w-40">
            <div className="mb-6">
              <img
                src={testimony.profilePhoto}
                className="w-32 rounded-full shadow-lg dark:shadow-black/20"
              />
            </div>
            <h5 className="mb-2 md:text-lg font-bold">{testimony.name}</h5>
            <h6 className="mb-4 font-medium text-primary dark:text-primary-400">{testimony.designation}</h6>
            <p className="mb-4">
              {testimony.textDescription}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                <path
                  fill="currentColor"
                  d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                />
              </svg>
            </p>
          </div>
  );
  
export default TestimonyCard;
  





{
    /* <ul className="mb-0 flex justify-center">
  <li>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
      <path
        fill="currentColor"
        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
      />
    </svg>
  </li>
  <li>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
      <path
        fill="currentColor"
        d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"
      />
    </svg>
  </li>
  </ul> */
  }
  
  