exports.up = function (knex) {
    return knex.schema
      .createTable("projects", (table) => {
        table.increments("project_id");
        table.string("project_name", 128).notNullable();
        table.string("description");
        table.boolean("completed").defaultTo(false);
      })
      .createTable("tasks", (table) => {
        table.increments("task_id");
        table.string("task_description", 128).notNullable();
        table.string("task_notes", 128);
        table.boolean("completed").defaultTo(false);
        table
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("project_id")
          .inTable("projects");
      })
      .createTable("resources", (table) => {
        table.increments("resource_id");
        table.string("resource_name", 128).notNullable();
        table.string("resource_description", 128);
      })
      .createTable("project_resources", (table) => {
        table.increments("project_resources_id"); 
        table
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("project_id")
          .inTable("projects");
        table
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("resource_id")
          .inTable("resources");
      });
  };
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists("project_resources")
      .dropTableIfExists("resources")
      .dropTableIfExists("tasks")
      .dropTableIfExists("projects");
  };
  
