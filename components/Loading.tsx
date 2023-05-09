type Props = {};

function Loading({}: Props) {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
}

export default Loading;
