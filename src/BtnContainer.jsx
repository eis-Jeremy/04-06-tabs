import React from 'react'

function BtnContainer({ jobs, currentItem, setCurrentItem }) {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            type="button"
            className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
            onClick={() => {
              setCurrentItem(index)
            }}
          >
            {item.company}
          </button>
        )
      })}
    </div>
  )
}

export default BtnContainer
