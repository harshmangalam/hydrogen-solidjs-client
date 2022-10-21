import { BsImages } from "solid-icons/bs";
import CheckIn from "../../components/posts/create/CheckIn";
import Feelings from "../../components/posts/create/Feelings";
import ImageUpload from "../../components/shared/ImageUpload";
import SpecificFriends from "../../components/posts/create/SpecificFriends";
import TagPeople from "../../components/posts/create/TagPeople";
import useCreatePost from "../../hooks/post/useCreatePost";
import { Show } from "solid-js";

export default function Create() {
  const {
    loading,
    form,
    handleChange,
    handleInput,
    handleSubmit,
    addSpecificFriend,
    removeSpecificFriend,
    addTaggedFriend,
    removeTaggedFriend,
    addImage,
    removeImage,
    addFeeling,
    removeFeeling,
  } = useCreatePost();
  return (
    <section className="max-w-md mx-auto bg-white dark:bg-gray-800  px-4 py-4  rounded-md shadow">
      <form onSubmit={[handleSubmit]} className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name">Post content</label>
          <textarea
            value={form.content}
            onInput={[handleInput]}
            name="content"
            className="rounded-md dark:bg-gray-700"
            rows={5}
            placeholder="What`s on your mind ?"
          />
        </div>
        <div className="grid grid-cols-1  gap-2">
          <div className="flex flex-col space-y-2">
            <label htmlFor="audience">Post privacy</label>
            <select
              value={form.audience}
              onInput={[handleChange]}
              name="audience"
              id="audience"
              className="rounded-md dark:bg-gray-700"
              required
            >
              <option value="">Select</option>
              <option value="PUBLIC">Public</option>
              <option value="FRIENDS">Friends</option>
              <option value="ONLY_ME">Only me</option>
              <option value="SPECIFIC">Specific friends</option>
            </select>
          </div>

          <Show when={form.audience === "SPECIFIC"}>
            <div>
              <SpecificFriends
                friends={form.specificAudienceFriends}
                addFriend={addSpecificFriend}
                removeFriend={removeSpecificFriend}
              />
            </div>
          </Show>
        </div>

        <div className="flex space-x-4 rounded-md border border-gray-400 dark:border-gray-600 px-2 py-2">
          <TagPeople
            friends={form.taggedFriends}
            addFriend={addTaggedFriend}
            removeFriend={removeTaggedFriend}
          />
          <ImageUpload
            image={form.image}
            addImage={addImage}
            removeImage={removeImage}
            sizeLimit="extended"
          >
            <BsImages className="text-green-500" />
          </ImageUpload>
          <Feelings
            feeling={form.feeling}
            addFeeling={addFeeling}
            removeFeeling={removeFeeling}
          />
          <CheckIn checkIn={form.checkIn} handleInput={handleInput} />
        </div>

        <div>
          <button
            disabled={loading()}
            type="submit"
            className="w-full  py-2 px-3 bg-blue-600 text-white rounded-md text-lg"
          >
            <Show when={!loading()} fallback={"Creating Post..."}>
              Create
            </Show>
          </button>
        </div>
      </form>
    </section>
  );
}
