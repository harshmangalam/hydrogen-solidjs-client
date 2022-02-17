export default function Snackbar(props) {
  return (
    <div className="flex items-center space-x-2">
      <p className="">{props.message}</p>
      <button onClick={[props.onClose]}>close</button>
    </div>
  );
}
