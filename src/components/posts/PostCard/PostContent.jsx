export default function PostContent(props) {
  return (
    <section class="px-4 py-4 flex flex-col space-y-2">
      <p class="text-[.9375rem] text-gray-700 dark:text-gray-200">
        {props.content}
      </p>
    </section>
  );
}
