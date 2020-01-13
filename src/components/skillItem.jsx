import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

function SkillItem(props) {
    return (
        <div>
            <p>{props.item.name}</p>
            <p>{props.item.currentPoint} из {props.item.maxPoint}, так держать!</p>
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
export default SkillItem;