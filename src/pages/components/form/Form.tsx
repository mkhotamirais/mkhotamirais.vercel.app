import Form1 from "./Form1";
import Form2 from "./Form2";
import Form2Yup from "./Form2Yup";
import Form3 from "./Form3";
import Form3Rhf from "./Form3Rhf";
import Form3RhfZod from "./Form3RhfZod";

export default function Form() {
  return (
    <div className="max-w-screen-sm mx-auto p-4">
      <h1 className="title">Form</h1>
      <div>
        <Form1 />
        <Form2 />
        <Form2Yup />
        <Form3 />
        <Form3Rhf />
        <Form3RhfZod />
      </div>
    </div>
  );
}
