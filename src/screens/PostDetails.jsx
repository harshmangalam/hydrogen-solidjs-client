import { createResource, Match, Switch } from "solid-js";
import { useParams } from "solid-app-router";
import { fetchPost } from "../services/post.service";
import HydrogenLoader from "../components/shared/HydrogenLoader";
import Error from "../components/shared/Error";
export default function PostDetails() {
  const params = useParams();
  const [resource] = createResource(() => params.postId, fetchPost);

  return (
    <Switch>
      <Match when={resource.loading}>
        <HydrogenLoader />
      </Match>
      <Match when={resource.error}>
        <Error name="Post not found" />
      </Match>
      <Match when={resource()}>
        <div className="py-8 max-w-xl mx-auto bg-white dark:bg-gray-800 p-6">
          <pre>{JSON.stringify(resource().data.data.post)}</pre>
        </div>
      </Match>
    </Switch>
  );
}
