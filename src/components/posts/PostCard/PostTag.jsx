import { For } from "solid-js";
export default function PostTag() {
  return (
    <section className="px-4">
      <ul className="flex flex-wrap items-center space-x-2">
        <For each={tags}>
          {(tag) => (
            <li>
              <a
                href="#"
                className="px-4 py-1 bg-blue-100 hover:bg-blue-200 text-blue-500 hover:text-blue-600 rounded-full"
              >
                {tag.name}
              </a>
            </li>
          )}
        </For>
      </ul>
    </section>
  );
}

const tags = [
  {
    name: "Solidjs",
  },
  {
    name: "Remix.run",
  },
  {
    name: "Graphql",
  },
];
