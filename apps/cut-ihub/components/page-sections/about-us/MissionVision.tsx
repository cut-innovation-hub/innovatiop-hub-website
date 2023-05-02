import React from 'react'

function MissionVision() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 py-16 max-w-7xl w-full mx-auto">
    <div className="flex col-span-1 flex-col w-full">
      <p className="uppercase text-primary-original w-full font-semibold border-b border-primary-original">
        vision
      </p>
      <p className="text-sm capitalize text-primary-light py-2">
        {/* What is our real vision at innovation hub? */}
      </p>
      <p className="capitalize text-primary-original font-semibold">
        To be a center for innovation and entrepreneurial activities
        within the region and beyond.
      </p>
    </div>
    <div className="flex col-span-1 flex-col w-full">
      <p className="uppercase text-primary-original w-full font-semibold border-b border-primary-original">
        mission
      </p>
      <p className="text-sm capitalize text-primary-light py-2">
        {/* What is our real mission at innovation hub? */}
      </p>
      <p className="capitalize text-primary-original font-semibold">
        To support innovators and entrepreneurs in transforming
        world-changing ideas into technologically feasible
        entities/solutions with spurring economic growth through
        production of goods and services.
      </p>
    </div>
  </div>
  )
}

export default MissionVision