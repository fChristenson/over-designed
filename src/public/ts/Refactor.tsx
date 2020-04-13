import React from "react";
import TextField from "@material-ui/core/TextField";

export const Page2: React.FunctionComponent = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target.productname.value;
    const price = e.target.price.value;
    alert(`${name} ${price}`);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField name="productname" placeholder="Productname" />
        <TextField name="price" placeholder="Price" />
        <input type="submit" />
      </form>
    </div>
  );
};
