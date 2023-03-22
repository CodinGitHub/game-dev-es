type Props = {
  title: string;
  image: IconType;
}

export const MenuTitle = (props:Props) => {
  return (
    <div>
      {props.children}
      <p>{props.title}</p>
    </div>
  )
}