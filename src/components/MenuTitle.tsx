type Props = {
  title: string;
}

export const MenuTitle = (props:Props) => {
  return (
    <div>
      {/* <img src={img} alt="" /> */}
      <p>{props.title}</p>
    </div>
  )
}