import React from "react";
import { memo } from "react";

const OptimizedChild = memo(function OptimizedChild({ count }) {
    console.log('OptimizedChild dirender')

    return(
        <div className="p-3 text-black">
            Optimized: {count}
        </div>
    )
})

export default OptimizedChild