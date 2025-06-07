import React, { useContext } from 'react';
import MotionStudy from '../Pages/MotionStudy/MotionStudy';
import Best from '../Pages/Best/Best';
import HeaderMenu from '../Layout/HeaderManu/HeaderMenu';
import { MotionStudyContext } from '../../context';
import Header from '../Layout/Header/Header';

const Main = () => {
    const {modal} = useContext(MotionStudyContext)
    return (
           <div>
       {
        modal ? 
        <HeaderMenu /> 
        :
        <>
        <MotionStudy />
        <Best />
        </>
       }
    </div>
    );
};

export default Main;