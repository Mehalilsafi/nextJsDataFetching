  import React from 'react'
  import Skeleton from 'react-loading-skeleton'
  export default function loading() {
    return (
      <div>
        <Skeleton count={10} />

      </div>
    )
  }
  