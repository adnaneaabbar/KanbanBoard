import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProjectTask } from '../../actions/projectTaskActions';
import classnames from 'classnames';

class UpdateProjectTask extends Component {
    componentDidMount() {
        const pt_id = this.props.match.params.pt_id;
        this.props.getProjectTask(pt_id);
    }

    render() {
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
                            <form>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        className='form-control form-control-lg'
                                        name='summary'
                                        placeholder='Project Task summary'
                                    />
                                </div>
                                <div className='form-group'>
                                    <textarea
                                        className='form-control form-control-lg'
                                        placeholder='Acceptance Criteria'
                                        name='acceptanceCriteria'
                                    ></textarea>
                                </div>
                                <div className='form-group'>
                                    <select
                                        className='form-control form-control-lg'
                                        name='status'
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
    project_task: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    project_task: state.project_task,
    errors: state.errors,
});

export default connect(mapStateToProps, { getProjectTask })(UpdateProjectTask);
