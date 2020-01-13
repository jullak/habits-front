import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

function GoalItem(props) {
    return (
        <div>
            <p>{props.item.name}</p>
            <p>Это даст целых {props.item.givenPoint}!</p>
            <p>Начато: {props.item.started}</p>
            {props.item.done ? <p>Достигнуто!</p>
                : <p>В процессе...</p>}
        </div>
    )
}

/*const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    skillsList: state.skillsList
});*/

//export const SkillItem = connect(mapStateToProps);
export default GoalItem;