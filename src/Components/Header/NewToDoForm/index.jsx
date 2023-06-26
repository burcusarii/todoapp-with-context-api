import React from "react";
import { Formik, Field, Form } from "formik";
import validationSchema from "./validations";
import { useTodo } from "../../../Context/ToDoContext";

function NewToDoForm() {
  const { addToDo } = useTodo();
  return (
    <div>
      <Formik
        initialValues={{
          text: "",
        }}
        onSubmit={(values, bag) => {
          addToDo(values.text);
          bag.resetForm();
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <Field
            id="text"
            name="text"
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
          />
        </Form>
      </Formik>
    </div>
  );
}
export default NewToDoForm;
