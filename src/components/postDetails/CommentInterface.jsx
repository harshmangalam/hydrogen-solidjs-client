import useCreateComment from "../../hooks/comment/useCreateComment";

export default function CommentInterface(props) {
  const { handleInput, handleSubmit, form } = useCreateComment(
    props.refetchComment
  );
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="content"
        id="content"
        rows="5"
        placeholder="Start comment..."
        className="w-full rounded-xl dark:bg-gray-700"
        value={form.content}
        onInput={handleInput}
        required
        minLength={3}
      ></textarea>
      <button
        type="submit"
        className="px-4 py-2  bg-blue-400 hover:bg-blue-500 text-white rounded-full float-right"
      >
        Comment
      </button>
    </form>
  );
}
