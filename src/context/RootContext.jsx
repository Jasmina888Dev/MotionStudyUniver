import React, { useState } from 'react';
import { MotionStudyContext } from '.';

const RootContext = ({children}) => {
    const [modal,setModal] = useState(false)
    return (
        <MotionStudyContext.Provider value={
            {
            modal,
            setModal
            }
            }>
            {children}
        </MotionStudyContext.Provider>
    );
};

export default RootContext;