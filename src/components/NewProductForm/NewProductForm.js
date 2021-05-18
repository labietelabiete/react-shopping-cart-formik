import React from "react";
import { v4 as uuid } from "uuid";
import { Formik } from "formik";

import Input from "../Input";
import Button from "../Button";

import productSchema from "./product-schema";

function addProductDetails(product) {
  return {
    id: uuid(),
    ...product,
    quantity: 0,
    isFavorite: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    votes: {
      upVotes: {
        upperLimit: 10,
        currentValue: 0,
      },
      downVotes: {
        lowerLimit: 10,
        currentValue: 0,
      },
    },
    author: {
      id: uuid(),
      ...product.author,
    },
  };
}

function NewProductForm({ toggleNewProductForm, saveNewProduct }) {
  return (
    <div className="row mb-4 mt-2">
      <div className="col col-10">
        <div className="row justify-content-between">
          <div className="col col-8">
            <h2>New product</h2>
          </div>
          <div className="col col-4 ml-auto d-flex justify-content-end">
            <Button onClick={toggleNewProductForm}>Close form</Button>
          </div>
        </div>
        <hr />
      </div>
      <div className="col col-10">
        <Formik
          initialValues={{
            title: "",
            price: 0,
            img: "",
            shortDescription: "",
            longDescription: "",
            unitsInStock: 0,
            authorFirstName: "",
            authorLastName: "",
            authorEmail: "",
          }}
          validationSchema={productSchema}
          onSubmit={(values) => {
            const newProduct = addProductDetails(values);
            saveNewProduct(newProduct);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            values,
            touched,
            isValidating,
            isValid,
          }) => (
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                label="Product title"
                id="title"
                value={values.title}
                placeholder="Product title"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.title}
                errorMessage={errors.title}
              />
              <Input
                type="number"
                label="Product price"
                id="price"
                value={values.price}
                placeholder="Product price"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.price}
                errorMessage={errors.price}
              />
              <Input
                type="text"
                label="Product img"
                id="img"
                value={values.img}
                placeholder="Product img"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.img}
                errorMessage={errors.img}
              />
              <Input
                type="text"
                label="Product Short Description"
                id="shortDescription"
                value={values.shortDescription}
                placeholder="Product Short Description"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.shortDescription}
                errorMessage={errors.shortDescription}
              />
              <Input
                type="text"
                label="Product Long Description"
                id="longDescription"
                value={values.longDescription}
                placeholder="Product Long Description"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.longDescription}
                errorMessage={errors.longDescription}
              />
              <Input
                type="text"
                label="Product Long Description"
                id="longDescription"
                value={values.longDescription}
                placeholder="Product Long Description"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.longDescription}
                errorMessage={errors.longDescription}
              />
              <Input
                type="number"
                label="Product unitsInStock"
                id="unitsInStock"
                value={values.unitsInStock}
                placeholder="Product unitsInStock"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.unitsInStock}
                errorMessage={errors.unitsInStock}
              />
              <Input
                type="text"
                label="Product Author First Name"
                id="authorFirstName"
                value={values.authorFirstName}
                placeholder="Product Author First Name"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.authorFirstName}
                errorMessage={errors.authorFirstName}
              />
              <Input
                type="text"
                label="Product Author Last Name"
                id="authorLastName"
                value={values.authorLastName}
                placeholder="Product Author Last Name"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.authorLastName}
                errorMessage={errors.authorLastName}
              />
              <Input
                type="text"
                label="Product Author Email"
                id="authorEmail"
                value={values.authorEmail}
                placeholder="Product Author Email"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.authorEmail}
                errorMessage={errors.authorEmail}
              />
              {/* the other fields... */}
              <Button submitButton block disabled={isValidating || !isValid}>
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default NewProductForm;
