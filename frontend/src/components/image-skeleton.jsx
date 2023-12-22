import { useState } from "react";
import { cn } from "../helper";
import PropTypes from "prop-types";

function ImageWithSkeleton({ className, classNameSkeleton ,src, ...props }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <div>
        {!isLoaded && (
          <div
            className={cn(`animate-pulse rounded-md bg-slate-400`, classNameSkeleton)}
          />
        )}
        <img 
          src={src}
          onLoad={()=> setIsLoaded(true)}
          className={cn(`${isLoaded ? "" : "hidden"} object-cover`, className)} 
          {...props}
        />
      </div>
    );
  }
  
  ImageWithSkeleton.propTypes = {
    className: PropTypes.string, // Prop type validation for className
    classNameSkeleton: PropTypes.string,
    src: PropTypes.string.isRequired,
  };
  
  export { ImageWithSkeleton };