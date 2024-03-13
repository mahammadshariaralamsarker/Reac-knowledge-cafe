import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

Bookmarks.propTypes = {
    
};

function Bookmarks({bookmarks}) {
    return (
        <div className='text-center ml-5 bg-gray-300 rounded-xl'>
            <h2 >Bookmarked: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark
                bookmark ={bookmark}
                key={bookmark.id}
                ></Bookmark>)
            }
        </div>
    );
}
Bookmarks.propTypes ={
    bookmarks:PropTypes.array
}
export default Bookmarks;