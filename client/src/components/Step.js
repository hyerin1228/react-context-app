import React from 'react'

function Step({ currentStep }) {
  return (
    <div className="step-container">
        <div className={currentStep === 0 ? 'active-step' : ''}>Step 1</div>>
        <div className={currentStep === 1 ? 'active-step' : ''}>Step 2</div>>
        <div className={currentStep === 2 ? 'active-step' : ''}>Step 3</div>
    </div>
  )
}

export default Step