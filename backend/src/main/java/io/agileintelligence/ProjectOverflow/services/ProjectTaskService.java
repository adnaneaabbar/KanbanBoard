package io.agileintelligence.ProjectOverflow.services;

import io.agileintelligence.ProjectOverflow.domain.ProjectTask;
import io.agileintelligence.ProjectOverflow.repository.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {

    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    public ProjectTask saveOrUpdateProjectTask(ProjectTask projectTask){

        if(projectTask.getStatus() == null || projectTask.getStatus() == ""){
            // if user doesn't specify a status, it goes automatically to to_do
            projectTask.setStatus("TO_DO");
        }
        return projectTaskRepository.save(projectTask);
    }

    public Iterable<ProjectTask> findAll(){

        return projectTaskRepository.findAll();
    }

    public ProjectTask findById(Long id){

        return projectTaskRepository.getById(id);
    }
}
