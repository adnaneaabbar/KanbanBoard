package io.agileintelligence.ProjectOverflow.web;

import io.agileintelligence.ProjectOverflow.domain.ProjectTask;
import io.agileintelligence.ProjectOverflow.services.ProjectTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/board")
@CrossOrigin
public class ProjectTaskController {

    @Autowired
    private ProjectTaskService projectTaskService;

    @PostMapping("")
    public ResponseEntity<?> addProjectTaskToBoard(@Valid @RequestBody ProjectTask projectTask){

        ProjectTask newProjectTask = projectTaskService.saveOrUpdateProjectTask(projectTask);
        return new ResponseEntity<ProjectTask>(newProjectTask, HttpStatus.CREATED);
    }
}
