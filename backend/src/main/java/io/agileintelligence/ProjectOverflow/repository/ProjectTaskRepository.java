package io.agileintelligence.ProjectOverflow.repository;

import io.agileintelligence.ProjectOverflow.domain.ProjectTask;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository  //Long refers to the type of the ID
public interface ProjectTaskRepository extends CrudRepository<ProjectTask, Long> {

    ProjectTask getById(Long id);
}
