package io.agileintelligence.ProjectOverflow.services;

import io.agileintelligence.ProjectOverflow.repository.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {
    @Autowired
    private ProjectTaskRepository projectTaskRepository;
}
