import * as Yup from "yup";

const productSchema = Yup.object().shape({
  title: Yup.string().required("The title is required"),
  price: Yup.number().required("The price is required"),
  img: Yup.string().required("The image url is required"),
  shortDescription: Yup.string().required("The short description is required"),
  longDescription: Yup.string().required("The long description is required"),
  unitsInStock: Yup.number().required("The units in stock is required"),
  authorFirstName: Yup.string().required("The author first name is required"),
  authorLastName: Yup.string().required("The author last name is required"),
  authorEmail: Yup.string().required("Required"),
});

export default productSchema;
