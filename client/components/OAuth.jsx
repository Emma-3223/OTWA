import React from 'react'

function OAuth() {
    const handleGoogleClick = async () => {
        try {
            
        } catch (error) {
            console.log('Could not sign in with google', error)
        }
    }
 
  return (
    <button type='button' onClick={handleGoogleClick} className='flex  items-center gap-3 shadow-md rounded mt-2 hover:opacity-75'>
        <span className='p-3'><img 
        src={`https://user-images.githubusercontent.com/194400/70987158-4069c900-20b7-11ea-892e-8a2e1166b6b7.png`} 
        alt="Sample" 
        className="w-5 rounded-full   h-auto"
      /></span>
      <span className='text-blue-600 font-semibold'>Continue with Google</span>
    </button>
  )
}

export default OAuth