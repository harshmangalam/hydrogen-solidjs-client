export default function FriendInterface(props) {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-6 mt-4">
      {props.children}
    </div>
  );
}
