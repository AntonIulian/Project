import React from 'react';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

function Error() {
    return (
        <div className='error__wrapper'>
            <ReportProblemIcon></ReportProblemIcon>
            <h2>Error! The user does not exist.</h2>

            
        </div>
    );
}

export default Error;