import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/inputField";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const { onSubmit } = props;

  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Please enter title")
      .min(5, "Title is too short"),
  });

  const form = useForm({
    defaultValues: {
      title: "",
    },

    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    if (!onSubmit) return;
    onSubmit(values);

    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Add to do" form={form} />
    </form>
  );
}

export default TodoForm;
