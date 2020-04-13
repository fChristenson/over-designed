import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";

interface IField {
  name: string;
  value?: string;
}

const initFields: IField[] = [
  {
    name: "Productname",
    value: undefined,
  },
  {
    name: "Price",
    value: undefined,
  },
];

export const Page: React.FunctionComponent = () => {
  const [fields, setFields] = React.useState<IField[]>(initFields);
  const [selectedField, setSelectedField] = React.useState<
    IField | undefined
  >();
  const [open, setOpen] = React.useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    const name = selectedField && selectedField.name;
    //@ts-ignore
    const value = e.target[name].value;
    setFields(
      fields.map((f) => {
        if (f.name === name) f.value = value;
        return f;
      })
    );
    setOpen(false);
  };

  const onClick = (field: IField) => {
    setSelectedField(field);
    setOpen(true);
  };

  return (
    <div className="edit">
      {fields.map((f) => {
        return (
          <div>
            <div className="edit-field">
              <span className="edit-field__name">{f.name}</span>
              <IconButton onClick={() => onClick(f)}>
                <EditIcon />
              </IconButton>
            </div>
            {f.value}
          </div>
        );
      })}
      <Dialog onClose={() => setOpen(false)} open={open}>
        <DialogContent>
          <form onSubmit={onSubmit}>
            <TextField name={selectedField && selectedField.name} />
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
