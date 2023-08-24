import { FC, Suspense } from "react";
import FormSkeleton from "./FormSkeleton";
import { RForm } from "./Forms";

const RenderForm: FC<{
  name: string;
  activateNextForm: () => void;
  MoveTo: (secName: string, formName: string) => void;
}> = ({ name, activateNextForm, MoveTo }) => {
  return (
    <>
      <Suspense fallback={<FormSkeleton />}>
        <RForm
          name={name}
          activateNextForm={activateNextForm}
          MoveTo={MoveTo}
        />
      </Suspense>
    </>
  );
};

export default RenderForm;
