import { memo } from "react";

type Props = {
  header: string;
  listContent: any[] | undefined | null;
};

const HeaderList = memo((props: Props) => {
  const headerCounter = !props.listContent ? 0 : props.listContent?.length;

  return (
    <h3 className="fs-2 py-4 text-center _fw-regular">
      {props.header}: {headerCounter}
    </h3>
  );
});

export default HeaderList;
