import React from "react";
import { Form } from "@remix-run/react";

import { FormState } from "~/routes/reviews/new";

import PrimaryButton from "~/components/Form/PrimaryButton";
import Accordion from "../Accordion/Accordion";

interface IConfirmationFormProps {
  state: FormState;
  changeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function ConfirmationForm({
  state,
  changeHandler,
}: IConfirmationFormProps) {
  return (
    <Form method="post">
      <Accordion state={state} changeHandler={changeHandler} />
      <PrimaryButton callToAction="Submit" />
    </Form>
  );
}
