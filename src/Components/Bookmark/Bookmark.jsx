import React from 'react';
import PropTypes from 'prop-types';

Bookmark.propTypes = {
    
};

function Bookmark({bookmark}) {
    const {title}= bookmark;
    return (
        <div className='bg-slate-200 p-4 rounded-xl'>
            <h3>{title}</h3>
        </div>
    );
}

export default Bookmark;