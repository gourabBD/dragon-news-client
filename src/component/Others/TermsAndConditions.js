import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Here is our terms and conditions</h3>
            <p>Go back to Registration <Link to={'/register'}>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;