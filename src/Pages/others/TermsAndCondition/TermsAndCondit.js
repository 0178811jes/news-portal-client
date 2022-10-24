import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondit = () => {
    return (
        <div>
            <h2>Here is Terms And Conditions</h2>
            <p>Go back to : <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondit;