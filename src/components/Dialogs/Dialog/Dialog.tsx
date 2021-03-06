import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogsDataType} from "../../../index";



const Dialog = (props: DialogsDataType) => {

    let dialogElements = props.dialogsArr.map((ObjFromDialogs, index) => {
        return (
            <div key={index} className={s.dialogs_item}>
                <NavLink to={"/dialogs/" + ObjFromDialogs.id}>{ObjFromDialogs.name}</NavLink>
            </div>
        )
    })

    return (
        <div>
            {dialogElements}
        </div>
    )
}

export default Dialog;