import { IconType } from "react-icons";

type Props = {
  title: string;
}

export const MenuTitle = (props:Props) => {
  return (
    <div>
      <p>{props.title}</p>
    </div>
  )
}