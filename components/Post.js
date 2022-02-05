import React from 'react';

function Post( { id, username, userImg, img, caption}) {
  return (
    <div>   

        {/* Header */}
        <div className='flex items-center p-5'>
            <img src="{userImg}" alt="UserImg" 
                className='rounded-full h-12 w-12 object-contain obrder p-1  mr-3' />
        </div>

        {/* Image */}

        {/* Buttons */}

        {/* Caption */}

        {/* Comments */}

        {/* Input Box */}

        
    </div>
  )
}

export default Post;
