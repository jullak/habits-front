import React from 'react';
import { connect } from 'react-redux';
import SkillItem from '../components/skillItem';
import * as skillAction from '../actions/skill';
import * as goalAction from '../actions/goal'
import GoalItem from "../components/goalItem";
import Modal from 'react-modal';

export class _Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openCreatingS: false,
            openCreatingG: false,
            skillName: '',
            skillPoint: 100,

            goalName: '',
            goalPoint: 10,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({...this.state, [event.target.name]: event.target.value});
    }

    componentDidMount() {
        this.props.getSkills(this.props.currentUser.id, false);
        //this.props.getGoals(this.props.currentUser.id, false);

        this.props.getSkills(this.props.currentUser.id, true); //some kind of sorting by 'done'
        //this.props.getGoals(this.props.currentUser.id, true);
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen = {this.state.openCreatingS}>
                    <p>Но я временно не работаю(</p>
                    <input type="text" name="skillName" placeholder="Name" value={this.state.skillName} onChange={this.handleChange}>
                    </input>
                    <input type="text" name="skillPoint" placeholder="Points to finish" value={this.state.skillPoint} onChange={this.handleChange}>
                    </input>
                    <button onClick={() => this.props.createSkill(this.props.currentUser.id, this.state.skillName, this.state.skillPoint)}>Создать</button>
                    <button name='openCreatingS' onClick={this.handleChange} value={false}>Закрыть</button>
                </Modal>

                <div>
                    <p>{this.props.currentUser.nickname}</p>
                </div>

                <div>
                    {this.props.goalsList.length ?
                        this.props.goalsList.filter(item => item.today).map(item =>
                            <GoalItem item={item}/>)
                        : <p>Пока тут пусто..</p>
                    }
                </div>

                <div>
                    {this.props.goalsList.length ?
                        this.props.goalsList.filter(item => !item.today).map(item =>
                            <GoalItem item={item}/>)
                        : <p>Пока тут пусто..</p>
                    }
                </div>

                <div>
                    <button name='openCreatingS' onClick={this.handleChange} value={true}>Приобрести привычку</button>
                    {this.props.skillsList.length ?
                        this.props.skillsList.map(item =>
                    <SkillItem item={item}/>)
                        : <p>Пока тут пусто...</p>
                    }
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    skillsList: state.skillsList,
    goalsList: state.goalsList,
    currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    getSkills: (id, done) => dispatch(skillAction.getSkills(id, done)),
    getGoals: (id, done) => dispatch(goalAction.getGoals(id, done)),
    createSkill: ({id, name, maxPoint}) => dispatch(skillAction.createSkill({id, name, maxPoint}))
});

export const Main = connect(mapStateToProps, mapDispatchToProps)(_Main)