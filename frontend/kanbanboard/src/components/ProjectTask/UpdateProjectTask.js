import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    getProjectTask,
    addProjectTask,
} from '../../actions/projectTaskActions';
import classnames from 'classnames';

class UpdateProjectTask extends Component {
    //intial state
    constructor() {
        super();
        this.state = {
            summary: '',
            acceptanceCriteria: '',
            status: '',
            errors: {},
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
        const {
            id,
            summary,
            acceptanceCriteria,
            status,
        } = nextProps.project_task;

        this.setState({ id, summary, acceptanceCriteria, status });
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const updatedProjectTask = {
            id: this.state.id,
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status,
        };
        this.props.addProjectTask(updatedProjectTask, this.props.history);
    }

    componentDidMount() {
        const pt_id = this.props.match.params.pt_id;
        this.props.getProjectTask(pt_id);
    }

    render() {
        const err = this.state.errors;
        return (
            <div className='updateProjectTask'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 m-auto'>
                            <Link to='/' className='btn btn-danger'>
                                Back to Board
                            </Link>
                            <h4 className='display-4 text-center'>
                                Update a Project Task
                            </h4>
                            <form onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        className={classnames(
                                            'form-control form-control-lg',
                                            {
                                                'is-invalid': err.summary,
                                            }
                                        )}
                                        name='summary'
                                        value={this.state.summary}
                                        onChange={this.onChange}
                                        placeholder='Project Task summary'
                                    />
                                    {err.summary && (
                                        <div className='invalid-feedback'>
                                            {err.summary}
                                        </div>
                                    )}
                                </div>
                                <div className='form-group'>
                                    <textarea
                                        className='form-control form-control-lg'
                                        placeholder='Acceptance Criteria'
                                        name='acceptanceCriteria'
                                        value={this.state.acceptanceCriteria}
                                        onChange={this.onChange}
                                    ></textarea>
                                </div>
                                <div className='form-group'>
                                    <select
                                        className='form-control form-control-lg'
                                        name='status'
                                        value={this.state.status}
                                        onChange={this.onChange}
                                    >
                                        <option value=''>Select Status</option>
                                        <option value='TO_DO'>TO DO</option>
                                        <option value='IN_PROGRESS'>
                                            IN PROGRESS
                                        </option>
                                        <option value='DONE'>DONE</option>
                                    </select>
                                </div>
                                <input
                                    type='submit'
                                    className='btn btn-danger btn-block mt-4'
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

UpdateProjectTask.propTypes = {
    getProjectTask: PropTypes.func.isRequired,
    addProjectTask: PropTypes.func.isRequired,
    project_task: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    project_task: state.project_tasks.project_task,
    errors: state.errors,
});

export default connect(mapStateToProps, { getProjectTask, addProjectTask })(
    UpdateProjectTask
);
