import * as Yup from "yup";

const validations = Yup.object().shape({
  text: Yup.string().required("zorunlu"),
});

export default validations;
