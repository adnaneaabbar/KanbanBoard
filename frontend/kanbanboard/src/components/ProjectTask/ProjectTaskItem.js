import React, { Component } from 'react';

class ProjectTaskItem extends Component {
    render() {
        const project_task = this.props.project_task;
        return (
            <div className='card mb-1 bg-light'>
                <div className='card-header text-primary'>
                    ID: {project_task.id}
                </div>
                <div className='card-body bg-light'>
                    <h5 className='card-title'>{project_task.summary}</h5>
                    <p className='card-text text-truncate '>
                        {project_task.acceptanceCriteria}
                    </p>
                    <a href='#' className='btn btn-warning'>
                        View / Update
                    </a>

                    <button className='btn btn-danger ml-4'>Delete</button>
                </div>
            </div>
        );
    }
}

export default ProjectTaskItem;
