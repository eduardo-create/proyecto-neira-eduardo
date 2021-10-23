import React from 'react';


export const Loading = () => {
    return (
        <div className="d-flex justify-content-center loading1">
            <div className="spinner-border text-success loading2" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading;