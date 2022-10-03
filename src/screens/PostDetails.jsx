import { createResource, Match, Show, Switch, createSignal } from "solid-js";
import { useParams } from "solid-app-router";
import { fetchPost } from "../services/post.service";
import HydrogenLoader from "../components/shared/HydrogenLoader";
import Error from "../components/shared/Error";
import Empty from "../components/shared/Empty";
import PostCard from "../components/posts/PostCard";
import CommentInterface from "../components/postDetails/CommentInterface";
import { getRelativeTime } from "../utils/dateTime";
import { deleteComment, fetchComments } from "../services";
import { useAuthState } from "../context/auth";
import { useUIDispatch } from "../context/ui";
import { AiOutlineDelete } from "solid-icons/ai";
import ConfirmDialog from "../components/ui/feedback/ConfirmDialog";

export default function PostDetails() {
  const params = useParams();
  const authState = useAuthState();
  const { addSnackbar } = useUIDispatch();

  const [open, setOpen] = createSignal(false);

  const [postResource, { refetch: refetchPost }] = createResource(
    () => params.postId,
    fetchPost
  );
  const [commentResource, { refetch: refetchComment }] = createResource(
    () => params.postId,
    fetchComments
  );

  const handleDeleteComment = async (commentId) => {
    try {
      const { data } = await deleteComment({ commentId });
      addSnackbar({ type: "success", message: data.message });
      refetchComment();
    } catch (error) {
      addSnackbar({ type: "error", message: error?.response?.data?.message });
    }
  };

  return (
    <div className=" max-w-xl mx-auto ">
      <Switch>
        <Match when={postResource.loading}>
          <HydrogenLoader />
        </Match>
        <Match when={postResource.error}>
          <Error name="Post not found" />
        </Match>
        <Match when={postResource()}>
          <div className="py-8  grid grid-cols-1 gap-6">
            <PostCard
              {...postResource().data.data.post}
              refetch={refetchPost}
              showDelete={false}
              showFooter={false}
            />
          </div>
        </Match>
      </Switch>

      <Switch>
        <Match when={commentResource.loading}>
          <HydrogenLoader />
        </Match>
        <Match when={commentResource.error}>
          <Error name="Comments error" />
        </Match>
        <Match when={commentResource()}>
          {/* textarea comments  */}
          <CommentInterface refetchComment={refetchComment} />
          <div className="relative mt-14">
            <Show
              when={commentResource().data.data.comments?.length}
              fallback={<Empty title="Empty Comments" />}
            >
              {/* comment lists */}

              <ul className="flex flex-col space-y-2">
                <For each={commentResource().data.data.comments}>
                  {(comment) => (
                    <li className="rounded-xl w-full px-4 py-4 bg-white dark:bg-gray-700">
                      <div className="items-start flex space-x-2">
                        <img
                          className="w-12 h-12 rounded-full flex-none"
                          src={comment.user.profileImage}
                          alt={comment.user.firstName}
                        />

                        <div className="grow">
                          <h6 className="font-semibold text-xl">
                            {comment.user.firstName}
                          </h6>
                          <p className="text-gray-500 dark:text-gray-400">
                            {getRelativeTime(comment.createdAt)}
                          </p>
                          <p className=" mt-2">{comment.content}</p>
                        </div>

                        {/* Delete Button*/}
                        <Show
                          when={authState.currentUser?.id == comment.user.id}
                        >
                          <button
                            onClick={() => setOpen(true)}
                            class=" p-2 hover:bg-red-100 dark:hover:bg-red-400 dark:text-white text-xl rounded-full text-red-500"
                          >
                            <AiOutlineDelete />
                          </button>
                        </Show>

                        <ConfirmDialog
                          open={open()}
                          onClose={() => setOpen(false)}
                          title="Delete Comment"
                          content="Do you want to delete this comment"
                          actions={[
                            { name: "No", onClick: () => setOpen(false) },
                            {
                              name: "Yes",
                              onClick: () => handleDeleteComment(comment.id),
                              variant: "danger",
                            },
                          ]}
                        />
                      </div>
                    </li>
                  )}
                </For>
              </ul>
            </Show>
          </div>
        </Match>
      </Switch>
    </div>
  );
}
